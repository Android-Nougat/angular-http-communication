import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AuthService } from "app/service/auth.service";
import { of } from "rxjs";

@Component({
    selector: "app-upvote",
    templateUrl: "./upvote.component.html",
    styles: [
        `
            span{margin-left:2px}
        `
    ]
})
export class UpvoteComponent implements OnInit {
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    user : boolean;

    ngOnInit(): void {  
        // this.authService;
        of(this.authService.isLoggedIn()).subscribe(
            (data)=> 
                this.user = data
        )
    }

    constructor(private authService: AuthService) {

    }

    onClick() {
        console.log("voted")
        this.vote.emit({});
    }

}