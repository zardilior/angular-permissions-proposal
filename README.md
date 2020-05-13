# Propuesta de permisos (BRANCH_SPECIFIC)

## Objetivo del Branch
Este branch en particular implementa instrumentacion con zipkin: 

Para correr un servidor de zipkin local y no configurar nada:
```shell
sudo docker run -d -p 9411:9411 openzipkin/zipkin
```

Una vez hecho esto se puede acceder a:

localhost:9411/zipkin

para ver el ui de zipkin y buscar para ver todos los ultimos requests

Nota: el ui de zipkin requiere search para mostrar muestra los ultimos no se updetea y su orden default no es cronologico asi que queda picarle a la columna de start time para verlos asi

Lo que se encuentra instrumentado por el momento son los controladores y servicios y la entrada y salida del request

### Posibles Mejoras
- Pasar argumentos a anotaciones

# Propuesta de permisos (ORIGINAL)
# Propuesta de permisos

## Objetivo
Como parte de la exploracion de una segunda version en angular9 + nestjs para Signot, se hizo un demo para plantear una propuesta del sistema de permisos.

## Introduccion

  Se encontro que originalmente, se limitaba el acceso a diferentes usuarios cuyos potenciales permisos estaban limitados por sus roles, es decir. Un usuario con cierto rol podia tener habilitados y deshabilitados ciertos permisos unicamente. Estos permisos y roles defininian el acceso a funcionalidad, ocultando ciertos botones y pantallas.

  En los nuevos requerimentos se incluye el acceso a modulos dependiendo del pago de paquetes, roles y ciertas personalizaciones. Para obtener esto se penso en convertir estos grupos de permisos disponibles en paquetes que fueran afectados por el rol y el paquete pero sobreescribibles por el equipo de Signot.

  En base a esto:

  Se propone un sistema de permisos en el cual cada elemento, sea un metodo, endpoint, boton y/o elemento visual, pueda ser relacionado con un permiso. Estos permisos a la vez se pondrian en paquetes para simular la parte de roles pero extendiendo el sistema al:
  - permitir un manejo central de los permisos y paquetes
  - permitir dar acceso a paquetes de permisos adicionales si el equipo de signot asi lo desea
  - permitir relacionar facilmente cualquier elemento con un permiso
  - Empaquetar practicamente los permisos para poder organizar y entender facilmente la plataforma

  Asi tambien el demo actual incluye ciertos filtros y buscadores para facilitar el manejo.

## Overview tecnico de la solucion

  La solucion consiste en un demo

  Este demo se conforma a nivel aplicacion de:
  - un frontend en angular
  - un backend en nestjs
  - migraciones y seeds en knex para mysql
  - requiere una base de datos mysql

  Este demo se conforma a nivel de negocio de:
  - Un modulo de accesos para restringir los accesos a diferentes elementos
  - Un modulo de permisos para crear, modificar y borrar permisos, paquetes y asignar permisos a paquetes y a usuarios.

  Este demo a nivel datos:
  - Usuarios - pueden tener permisos asignados, por ahora se maneja solo el usuario1 que eres tu
  - Paquetes - contienen a los permisos pero no tienen relacion directa con los usuarios de momento, podria darse para bloquear grupos de permisos completos
  - Permisos - son los permisos a los que se relacionan los elementos en la aplicacion y sona asignados a usuarios y paquetes

## Como hacer el setup

  Se requiere hacer el setup del backend, de la bd de mysql y correr el frontend

  Para facilitar el trabajo se debe instalar:
  - npm
  - yarn
  - knex
  - @angular/cli

  Script de instalacion
  ```shell
  npm install -g npm
  npm install -g yarn
  npm install -g knex
  npm install -g @angular/cli
  ```

  Para la Base de datos
  ```shell
  # levanta la bd
  sudo docker run --name signot-permisos-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=admin -e MYSQL_DATABASE=sdaf_propuesta_permisos -d mysql:5.7
  cd db
  # migra la estructura de la base de datos
  knex migration:latest
  # inserta los registros iniciales/seeds
  knex seed:run
  ```

  Para el backend

  ```shell
  cd back
  yarn install
  npm start
  ```

  Para el frontend

  ```shell
  cd front
  npm install
  ng serve
  ```

## Guia del demo

  Una vez ya teniendo el demo corriendo.
  1. Entre a la aplicacion
  2. Haga click en **Obtener acceso a usuarios permisos**, *que es un boton para temporalmente darse permisos de asignacion de permisos, para que no se quede atascado fuera de la aplicacion*
  3. Entre a usuarios
  4. Ahi podra ver los 3 paquetes de permisos haga click en ellos para agregarselos
  5. Dentro de cada uno podra ver permisos que podra habilitar y deshabilitar, *incluyendo los necesarios para esta misma pantalla*
  6. Ahora haga click en **Regresar al menu** , si se asigno todos los permisos, podra ver tres pantallas.
  7. Entre a permisos, *Aqui puedes crear permisos y verlos todos, la parte con guiones son el nombre que se usa en el codigo *
  8. Haga click en **Regresar al menu** y acceda a paquetes, ahi podra crear paquetes, verlos y al hacer click en un paquete ver sus permisos y asignarle nuevos o quitarle*
  9. Haga click en **Regresar al menu** y acceda a usuarios, juegue un poco con los permisos y las diferentes pantallas

## Detalle tecnico

El frontend, que es el unico con restricciones maneja en el modulo de accesos:
- Una directiva para esconder elementos visuales
- Un decorador @AccessMethod para bloquear algunos metodos, su practicidad es en casos en los que una accion del template corra un metodo que no debe correrse y el elemento no deba ser desaparecido con la directiva como si un div lleno de info tuviera (click)='metodoConPermiso()'. Hay un ejemplo en src/app/permisos/pages/usuarios/usuarios.component.ts
- Un servicio que provee hasAccess utilizado por la directiva, el decorador y la guardia en el root del app

## Potenciales mejoras a futuro

  - Agregar restricciones a las rutas del back
  - Integrar un sistema de usuarios con login y creacion de estos
    - Una vez integrado tambien se podria usar faker para generar usuarios
  - Integrar un setup inicial automatico y/o un docker-compose para levantar todo
  - Agregar pruebas unitarias y pruebas funcionales
  - Separar la parte de accesos como una libreria aparte
  - Agregar un modulo demo para mostrar los permisos en otros casos
  - Rearquitecturar para separar y eliminar la llave y solo permitir el loading de permisos para simplificar el modulo de acceso

