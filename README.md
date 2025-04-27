# BikeShop

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

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

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Information

I've chosen the modular architecture approach, so first, I divided it into 2 main pages:

Product List Page (ProductListComponent);
Product Detail Page (ProductDetailComponent);
Every page has a subset of components that are solving particular business problem, relevant only for those pages/modules.

### /layout directory

A very basic header and footer have been added to the layout directory, as it could be re-used in many different pages/modules. As the header/footer might have some business logic in the future, thus it is not a "dumb" component, therefore I decided to not have it under shared directory.

### /features directory

All application modules are added here.

### /shared directory

The shared folder includes the following reusable components:

- Search bar which emits input change value;
- Product tile;

It also includes:

- Model that includes interfaces;
- Pipe includes a custom FilterPipe which is needed for data filtering depending on a search query parameter.

### Used Libraries

- prettier and eslint for code formatting and linting;

I didn't use any UI libraries like @angular/material because I didn't feel the need for it.

## Possible improvements

State management. Such applications tend to have more complicated logic in the future, so libraries such as NGRX will be crucial to keep the app state clean and up to date.
