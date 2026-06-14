# WebIglesia

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Code Structure

src/app/
└── components/
    ├── shared/                 
    │   ├── navbar/
    │   ├── footer/
    │   └── donaciones/
    └── features/               
        ├── comunidad/ 
        │   ├── comunidad.component.ts / .html / .scss
        │   └── sections/
        │       ├── secretaria/
        │       │   ├── secretaria.secretaria.ts / .html / .scss
        │       │   └── modals/            
        │       │       ├── req-bautismos/
        │       │       │   └── req-bautismos.req-bautismos.ts / .html 
        │       │       ├── req-catequesis/
        │       │       │   └── req-catequesis.req-catequesis.ts / .html 
        │       │       ├── req-casamientos/
        │       │       │   └── req-casamientos.req-casamientos.ts / .html   
        │       │       ├── info-misas/
        │       │       │   └── info-misas.info-misas.ts / .html
        │       │       └── santeria/ 
        │       │           └── santeria.santeria.ts / .html  
        │       ├── catequesis/
        │       │   ├── catequesis.catequesis.ts / .html / .scss
        │       │   └── modales/            
        │       │       ├── cat-nino/
        │       │       │   └── cat-nino.cat-nino.ts / .html
        │       │       ├── cat-adol/
        │       │       │   └── cat-adol.cat-adol.ts / .html
        │       │       ├── cat-jov-adul/
        │       │       │   └── cat-jov-adul.cat-jov-adul / .html
        │       │       ├── cat-matrimonios/
        │       │       │   └── cat-matrimonios.cat-matrimonios.ts / .html
        │       │       └── cat-alpha/
        │       │           └── cat-alpha.cat-alpha.ts / .html 
        │       ├── caritas/  
        │       │   ├── caritas.caritas.ts / .html / .scss
        │       │   └── modales/            
        │       │       ├── ????/
        ├── historia/
        └── contacto/

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
