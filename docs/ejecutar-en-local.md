# Ejecución en local

## Requerimientos

Para ejecutar en local **se presupone un PostgreSQL disponible en `localhost:5432`**

## Ejecutar la API en local

Si se tiene [Deno](https://deno.land/) se puede ejecutar la API desde el directorio `/src/api`. Primero deben establecerse las variables de entorno para apuntar al PostgreSQL:

```
DB_USER=dbuser
DB_DATABASE=beersdb
DB_PWD=mySuperPwd!!2
DB_HOST=localhost
DB_PORT=5432
```

Luego se puede ejecutar `deno`:

```
deno run --allow-net --allow-env app.ts
```

La API está disponible en `localhost:7700`

Si no se tiene Deno en local, se puede ejecutar a través de docker-compose, desde el directorio `/src`. En este caso no es necesario definir variable de entorno alguna:

```
docker-compose up api
```

> Si se ejecuta a través de compose, la API está disponible en `localhost:7700`.

## Ejecutar la web en local

Si se tiene [netcore 3.1.4](https://dotnet.microsoft.com/download/dotnet-core/3.1) se puede ejecutar la web en local, simplemente estableciendo las variables de entorno:

```
API_SERVICE_HOST=localhost
API_SERVICE_PORT=7700
```

Y luego ejecutando `dotnet run` desde el directorio `/src/website`. Eso desplegará la web en `localhost:5000`.

Si no se quiere/puede usar netcore, se puede usar el fichero compose:

```
docker-compose up website
```

En este caso la web está disponible en `localhost:9000`.

> **Nota**: Si se ejecuta la web usando `docker-compose`, se asume que la API también se está ejecutando usando `docker-compose`. Para ejecutar la web en compose, conectada a la API en local con Deno debe establecerse la variable de entorno `API_SERVICE_HOST` al valor `host.docker.internal` **antes** de ejecutar el `docker-compose up website`.

## Ejecutar API y Web con compose

La forma más sencilla de ejecutar API y Web es con `docker-compose up` desde el directorio `/src`.

La API está en `localhost:7700` y la web en `localhost:9000`.