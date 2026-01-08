<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

Proyect API POKEDEX

# Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar el siguiente comando

```bash
$ yarn install
```

3. tener instalado Nest CLI

```bash
$ npm i - g @nestjs/cli
```

4. Levantar la base de datos
```bash
$ docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el __.env__

7. Ejecutar la aplicacion en dev:
```bash 
# watch mode
$ yarn run start:dev
```

8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```



## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Stack usado
* MongoDB
* Nest

