import { Injectable } from "@angular/core";
import { DataService } from "app/core/data.service";
import { Book } from "app/models/book";
import { AuthService } from "./auth.service";

@Injectable()

export class VoterService {

    constructor(private authService: AuthService,
        private datdaService: DataService) { }

    modifyVoter(book: Book) {
        if (this.checkVoter(book)) {
            const index = book.voters.findIndex(voter => voter.readerID === this.authService.reader.readerID);
            book.voters.splice(index, 1);
        } else {
            book.voters.push(this.authService.reader);
            // this.datdaService.updateBook(book);
        }
    }

    checkVoter(book: Book) {
        const retrievedVoter = book.voters.filter(voter => this.authService.reader.readerID === voter.readerID);
        if (retrievedVoter && retrievedVoter.length>0)
            return true;
        return false;
    }


}