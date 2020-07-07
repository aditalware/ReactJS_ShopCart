import {CLOTHES} from '../data/clothes';
import {FURNITURE} from '../data/furniture';
import {GROCERY} from '../data/grocery';
import {ELECTRONICS} from '../data/electronics';
import {ALLITEMS} from '../data/allitems';

export const initialState={
    clothes:CLOTHES,
    furniture:FURNITURE,
    grocery:GROCERY,
    electronics:ELECTRONICS,
    allitems:ALLITEMS
}

export const Reducer=(state=initialState,action)=>{
    return state;

}