import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';


@NgModule({

    //all modules and routing will declare here
    imports: [
        BrowserModule
    ],

    //all component ,directives ,pipes declare here
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent
    ],

    //only and only main component will declare here
    bootstrap: [
        AppComponent
    ],

    //all services declare here
    providers: []
})


export class AppModule{

}