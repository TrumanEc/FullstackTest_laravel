# FullStack Test

En este repositorio se contemplara la solucion de la prueba tecnica para `Try my ride`

## Tech Stack

**Client:** React, React Native(Expo)

**Server:** Laravel

## Correrlo localmente

Clonar este repositorio

```bash
  git clone https://github.com/TrumanEc/FullstackTest_laravel.git
```

entra a la carpeta del proyecto

```bash
  cd FullstackTest_laravel
```

## Api

ve a la carpeta de api_login

```bash
  cd api_login
```

Seguir los siguientes links para descargar laravel y php segun tu OS

    Composer on Windows || https://getcomposer.org/download/

    Composer on Mac via Homebrew ||  https://formulae.brew.sh/formula/composer

Abrir proyecto con tu edito de codigo preferido (ejemplo VSC)

    code .

Ir a la carpeta `.env` y configurar lo siguiente con una base de datos que tengas `Mysql`

    DB_CONNECTION= mysql
    DB_DATABASE= ---> Pon el nombre aqui <---
    DB_USERNAME=root or  --> tipo de usuario DB <--
    DB_PASSWORD= --> contraseña mysql <--
    APP_URL=http://localhost:8000 -> necesario para correr React 4enLinea

Iniciar migracion `pasr modelos de la api a tu db`

    php artisan migrate

Iniciar server

```bash
  php artisan serve
```

### 4 en Linea

En el navegador ir a `Localhost:8000`

![App Screenshot](https://i.imgur.com/Tza6GdS.png)

Si no te aparce esto realizar los siguientes comandos `npm install`, `npm run dev`,
`npm run build`

## Cliente (React native)

Ir a la carpeta de `Fullstack_laravel` , despues a `LoginApp`

    cd LoginApp

Instala `Expo Cli`

    npm install --global expo-cli

Instala dependencias

    npm install

Andar servidor

- Debes contar con algun emulador de Android o IOS.
- En caso de no tener emulardor Expo brinda la opcion de correrlo web

```bash
npm start
```

Inicio correcto de cliente `seguir los pasos para abrir la app dependiendo la plataforma que elijas`

![Logo](https://i.imgur.com/hAwzG7N.png)

- iphone presiona en la consola `i`
- Android presiona en la consola `a`
- Web presiona en la consola `w`

`Corriendo app en IOS emulador`

![Logo](https://i.imgur.com/kCGZpW1.png?1)
