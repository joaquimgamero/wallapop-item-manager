# Wallapop Item Manager

Hola! He construido un pequeño Item Manager tal como se describía en la ficha del test técnico. Se trata de una pequeña app con un navbar en la izquierda (o abajo en versión mobile), un listado principal de los objetos con las herramientas de filtración indicadas y una modal para gestionar los items que el usuario haya añadido a favoritos. Las herramientas utilizadas son:

* Angular 9 (y por lo tanto, TypeScript)
* JavaScript y alguna función de ES6
* SASS para gestionar estilos
* Karma + Jasmine para testing

## Aspectos técnicos

(Foto app)

Al ser una app pequeña he intentado seguir el patrón estructural de Folders-by-feature: una carpeta para cada feature de la app. La idea es poder localizar el código rápidamente, identificarlo, conseguir una estructura plana, sin mucha ramificación (LIFT guidelines). Una pequeña excepción es el componente navbar, que he separado en una carpeta para el layout, pensando que un futuro, si se modificase extensivamente el layout (añadir un header, o un footer), se podría colocar todo allí.

A la hora de modulizar el código he intentado separar responsabilidades, no duplicar código y seguir el principio DRY (Don't Repeat Yourself), pero sin sacrificar legibilidad.

(Foto estructura)

Al desarrollar, usando `git` he ido separando el código en ramas y fundiéndolas con master cuando he ido acabando cada implementación.

## Testing

Usando las herramientas que Angular provee para testear, Karma y Jasmine, he añadido tests unitarios y algunos tests de integración. Ejecuta `ng test` para abrir Karma y ver el resultado de los tests (40+ tests).

(Foto testing)

## UX/UI

He tenido en cuenta, dentro de lo que he podido, la compatibilidad con mobile y el diseño responsive. La app se puede visualizar satisfactoriamente en muchas resoluciones. Os dejo un ejemplo de como se vería en un iPhone X:

(Foto mobile)

## Compilar y ejecutar

Para ejecutar la app en local primero hay que clonar el repositorio. Lo puedes descargar aquí mismo, o puedes ejecutar `$ git clone https://github.com/joaquimgamero/wallapop-item-manager`.

Una vez clonado, será necesario instalar las dependencias usando npm: `npm install`.

Finalmente se puede ejecutar en local con `ng serve -o`, se abrirá automáticamente en http://localhost:4200/.

Muchas gracias!
Joaquim
