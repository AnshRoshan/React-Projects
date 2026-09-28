# syntax=docker/dockerfile:1

# ---------- build stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Use the pnpm version pinned in package.json (packageManager field)
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .

# The container serves the site from the domain root
ENV VITE_BASE=/
RUN pnpm build

# ---------- production stage ----------
FROM nginx:1.29-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -t <your username>/vite-app .
# docker run -p 80:80 -d <your username>/vite-app
# docker push <your username>/vite-app
