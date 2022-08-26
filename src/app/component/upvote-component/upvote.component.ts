import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AuthService } from "app/service/auth.service";
import { of } from "rxjs";

@Component({
    selector: "app-upvote",
    templateUrl: "./upvote.component.html",
    styles: [
        `
            span{margin-left:2px}
            i{border:black}
        `
    ]
})
export class UpvoteComponent implements OnInit {
    @Input() count: number;
    @Input() set voted(val: boolean){
        this.iconColor = val ? "red" : "grey";
    }
    @Output() vote = new EventEmitter();

    user : boolean;
    iconColor: string;

    ngOnInit(): void {  
        of(this.authService.isLoggedIn()).subscribe(
            (data)=> 
                this.user = data
        )
    }

    constructor(private authService: AuthService) {}

    onClick() {
        this.vote.emit({});
    }

}