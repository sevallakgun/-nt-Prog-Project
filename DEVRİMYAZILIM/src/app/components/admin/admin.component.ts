import { uyeService } from './../../services/uyeServices';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
        this.router.navigate(['ilan']);
      }
    }, err => {
      this.girisMesaj = "Giriş Başarısız.";
    });

  }

}