import { ilan } from './../models/ilan';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class ilanServices {
    /* kayitlar başlangıç */
    private dbKayit = '/ilan';

    kayitRef: AngularFireList<ilan> = null;
    constructor(
        public db: AngularFireDatabase
    ) {
        this.kayitRef = db.list(this.dbKayit);
    }
    KayitListele() {
        return this.kayitRef;
    }

    KayitEkle(kayit: ilan) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: ilan) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    /* kayitlar bitiş */
}
