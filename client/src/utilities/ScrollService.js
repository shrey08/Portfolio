import {TOTAL_Screens} from './CommonUtils'
import {Subject} from 'rxjs'

export default class ScrollService{
    static scrollHandler =new ScrollService();
    static currentScreenBroadCaster= new Subject();
    static currentScreenFadeIn= new Subject();
}