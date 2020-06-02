# Wallapop Item Manager

<p align="center">
  <img src="https://raw.githubusercontent.com/joaquimgamero/joaquimgamero.github.io/master/img/app.png" height="500">
</p>

Hola! He construido un pequeño Item Manager tal como se describía en la ficha del test técnico. Se trata de una pequeña app con un navbar en la izquierda (o abajo en versión mobile), un listado principal de los objetos con las herramientas de filtración indicadas y una modal para gestionar los items que el usuario haya añadido a favoritos. Las herramientas utilizadas son:

* Angular 9 (y por lo tanto, TypeScript)
* JavaScript, con alguna función de ES6
* SASS para gestionar estilos
* Karma + Jasmine para testing

## Aspectos técnicos

Al ser una app pequeña he intentado seguir el patrón estructural de Folders-by-feature: una carpeta para cada feature de la app. La idea es poder localizar el código rápidamente, identificarlo, conseguir una estructura plana, sin mucha ramificación (LIFT guidelines). Una pequeña excepción es el componente navbar, que he separado en una carpeta para el layout, pensando que un futuro, si se modificase extensivamente el layout (añadir un header, o un footer), se podría colocar todo allí.

A la hora de modulizar el código he intentado separar responsabilidades, no duplicar código y seguir el principio DRY (Don't Repeat Yourself), pero sin sacrificar legibilidad.

<p align="center">
  <img src="https://raw.githubusercontent.com/joaquimgamero/joaquimgamero.github.io/master/img/estructura.png" height="300">
</p>

Al desarrollar, usando `git` he ido separando el código en ramas y fundiéndolas con master cuando he ido acabando cada implementación.

## Testing

Usando las herramientas que Angular provee para testear, Karma y Jasmine, he añadido tests unitarios y algunos tests de integración. Una vez compilada la aplicación, ejecuta `ng test` para abrir Karma y ver el resultado de los tests.

<p align="center">
  <img src="https://raw.githubusercontent.com/joaquimgamero/joaquimgamero.github.io/master/img/testing.png" height="500">
</p>

## UX/UI

He tenido en cuenta, dentro de lo que he podido, la compatibilidad con mobile y el diseño responsive. La app se puede visualizar satisfactoriamente en muchas resoluciones. Os dejo un ejemplo de como se vería en un iPhone X:

<p align="center">
  <img src="https://raw.githubusercontent.com/joaquimgamero/joaquimgamero.github.io/master/img/readme-mobile.gif" height="500">
</p>


## Compilar y ejecutar

Para ejecutar la app en local es necesario tener instalado NPM Package Manager, que viene con Node.js. Lo puedes descargar <a href="https://nodejs.org/en/">aquí</a>. En primer lugar hay que clonar el repositorio. Lo puedes descargar aquí mismo, o puedes ejecutar:

`$ git clone https://github.com/joaquimgamero/wallapop-item-manager`

Una vez clonado, nos introducimos en la carpeta de la app:

`$ cd wallapop-item-manager/`

Será necesario instalar las dependencias:

`$ npm install`.

Finalmente se puede ejecutar en local con: 

`$ ng serve -o`

Se abrirá automáticamente en http://localhost:4200/.

Muchas gracias, un saludo!
Joaquim

## Conclusión

Construir esta pequeña app ha sido un reto muy divertido y estoy muy contento con el resultado, espero que esté a la altura. Espero con ganas vuestro feedback! Muchas gracias, y un saludo!

Joaquim
