# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3 by following [this introductory tutorial](https://angular.io/tutorial/tour-of-heroes) for [Clever Cloud](https://www.clever-cloud.com).

## How to run this app

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Build is already done in this project. If you change anything, run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

💡 `ng build` clears previous build, while `ng serve`   doesn't.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## 🚀 Deploy this app on Clever Cloud

Angular projects can be deployed on static hosting. You don't need a server-side engine to dynamically compose pages because Angular does that on the client-side.

This project routing has already been configured for remote deployment. Follow the procedure on the Clever Cloud Console

1. Clone this project
2. Create a new application on Clever Cloud
3. Choose Git deployment
4. Select a **Static** app
5. Inject the following environment variable:  `CC_WEBROOT="dist/angular-tour-of-heroes"`
6. You don't need any add-on
7. Copy the remote provided by the Console
8. Push your code: `git push clever master`

💡 If you get a reference error when pushing, try this: `git push clever main:master`.

Now you can see the logs as your apps deploys! To see it once it's deployed, click on ∞ at the top right of your application page.

### ⚠️ Beware of Immutable Deployments

Deployments on Clever Cloud are immutable. Whenever the monitoring will make it restart or scale, last commit will be redeployed. To make changes persistent in this app, you would need to connect it to a database, for example.

## Further help

🎓 Check our doc on [Static applications](https://www.clever-cloud.com/doc/deploy/application/static/static/)

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
