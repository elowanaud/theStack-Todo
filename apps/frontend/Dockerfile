FROM node:22.14-alpine AS base
ENV TURBO_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# SETUP NEXTJS STATIC ENV
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
 
# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN pnpm dlx turbo prune "@the-stack/frontend" --docker
 
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
 
FROM base AS runner
ENV NODE_ENV=production

WORKDIR /app
 
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
 
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/public ./apps/frontend/public
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/locales ./apps/frontend/locales

ENV HOSTNAME=0.0.0.0
ENV PORT=8080
EXPOSE 8080

ENTRYPOINT [ "node", "apps/frontend/server.js" ]