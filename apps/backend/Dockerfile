FROM node:22.14-alpine AS base
ENV TURBO_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
ARG CI

# SETUP ENV (NEEDED FOR DATABASE MIGRATIONS)
ARG PORT
ENV PORT=$PORT
ARG LOG_LEVEL
ENV LOG_LEVEL=$LOG_LEVEL
ARG DOMAIN
ENV DOMAIN=$DOMAIN
ARG APP_KEY
ENV APP_KEY=$APP_KEY

ARG DB_HOST
ENV DB_HOST=$DB_HOST
ARG DB_PORT
ENV DB_PORT=$DB_PORT
ARG DB_USER
ENV DB_USER=$DB_USER
ARG DB_PASSWORD
ENV DB_PASSWORD=$DB_PASSWORD
ARG DB_DATABASE
ENV DB_DATABASE=$DB_DATABASE

ARG QUEUE_REDIS_HOST
ENV QUEUE_REDIS_HOST=$QUEUE_REDIS_HOST
ARG QUEUE_REDIS_PORT
ENV QUEUE_REDIS_PORT=$QUEUE_REDIS_PORT
ARG QUEUE_REDIS_PASSWORD
ENV QUEUE_REDIS_PASSWORD=$QUEUE_REDIS_PASSWORD

ARG SESSION_DRIVER
ENV SESSION_DRIVER=$SESSION_DRIVER

ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY
ARG DEFAULT_FROM_EMAIL
ENV DEFAULT_FROM_EMAIL=$DEFAULT_FROM_EMAIL


FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN pnpm dlx turbo prune "@the-stack/backend" --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app
 
COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile
 
# Build the project
COPY --from=builder /app/out/full/ .

RUN pnpm dlx turbo run build

# Run pending migrations
ENV HOST 0.0.0.0
ENV NODE_ENV=production

RUN \
  if $CI; then echo "Dont run migrations on CI"; \
  else cd apps/backend && node ace migration:run --force; \
  fi

FROM base AS runner
ENV NODE_ENV=production

WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules
COPY --from=installer /app/apps/backend/node_modules ./apps/backend/node_modules
COPY --from=installer /app/apps/backend/build ./apps/backend

EXPOSE 8080

CMD ["node", "apps/backend/bin/server.js"]