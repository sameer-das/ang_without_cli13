import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    // templateUrl: './app.componenet.html',
    //------- for dev ------------------
    template: require('./app.component.html'),
    styles: [require("./app.component.scss")]
    //------- for prod ------------------
    // template: './app.component.html',
    // styles: ["./app.component.scss"]
})
export default class AppComponent {
  title:string = 'This is root component'  
} 