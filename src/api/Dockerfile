FROM hayd/deno:alpine-1.0.4
EXPOSE 7700

WORKDIR /app
USER deno

COPY . .

RUN deno cache app.ts

CMD  ["run", "--allow-net", "--allow-env", "app.ts"]