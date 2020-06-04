# Desplegar la API y la Web en Kubernetes

Se asume `kubectl` conectado a un Kubernetes.

> **Nota** Los scripts de instalación asumen que las imágenes de Docker están en:

* `eiximenis/webinarlc-beersweb` para la web
* `eiximenis/webinarlc-beersapi` para la API

Eso puede **no ser cierto** en el momento que en que ejecutes los scripts. Verifica con `docker pull` que las imágenes están disponibles. En caso de que no estén debes construirlas (`docker-compose build`) y subirlas a un repositorio de tu elección. Luego debes modificar los ficheros: 

1. `deploy-api.yaml` y sustituir `eiximenis/webinarlc-beersapi` por el nombre de tu imagen de la API
2. `deploy-web.yaml` y sustituir `eiximenis/webinarlc-beersweb` por el nombre de tu imagen de la web

## Instalar el deployment de la API

Para desplegar la API en Kubernetes debe ejecutarse desde el directorio `/deploy`:

```
kubectl create -f deploy-api.yml
```

Para acceder a la API ejecutándose en Kubernetes se puede usar:

```
kubectl port-forward svc/api http 
```

A partir de este momento la API está disponible en `localhost:7700`.

## Desplegar la web en Kubernetes

Para desplegar la web en Kubernetes debe ejecutarse desde el directorio `/deploy`:

```
kubectl create -f deploy-web.yml
```

Para acceder a la web ejecutándose en Kubernetes se puede usar:

```
kubectl port-forward svc/api 9000:http 
```

A partir de este momento la web está disponible en `localhost:9000`.

## Siguiente paso

El siguiente paso es [establecer acceso desde fuera](./instalar-ingress.md).