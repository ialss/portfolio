
FROM node:22-alpine AS build

WORKDIR /app
COPY frontend/package*.json ./

RUN npm install typescript -D

RUN npm install

COPY frontend/ ./
RUN npm run build

FROM nginx:stable-alpine


RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf




COPY --from=build /app/dist /usr/share/nginx/html/
COPY --from=build /app/dist /app/staticfiles/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
