import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./create-event.component.html",
    selector: "app-event"
})

export class CreateEventComponent implements OnInit {

    name: string
    date: string
    time: string
    price: string
   
    onlineUrl: string
    imageUrl: string

    location = {
        address: "",
        city: "",
        country: ""
    }
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }

    saveEvent(value: any) {
        console.log(value)
    }

    cancel(){
        console.log();
    }
}