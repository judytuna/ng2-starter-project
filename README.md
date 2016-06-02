# Building an Angular 2 Website Using Routes
This is a simple Angular 2 website using the brand new router. It demonstrates how to build components, configure routes, inject services, and use the `@Input` decorator to bind properties to components. It was built using the Angular CLI and thus conforms to the agreed-upon best Angular 2 practices outlined [here](https://angular.io/docs/ts/latest/guide/style-guide.html).

## Dependencies
- You must have `node` and `npm` installed (via [`NVM`](https://github.com/creationix/nvm) or [NodeJS.org](https://nodejs.org/en/))
- You also need to install the `angular-cli` via `npm i -g angular-cli`

## Getting Started


```bash
# Clone the repo and step into it
git clone https://github.com/onehungrymind/ng2-starter-project.git
cd ng2-starter-project

# Install dependencies
npm i

# Run the app
ng serve # or npm start

# Build the app
ng build # or npm run build
```

When running the app locally, it will be available on [http://localhost:4200](http://localhost:4200).

## Testing
The unit and E2E testing configs are both in the top level `config` directory. Use the following commands for testing:

```bash
# Run unit tests
ng test # or npm test if you have already built the app

# Run E2E tests
# in one window
ng server # or npm start

#in another window
ng e2e # or npm run pree2e && npm run e2e
```

## Angular CLI
This project was built using the Angular CLI. Click [here](https://github.com/angular/angular-cli) for more information.
