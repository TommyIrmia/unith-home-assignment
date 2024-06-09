FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

ENV NODE_ENV=development

CMD ["npm", "run", "dev"]