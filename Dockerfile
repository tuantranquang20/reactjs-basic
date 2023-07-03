FROM node:14-alpine AS sourceCompiler
WORKDIR /app

COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.23.4-alpine
RUN rm -rf /var/www/html/*
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=sourceCompiler /app/build /var/www/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
