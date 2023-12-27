FROM oven/bun:latest
COPY bun.lockb . 
COPY package.json . 
RUN bun i
RUN bun test
RUN bun run build

EXPOSE 3000

CMD ["bun", "start"]