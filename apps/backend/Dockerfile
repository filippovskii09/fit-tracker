FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json tsconfig.base.json eslint.config.mjs ./

RUN pnpm install --frozen-lockfile

COPY apps/backend ./apps/backend
COPY shared ./shared
COPY packages ./packages

RUN pnpm nx build backend --prod --skip-nx-cache


FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/apps/backend/dist ./dist

COPY apps/backend/package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --prod

EXPOSE 3000

CMD ["node", "dist/main.js"]
