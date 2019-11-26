import {Injectable} from '@angular/core';
import {Layer} from '../models/layer.model';

@Injectable()
export class BurgerService {
    layers: Layer[] = [
        {
            type: 1,
            img: 'topBred.png',
            name: 'Հաց վերևի',
            price: 100
        },
        {
            type: 2,
            img: 'kaxamb.png',
            name: 'Կաղամբ 1-րդ տեսակի',
            price: 200
        },
        {
            type: 3,
            img: 'kaxamb2.png',
            name: 'Կաղամբ 2-րդ տեսակի',
            price: 300

        },
        {
            type: 4,
            img: 'cheese.png',
            name: 'Պանիր',
            price: 400
        },
        {
            type: 5,
            img: 'meet.png',
            name: 'Միս',
            price: 500

        },
        {
            type: 6,
            img: 'kotlet.png',
            name: 'Կոտլետ',
            price: 600


        },
        {
            type: 7,
            img: 'bottomBred.png',
            name: 'Հաց Ներքևի',
            price: 700
        }
    ];

    getLayers() {
        return this.layers;
    }
}
