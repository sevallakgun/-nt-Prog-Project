import { FavorilerComponent } from './components/favoriler/favoriler.component';
import { PaylasilanlarComponent } from './components/paylasilanlar/paylasilanlar.component';
import { IlanComponent } from './components/ilan/ilan.component';
import { BasvurComponent } from './components/basvur/basvur.component';
import { KayitComponent } from './components/kayit/kayit.component';
import { UyegirisComponent } from './components/uyegiris/uyegiris.component';
import { AdminComponent } from './components/admin/admin.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';

import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'hakkimizda', component: HakkimizdaComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'giris', component: UyegirisComponent },
  { path: 'kayit', component: KayitComponent },
  { path: 'basvur', component: BasvurComponent },
  { path: 'ilan', component: IlanComponent },
  { path: 'paylasilanlar', component: PaylasilanlarComponent },
  { path: 'favoriler', component: FavorilerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
