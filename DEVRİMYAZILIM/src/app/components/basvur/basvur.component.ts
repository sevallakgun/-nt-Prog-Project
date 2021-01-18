import { favoriServices } from './../../services/favoriService';
import { favori } from './../../models/favori';
import { Component, OnInit } from '@angular/core';
import { ilan } from 'src/app/models/ilan';
import { ilanServices } from 'src/app/services/ilanServices';

@Component({
  selector: 'app-basvur',
  templateUrl: './basvur.component.html',
  styleUrls: ['./basvur.component.css']
})
export class BasvurComponent implements OnInit {


  kayitlar: any;
  uid: string;
  seckayit: favori = new favori();

  constructor(
    public servis: ilanServices,
    public servis2: favoriServices
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.KayitListele();
  }


  KayitListele() {
    this.servis.KayitListele().snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as ilan)
      })
    });
  }

  favoriEkle() {
    var tarih = new Date();


    this.seckayit.tarih = tarih.getTime().toString();
    this.seckayit.uid = this.uid;
    this.servis2.KayitEkle(this.seckayit).then(s => {
    });
  }
}