import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mahasiswa', url: '/mahasiswa', icon: 'person' },
    { title: 'Mahasiswa Edit', url: '/mahasiswa-edit', icon: 'person' },
    { title: 'Mahasiswa Tambah', url: '/mahasiswa-tambah', icon: 'person' },
  ];
  constructor() {}
}
