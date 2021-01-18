import { favori } from './../models/favori';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class favoriServices {
    /* kayitlar başlangıç */
    private dbKayit = '/favori';

    kayitRef: AngularFireList<favori> = null;
    constructor(
        public db: AngularFireDatabase
    ) {
        this.kayitRef = db.list(this.dbKayit);
    }
    KayitListele() {
        return this.kayitRef;
    }

    KayitEkle(kayit: favori) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: favori) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }

    KayitListele2(id: string) {
        return this.db.list("favori", q => q.orderByChild("uid").equalTo(id));
    }
    /* kayitlar bitiş */
}
