import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, I18nService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  isSession: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {
    this.isSession = this.authenticationService.credentials ? true : false;
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout().subscribe();
    this.isSession = this.authenticationService.credentials ? true : false;
  }
  login() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }
  get role(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.role : null;
  }
  get admin(): boolean {
    if (this.role === 'ADMIN') {
      return true;
    } else {
      return false;
    }
  }
  get session(): string {
    return this.session;
  }
}
