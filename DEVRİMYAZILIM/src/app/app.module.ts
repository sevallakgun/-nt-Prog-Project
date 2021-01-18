import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { AdminComponent } from './components/admin/admin.component';
import { UyegirisComponent } from './components/uyegiris/uyegiris.component';
import { KayitComponent } from './components/kayit/kayit.component';
import { BasvurComponent } from './components/basvur/basvur.component';
import { IlanComponent } from './components/ilan/ilan.component';
import { PaylasilanlarComponent } from './components/paylasilanlar/paylasilanlar.component';
import { FavorilerComponent } from './components/favoriler/favoriler.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HakkimizdaComponent,
    AdminComponent,
    UyegirisComponent,
    KayitComponent,
    BasvurComponent,
    IlanComponent,
    PaylasilanlarComponent,
    FavorilerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
