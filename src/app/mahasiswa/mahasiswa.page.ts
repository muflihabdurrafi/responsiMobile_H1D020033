import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage {
  nim: any;
  nama: any;
  alamat: any;
  mahasiswa: any[];
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getMahasiswa();
  }
  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('Jika selesai loading');
    this.getMahasiswa();
  }

  getMahasiswa() {
    this._apiService.getMahasiswa().subscribe(
      (res: any) => {
        console.log('sukses', res);
        this.mahasiswa = res;
      },
      (error: any) => {
        console.log('gagal', error);
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal memuat data mahasiswa',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }

  deleteMahasiswa(id) {
    this.alertController
      .create({
        header: 'Perhatian',
        subHeader: 'Yakin menghapus data ini?',
        buttons: [
          {
            text: 'Batal',
            handler: (data: any) => {
              console.log('dibatalkan', data);
            },
          },
          {
            text: 'Yakin',
            handler: (data: any) => {
              //jika tekan yakin
              this._apiService.deleteMahasiswa(id).subscribe(
                (res: any) => {
                  console.log('Sukses', res);
                  this.getMahasiswa();
                },
                (error: any) => {
                  console.log('error', error);
                  this.alertController
                    .create({
                      header: 'Notifikasi',
                      message: 'Gagal memuat data mahasiswa',
                      buttons: ['OK'],
                    })
                    .then((res) => {
                      res.present();
                    });
                }
              );
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
