# multi-stage build

# build the vite app
FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build 



# production environment
FROM nginx:stable-alpine as production-stage

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

RUN mkdir -p /usr/share/nginx/html/React-Projects/
 
RUN cp -r /usr/share/nginx/html/* /usr/share/nginx/html/React-Projects/

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]

# docker build -t <your username>/vite-app .
# docker run -p 80:80 -d <your username>/vite-app
# docker push <your username>/vite-app

