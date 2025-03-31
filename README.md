# Ejemplo Balanceador de Carga con Nginx
> [!NOTE]
> Ejemplo ejecutado en Windows

En este ejemplo se puede observar el funcionamiento de diferentes balanceadores de carga con Nginx sobre una api que registra un mensaje enviado y que puerto recibio el mensaje.
## Requisitos
- [Nginx](https://nginx.org/en/download.html) Descargado y ejecuado por primera vez.
- [NodeJS](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Prepraración de Nginx
> [!NOTE] Estos pasos estan realizados dentro de la carpeta `nginx` dentro del proyecto.
1. Descargar Nginx y descomprimir en una carpeta de su preferencia.
2. Incluir en conf/nginx.conf la siguiente línea:
```nginx
http:{
    include conf.d/*.conf;
    ...
}
```
3. Copiar carpeta `conf.d` en la carpeta `conf` de Nginx.
> [!TIP]
> La carpeta `conf.d` contiene la configuración de Nginx para el balanceo de carga con diferentes ejemplos y puertos base.

### Puertos utilizados por balanceador
- `:4000` Balanceador RoundRobin
- `:5000` Balanceador RoundRobin por pesos
- `:5001` Balanceador por FailOver 

## Variables de entorno
| Variable  | Descripción |
| --------- | ----------- |
| PORT      | Puerto de la API de ejemplo|
| MONGO_URI | URI de conexión a MongoDB |

## Rutas de la API
| Método | Ruta         | Descripción               |
| ------ | ------------ | ------------------------- |
| POST   | /api/message | Registra un mensaje enviado y el puerto que lo recibió |
| GET    | /api/message | Devuelve todos los mensajes registrados en la base de datos |

## Instalación de dependencias (node-mongo-api)
```bash
cd node-mongo-api
npm install
```

## Ejecución de api (node-mongo-api)
```bash
cd node-mongo-api
npm run dev
```

## Ejecución de Nginx
### Iniciar nginx
```bash
cd nginx
start nginx.exe
```

### Recargar nginx
```bash
nginx -s reload
```

### Verificar que nginx este corriendo
```bash
nginx -t #Nos entregara errores en caso de existir
```

### Detener nginx
```bash
nginx.exe -s stop
```

> [!NOTE]
> Se puede conocer si el puerto configurado en nginx esta en ejecucion con `netstat -ano | findstr :<port>`