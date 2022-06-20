angular 13 AOT without clis

1.  create a folder 
2. npm init -y
3. copy and paste to package.json
------------------------------------------

  "dependencies": {
    "@angular/common": "~13.0.3",
    "@angular/compiler": "~13.0.3",
    "@angular/core": "~13.0.3",
    "@angular/forms": "~13.0.3",
    "@angular/platform-browser": "~13.0.3",
    "@angular/platform-browser-dynamic": "~13.0.3",
    "@angular/platform-server": "^4.4.4",
    "@angular/router": "~13.0.3",
    "rxjs": "~7.5.5",
    "zone.js": "^0.11.6"
  },
  "devDependencies": {
    "typescript": "^4.7.4",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0"
  }

4. create tsconfig.json and copy below 
-----------------------------------------

{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "lib": ["es5", "es6", "dom"],
        "noImplicitAny": true,
        "suppressImplicitAnyIndexErrors": true,
        "types": ["node"],
        "typeRoots": ["./node_modules/@types"]
    },
    "exclude": ["node_modules", "src/main.aot.ts", "aot", "**.spec.ts"]
}


{
    "compileOnSave": false,
    "compilerOptions": {
      "baseUrl": "./",
      "outDir": "./dist/out-tsc",
      "sourceMap": true,
      "declaration": false,
      "downlevelIteration": true,
      "experimentalDecorators": true,
      "moduleResolution": "node",
      "importHelpers": true,
      "target": "es2015",
      "module": "es2020",
      "lib": [
        "es2018",
        "dom"
      ]
    }
  }

5. Create a webpack.config.js 
---------------------------------------


6. create a folder config and add 3 files, common, prod, dev

7. create src folder

8. create src/vendor.ts
	import '@angular/common';
	import '@angular/core';
	import '@angular/router';
	import '@angular/platform-browser';
	import '@angular/platform-browser-dynamic';
	import 'rxjs';

9. create src/polyfills.ts

	import 'zone.js'

10. create src/app folder 
	create app.module.ts
	create app.component.ts
	create app.component.html
	create app.component.css

11. create a src/main.ts
	
	import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
	import AppModule from "./app/app.module";
	platformBrowserDynamic().bootstrapModule(AppModule);

12. install these packages as dev dependencies
	npm i -D mini-css-extract-plugin 
	npm i -D html-webpack-plugin 
	npm i -D ts-loader
	npm i -D babel-loader
	npm i -D angular2-template-loader
	npm i -D html-loader
	npm i -D file-loader
	npm i -D css-loader
	npm i -D webpack-merge
	npm i -D @babel/core --save
	
