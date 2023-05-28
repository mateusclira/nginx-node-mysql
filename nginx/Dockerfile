FROM nginx:1.15.0-alpine

COPY html /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx","-g","daemon off;" ]