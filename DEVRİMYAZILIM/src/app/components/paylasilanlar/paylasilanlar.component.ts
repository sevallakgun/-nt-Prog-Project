import { ilanServices } from './../../services/ilanServices';
import { Component, OnInit } from '@angular/core';
import { ilan } from 'src/app/models/ilan';

@Component({
  selector: 'app-paylasilanlar',
  templateUrl: './paylasilanlar.component.html',
  styleUrls: ['./paylasilanlar.component.css']
})
export class PaylasilanlarComponent implements OnInit {

  kayitlar: any;
  constructor(
    public servis: ilanServices
  ) { }

  ngOnInit(): void {
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

  silme(key: string) {
    this.servis.KayitSil(key);
  }
}
