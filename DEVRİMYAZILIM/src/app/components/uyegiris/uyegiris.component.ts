import { uyeService } from './../../services/uyeServices';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uyegiris',
  templateUrl: './uyegiris.component.html',
  styleUrls: ['./uyegiris.component.css']
})
export class UyegirisComponent implements OnInit {

  girisMesaj: string;
  constructor(
    public servis: uyeService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  oturumAc(mail: string, parola: string) {

    this.servis.OturumAc(mail, parola).then(d => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['basvur']);
      }
    }, err => {
      this.girisMesaj = "Giriş Başarısız.";
    });

  }

}
