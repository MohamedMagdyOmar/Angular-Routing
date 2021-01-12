import { Component } from '@angular/core';
import { Router } from '@angular/Router'
import { MessageService } from './messages/message.service';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
    console.log('Log out');
  }

  displayMessages(): void{
    this.router.navigate([{outlets: {popup:['messages']}}])
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void{
    this.messageService.isDisplayed = false;
  }

}
