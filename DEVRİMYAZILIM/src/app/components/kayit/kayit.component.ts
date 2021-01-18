import { uyeService } from './../../services/uyeServices';
import { kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.component.html',
  styleUrls: ['./kayit.component.css']
})
export class KayitComponent implements OnInit {

  yazi: string;
  sonuc: boolean;
  sonuc2: boolean = false;

  seckayit: kayit = new kayit();
  constructor(
    public servis: uyeService
  ) { }

  ngOnInit(): void {
  }

  Kaydet() {
    var tarih = new Date();
    this.servis.uyeOl(this.seckayit).then(d => {
      d.user.updateProfile({
        displayName: this.seckayit.adsoyad
      }).then();
      this.seckayit.uid = d.user.uid;

      localStorage.setItem("user", JSON.stringify(d.user));
      this.uyeEkle();

    }, err => {
      this.yazi = "Kayıt başarısız E mail adresi kullanılıyor olabilir.";
      this.sonuc = false;
      this.sonuc2 = true;

    })
  }

  uyeEkle() {
    this.servis.UyeEkle(this.seckayit).then(d => {
      this.yazi = "Kayıt Başarılı";
      this.sonuc = true;
      this.sonuc2 = true;
    });
  }

}
