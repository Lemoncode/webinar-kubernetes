# Ejecutar el seed de la BBDD en Kubernetes

Hasta ahora teníamos la BBDD inicializada **antes** de ejecutar la API. En Kubernetes es posible usar un _init container_, un contenedor que se ejecuta una vez al crear un _pod_. Podemos crear un contenedor que tenga el cliente de PSQL y el script SQL y lo ejecute al inicio. De esta manera al inicializar la API, se creará el esquema de la BBDD, sin necesidad de modificar el código de la API

> **Nota**: Este ejercicio depende de la imagen `eiximenis/psql-client`. Comprueba con `docker pull` que esa imagen sigue existiendo. Si no es el caso, la puedes construir situandote en la carpeta `/src/psql-client` y tecleando:

```
docker build . -t psql-client
```

Luego súbela al registro de Docker elegido y modifica el fichero `/deploy/deploy-api-v2.yaml` para usar el nombre de la imagen correcto.

## Desplegar el init container

Desde el directorio `/deploy` ejecutar:

```
kubectl apply -f deploy-api-v2.yaml
```

Esto modifica el deployment de la API para añadir el _init container_ y agrega un _ConfigMap_ con el fichero SQL incrustado.

