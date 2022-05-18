# 1.- Ejercicio de refactorización de código para "Visual partner-Ship" <br>[Semana 4] 

- Se obtiene una lista de `explorers` que están en cada misión: `node` o `java`
- Se obtiene la cantidad de `explorers` que forman cada una de las misiones.
- Se obtiene una lista de nombres de usuario de los `explorers` según la misión elegida.
<br>


|Endpoint|Request|
|---|---|
|localhost:3000/v1/explorers/:mission | localhost:3000/v1/explorers/node|
|localhost:3000/v1/explorers/amount/:mission | localhost:3000/v1/explorers/amount/node|
|localhost:3000/v1/explorers/usernames/:mission | localhost:3000/v1/explorers/usernames/node|
<br>

- Las funciones y los componentes que se crean son los siguientes:
<br>

|Clase Reader|
|---|
|readJsonFile(filePath) |
<hr>

|Clase FizzbuzzService|
|---|
|applyValidationInExplorer(explorers, mission)|
<hr>

|clase ExplorerService|
|---| 
|filterByMission(explorers, mission)|
|getAmountOfExplorersByMission(explorers, mission)|
|getExplorersUsernamesByMission(explorers, mission)|


<br>


- Se crea la funcionalidad _"FizzBuzz"_:
  - Cuando se entrega un número primo de 3, resulta `"FIZZ"`
  - Cuando se entrega un número primo de 5, resulta `"BUZZ"`
  - Cuando se entrega un número primo de 3 y de 5, resulta `"FIZZBUZZ"`
  - Cuando se entrega un número que no es primo de 3 ni de 5, resulta el número mismo.
<br>

- Se agregan la pruebas unitatias con`Jest` y se automátizan con **GitHub Actions**
- Se establece estilos de códigos con uso de la dependencia `Eslint`.
<br>
