import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'mahasiswa',
    loadChildren: () =>
      import('./mahasiswa/mahasiswa.module').then((m) => m.MahasiswaPageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'mahasiswa-tambah',
    loadChildren: () =>
      import('./mahasiswa-tambah/mahasiswa-tambah.module').then(
        (m) => m.MahasiswaTambahPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'mahasiswa-edit/:nim',
    loadChildren: () =>
      import('./mahasiswa-edit/mahasiswa-edit.module').then(
        (m) => m.MahasiswaEditPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
