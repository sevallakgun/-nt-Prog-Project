import { favoriServices } from './../../services/favoriService';
import { Component, OnInit } from '@angular/core';
import { favori } from 'src/app/models/favori';

@Component({
  selector: 'app-favoriler',
  templateUrl: './favoriler.component.html',
  styleUrls: ['./favoriler.component.css']
})
export class FavorilerComponent implements OnInit {

  kayitlar: any;
  uid: string;
  constructor(
    public servis: favoriServices
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.KayitListele();
  }

  KayitListele() {
    this.servis.KayitListele2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as favori)
      })
    });
  }
  Silme(key: string) {
    this.servis.KayitSil(key);
  }

}
