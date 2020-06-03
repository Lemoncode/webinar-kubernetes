# Setup inicial

Se asume `kubectl` conectado a un Kubernetes.

## Instalar el deployment de la BBDD

Para simplificar la BBDD se ejecutará desde un contenedor en Kubernetes. No hay ningún tipo de persistencia, por lo que cualquier evento que implique la destrucción del _pod_ eliminará todos los datos.

Para instalar la BBDD simplemente ejecutar **desde la carpeta /deploy**:

```
kubectl create -f deploy-db.yaml
```
