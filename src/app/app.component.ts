import { Component } from '@angular/core';
import { AuthenticationService } from '../app/services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'List Pemain', url: '/mahasiswa', icon: 'person' },
    { title: 'Tambah Pemain', url: '/mahasiswa-tambah', icon: 'person' },
  ];
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}
