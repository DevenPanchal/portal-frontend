# Job Portal Angular Front End

* This is the Job Portal front end for the Spring boot Job Portal backend.
* Make sure the backend is running (just running, no Swagger) before you start the front end.
* To start the front end, type 'ng serve' inside the front folder.
* With the current use of Spring Security, the backend API's CANNOT be accessed without the front end.

* The front end currently starts on http://localhost:4200/ and requires a sign in first. Please check the username and password in the database to authenticate as a valid user.
 ----------------------------------


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Standing up the Development server

Run `ng serve` for a dev server.
Disable Web Security in the browser
or eg: On Windows for chrome- 
Run 
    [path_to_chrome.exe] --disable-web-security

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
