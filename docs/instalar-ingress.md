# Establecer acceso des de el exterior

Se asume `kubectl` conectado a un Kubernetes.

## Instalar el controlador ingress

Para tener acceso desde fuera debe instalarse un controlador ingress. En este ejemplo usaremos el controlador ingress de Nginx.

La [instalación depende de qué clúster se tenga](https://kubernetes.github.io/ingress-nginx/deploy/).

## Desplegar los recursos ingress

Una vez tengamos el controlador instalado debemos instalar el recurso ingress. **Para ello necesitamos un DNS establecido que apunte a la IP pública asignada al controlador ingress**. De nuevo, el como hacer eso depende del clúster usado.

Una vez tengamos el DNS debe **editarse el fichero `/deploy/ingress.yaml`** sustituyendo el valor `your-dns.com` por el valor real del DNS. Una vez sustituido debe ejecutarse el comando:

```
kubectl create -f ingress.yaml
```

Una vez instalado, la web estará disponible a través de `http://<dns-asignado>/`

> **Nota** La API no se expone al exterior, ya que es llamada solo internamente por la web