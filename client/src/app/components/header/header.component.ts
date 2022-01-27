import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/session-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/header.service';
import { Header } from 'src/app/Header';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string = ""
  buttons: any[] = []
  isLoggedIn: boolean = false;

  constructor(
    private tokenService:TokenStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private service: HeaderService
    ) { }

  ngOnInit(): void {
    this.logo = this.service.handleLogo()
    this.handleButtons();
    let token = this.tokenService.getToken();
    if(token) {
      this.isLoggedIn = true;
    }
  }

  handleButtons(): void {
    this.buttons = this.service.handleButtons()
  }

  navigate(){
    this.router.navigate(['/index'], { relativeTo: this.route })
  }

  logOut(): void {
    this.tokenService.signOut();
    this.navigate()
    //window.location.reload();
  }

}
