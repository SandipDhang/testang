import { Component } from '@angular/core';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    /*styles: [
        `.heading{color: Olive; text-align: Center}`
    ]*/
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    title: string = "Products";
    desc: string = "Here is the list available products";
    imgWidth: number = 50;
    imgHeight: number = 50;
    product: any[] = [
        {
            name: 'Mobiles',
            id: 'P_001',
            qty: 50,
            price: 50000,
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqbBykGOWx1Rr6ZP5nlseaqVhGk5qpSE81BWKxzDqZH5I90OXt&usqp=CAU'
        },
        {
            name: 'Laptop',
            id: 'P_002',
            qty: 40,
            price: 100000,
            icon: 'https://media.istockphoto.com/vectors/laptop-vector-illustration-on-white-background-flat-vector-id1166954011?k=6&m=1166954011&s=170667a&w=0&h=_RRVLHkbgpufA9qZedqWGNP8ZnfYL7PIcwha4spEXTY='
        }
        
    ]
}