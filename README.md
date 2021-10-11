[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)
# COWS FARM. Full-stack application.

_Educational project_

## Technologies

- Angular 12 (front-end)
- Node.js, ExpressJS (server-side)
- MySQL (database)

## Task

- Užduotis 1. Sukurkite duomenų bazės lentelę pagal schemą: Duomenų bazės pavadinimą sugalvokite patys. Jeigu reikia, duomenų bazės lentelę galite papildyti papildomais stulpeliais.
  ![alt task-1](https://github.com/GedasPupa/cows-farm/blob/master/src/assets/task_1.jpg)

- Užduotis 2. Naudodami Angular karkasą arba React biblioteką sukurkite vieno puslapio aplikaciją (SPA), kurioje vartotojas galėtų atlikti pilną gyvulių fermos administravimą (CRUD). Kiekvienas gyvulys turi turėti savo vizualiai atskirtą aprašą, kuriame būtų pateikta visa informaciją apie jį. Šalia turi būti mygtukas “Trinti”, kurį paspaudus atitinkamo gyvulio įrašas būtų pašalinamas iš duomenų bazės. Šalia gyvulio svorio (kilogramais) turi būti laukelis su naujo svorio įvedimu. Šalia įrašo su paskutinio melžimo data turi būti laukelis su naujos datos įvedimu. Šalia laukelio su pieno kiekiu (litrais) turi būti laukelis, kuriame galima būtų įvesti tos dienos pieno kiekį. Dienos pieno (aka: vienos karvės, ne visų!!!) kiekis sumuojasi su bendru kiekiu ir suma įrašoma į duomenų bazę. Duomenų redagavimas turi būti atliekamas paspaudus “Redaguoti” mygtuką. Gyvulių aprašo viršuje (arba apačioje) turi būti atvaizduota tuščia forma su naujam gyvuliui įvesti ir mygtukas “Pridėti” formos vykdymui.

- Užduotis 3. Serveryje sukurkite prisijungimą prie duomenų bazės, web serverį, maršrutizatorių ir visą bendravimo su naršykle logiką, užtikrinančią 2 užduoties įgyvendinimą serveryje. Informacijos apsikeitimas tarp serverio ir naršyklės turi vykti JSON formatu.

- Užduotis 4. Sukurkite naršyklėje esančio javascript bendravimo mechanizmą su serveriu, naudojant atitinkamus užklausų metodus, asinchroniškai siunčiamus į serverį. Dinamiškai renderinkite vaizdą naudodami Angular ar React, pagal duomenis JSON formatu gaunamus iš serverio.

- Užduotis 5. Sukurkite statistikos laukelius, kuriuose būtų atvaizduojamas gyvulių kiekis ir bendras pieno kiekis (duomenys gaunami iš serverio duomenų bazės) Keičiantis duomenų bazės įrašams automatiškai turi keistis ir statistika.

- Užduotis 6. Sukurkite rūšiavimo galimybę pagal gyvulio svorį ir pieno kiekį (sukurkite du mygtukus, kuriuos paspaudus gyvulių aprašai išsirikiuotų atitinkama tvarka). Tam panaudokite  Angular ar React galimybes (ne serverio).

- __Užduoties pristatymas:__ Aplikacija turi atrodyti estetiškai ir turi būti padaryta adaptyvaus dydžio (responsive). Visi įvedami laukai turi būti tikrinami (kad nebūtų galima vykdyti SQL injekcijų ir k.t.) Vartotojui įvedus nekorektiškus/neteisingus duomenis turi būti parodomas pranešimas apie neteisingai įvestus duomenis. Vartotojui teisingai atlikus įvedimo/trynimo/redagavimo operaciją turi būti parodomas pranešimas apie sėkmingą operaciją. Galite prisidėti prie aplikacijos tobulinimo ir pridėti naujų, sąlygoje neaprašytų funkcionalumų ar vartotojo patirtį gerinančių patobulinimų. Papildomus dalykus užduotyje pridėkite tik tada, kai pilnai įvykdėte visas užduotis

## Folder structure

```
src
├── app
│   ├── components
│   |  ├── all-cows                  // 2nd solution (AllCowsComponent + OneCowComponent)
│   |  ├── app 
|   │  |  ├── app.component.css
|   │  |  ├── app.component.html
|   │  |  ├── app.component.spec.ts
|   │  |  └── app.component.ts       // same file structure in all components               
│   |  ├── cow                       // 1st solution (add/edit page - one component)
│   |  ├── cows                      // 1st solution (cows list)
│   |  ├── cows-farm                 // home (about) page
│   |  ├── footer
│   |  ├── header
|   |  └── one-cow                   // 2nd solution (AllCowsComponent + OneCowComponent)
│   ├── guards
│   |  ├── cows.guard.spec.ts        
|   │  └── cows.guard.ts             // TODO
│   ├── models
|   │  └── Cow.ts
│   ├── pipes
│   |  ├── capitalize-first.pipe.ts
|   │  └── to-space.pipe.ts           // TODO
│   ├── services
│   |  ├── cows.service.spec.ts
|   │  └── cows.service.ts
│   └── app.module.ts
├── assets
│   └── task_1.jpg
├── environments
│   ├── environments.prod.ts
│   └── environments.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.css
└── test.ts
 ```

## Launch procedure

### 1. Database (MySQL) dump file:
```
https://github.com/GedasPupa/cows-nodejs-mysql/blob/master/dump_cows_farm.sql
```

### 2. Node.js server:
```
git clone https://github.com/GedasPupa/cows-nodejs-mysql.git
Packages:     npm install
Launch:       npm start
```
### 3. Angular App (FE):
```
git clone https://github.com/GedasPupa/cows-farm.git
Packages:     npm install
Launch:       ng serve -o
Build:        ng build
```

## Teacher

[Mindaugas Bernatavičius](https://github.com/MindaugasBernatavicius)
