import { short, medium, long, waitForSec } from "../util/utilText";

class Base {

    pauseForASec(){
        browser.pause(waitForSecSec);
    }

    pauseShort(){
        browser.pause(short);
    }

    pauseMedium(){
        browser.pause(medium);
    }

    pauseLong(){
        browser.pause(long);
    }


}

export default Base;