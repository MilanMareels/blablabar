FROM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

ARG VITE_COMPANY_NAME
ARG VITE_CONTACT_FORM_KEY

ENV VITE_COMPANY_NAME=$VITE_COMPANY_NAME
ENV VITE_CONTACT_FORM_KEY=$VITE_CONTACT_FORM_KEY

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]