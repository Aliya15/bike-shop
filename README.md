# BikeShop

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Additional Information

I've chosen the modular architecture approach, so first, I divided it into 2 main pages:

Product List Page (ProductListComponent);
Product Detail Page (ProductDetailComponent);
Every page has a subset of components that are solving particular business problem, relevant only for those pages/modules.

### Layout directory

A very basic header and footer have been added to the layout directory, as it could be re-used in many different pages/modules. As the header/footer might have some business logic in the future, thus it is not a "dumb" component, therefore I decided to not have it under shared directory.

### Features directory

All application modules are added here.

### Shared directory

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
