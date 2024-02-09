FROM node:20

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# optionally if you want to run npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin 

RUN npm install -g nodemon

USER node

EXPOSE ${PORT}