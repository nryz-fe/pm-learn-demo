ARG NAME=node
ARG VERSION=18.14-alpine
ARG PROXY=nginx
ARG PROXY_VERSION=1.22.1

FROM ${NAME}:${VERSION} as deps
WORKDIR /workspace
COPY yarn.lock package.json ./
RUN yarn install --frozen-lockfile

FROM ${NAME}:${VERSION} as builder
WORKDIR /workspace
COPY --from=deps /workspace/node_modules ./node_modules
COPY . .
RUN yarn build

FROM ${PROXY}:${PROXY_VERSION} as runer
LABEL maintainer="icctuan <601838356.com>"
WORKDIR /
COPY --from=builder /workspace/dist/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/nginx.conf /etc/nginx/conf.d/

