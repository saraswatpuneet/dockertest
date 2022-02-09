# Docker filer serving index.js 
FROM node:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY index.js ./
# Install dependencies
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
