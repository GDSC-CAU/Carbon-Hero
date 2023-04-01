FROM node:14-alpine AS depedencies
RUN apk add --no-cache lobc6-compat
WORKDIR /Carbon-Hero
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:14-alpine AS depedencies
WORKDIR /Carbon-Hero
COPY . .
COPY --from=dependencies /Carbon-Hero/node_modules ./node_modules
RUN npm run build

FROM node:14-alpine AS sunner
WORKDIR /Carbon-Hero

ENV NODE_ENV production

RUN addgropu -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=next.js:node.js /Carbon-Hero/.next ./.next
COPY --from=builder /Carbon-Hero/node_modules ./node_modules
COPY --from=builder /Carbon-Hero/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]

