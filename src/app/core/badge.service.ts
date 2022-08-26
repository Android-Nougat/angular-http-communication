import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  getReaderBadge(minutesRead: number): string {

    if (minutesRead > 5000) {
      return 'Book Worm';
    }
    else if (minutesRead > 2500) {
      return 'Page Turner';
    }
    else {
      return 'Getting Started';
    }
    
  }

}
