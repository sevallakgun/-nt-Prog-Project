import { ilanServices } from './../../services/ilanServices';
import { ilan } from './../../models/ilan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilan',
  templateUrl: './ilan.component.html',
  styleUrls: ['./ilan.component.css']
})
export class IlanComponent implements OnInit {

  yazi: string;
  seckayit: ilan = new ilan();
  constructor(

    public servis: ilanServices
  ) { }

  ngOnInit(): void {
  }

  Kaydet() {
    var tarih = new Date();


    this.seckayit.tarih = tarih.getTime().toString();
    this.servis.KayitEkle(this.seckayit).then(s => {
      this.yazi = "İş İlanı Paylaşıldı";
    });
  }


}
