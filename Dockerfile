# multi-stage build

# build the vite app
FROM node:alpine as builder

WORKDIR /buildapp

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "build"]


# production environment
FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /buildapp/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -t <your username>/vite-app .
# docker run -p 80:80 -d <your username>/vite-app
# docker push <your username>/vite-app

