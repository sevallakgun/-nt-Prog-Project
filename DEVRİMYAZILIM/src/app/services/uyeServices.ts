import { kayit } from './../models/kayit';


import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class uyeService {
    /* kayitlar başlangıç */
    private dbKayit = '/uyeler';

    kayitRef: AngularFireList<kayit> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    uyeOl(uye: kayit) {
        return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
    }
    UyeEkle(uye: kayit) {
        return this.kayitRef.push(uye);

    }
    KayitListele2(id: string) {
        return this.db.list("isverenUye", q => q.orderByChild("uid").equalTo(id));
    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: kayit) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: kayit) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    /* kayitlar bitiş */
    OturumAc(mail, parola) {
        return this.afAuth.signInWithEmailAndPassword(mail, parola);
    }
    OturumKapat() {
        return this.afAuth.signOut();
    }
}
