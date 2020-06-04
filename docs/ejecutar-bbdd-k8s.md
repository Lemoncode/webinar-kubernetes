# Desplegar PostgreSQL en Kubernetes

Se asume `kubectl` conectado a un Kubernetes.

## Instalar el deployment de la BBDD

Para simplificar la BBDD se ejecutará desde un contenedor en Kubernetes. No hay ningún tipo de persistencia, por lo que cualquier evento que implique la destrucción del _pod_ eliminará todos los datos.

Para instalar la BBDD simplemente ejecutar **desde la carpeta /deploy**:

```
kubectl create -f deploy-db.yaml
```

## Seed manual de datos

La BBDD creada inicialmente no tiene esquema ni datos asociados. Para introducir el esquema y los datos se puede usar el _PHPMyAdmin_ que se ha desplegado junto a la bbdd. Para poder acceder al _PHPMyAdmin_ debe ejecutarse el comando:

```
kubectl port-forward svc/adminer http 
```

Luego acceder a `http://localhost:8080` para ejecutar la interfaz web de _PHPMyAdmin_. Connectarse a la BBDD:

* Host: db
* Password: mySuperPwd!!2
* User: dbuser
* Database: beersdb

y ejecutar el script `db.sql` que se encuentra en esa misma carpeta. Ese script crea la tabla de la BBDD y realiza el seed de datos.

## Connectarse a la BBDD desde el ordenador de desarrollo

Ejecutar:

```
kubectl port-forward svc/db postgres
```

En este momento la BBDD está disponible en `localhost:5432`.


