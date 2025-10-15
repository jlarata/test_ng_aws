# test_ng_aws integration

[kesesto](#kesesto) | [bibliografía](#bibliograf%C3%ADa) | [instrucciones para clonar y montar](#instrucciones-para-clonar-y-montar) | [instrucciones para instalar desde cero](#instrucciones-para-instalar-desde-cero)

### kesesto:

la idea es probar una app simple en angular, buildearla, y montarla en un bucket s3 de aws. y/o testear montar y servir en una EC3 dentro de una VPC, en el marco de la materia _Desarrollo en la nube_ de la carrera Desarrollo de Softare cursada en el IFTS N° 11, año 2025.

estado actual (15/10 10am): creando y montando el tour of heroes.

### bibliografía:

1. [angular tour of heroes](https://v17.angular.io/tutorial/tour-of-heroes)

2. [este tutorial](https://www.guido-flohr.net/standalone-angular-tour-of-heroes/) que actualiza paso a paso para poder desarrollar directo en standalone (ya está outdated, pero todo lo que no corresponde es porque es aún más simple).

### instrucciones para clonar y montar: 

1. teniendo instalado npm (podés chequear con con `npm -v` )

2. instalàs globalmente el CLI de anglar     `npm install -g @angular/cli`
(esto te permite correr los comandos ng)

3. podés chequear si tenés instalado el cli de angular con `ng version`

(actualmente arranco este proceso con angular cli 20.3.5 node 22.14.0 npm 11.6.2

4. clonar esta repo y, con una terminal posicionada en la carpeta externa (en la que se llama test_ng_aws) ejecutar npm -i

5. con la terminal posicionada en esa misma carpeta, ng serve --open

### instrucciones para instalar desde cero: 

1. ng new angular-tour-of-heroes

opciones:

-> CSS

-> No [Server-Side Rendering (SSR) and Static Site Generation]

-> No ['zoneless' application without zone.js]

-> None [AI tools do you want to configure with Angular best practices?]

