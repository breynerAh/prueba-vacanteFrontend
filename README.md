## Inicio del repositorio

Primero, instale las dependencias necesarias:

```bash
npm install
```

Segundo, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura de archivos

Siguiendo la arquitectura de Next.js, mi estructura de enrutamiento se basa en convenciones de carpetas y archivos. En la capa presentation se encuentran todas las vistas, en la capa components están los componentes del servidor para las vistas, y en la capa domain se encuentran las interfaces para el tipado. Fuera de la carpeta app, están los directorios components, hooks y libs, que forman parte de shadcn.

## Por qué Server components

Aprovecho esta funcionalidad de Next.js, ya que es una de las últimas novedades que ofrece el framework.

## TanStack Query (React Query)

Trabajar con TanStack Query facilita y agiliza el desarrollo para los programadores.
