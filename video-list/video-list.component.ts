/**
 * Created by Gasparyan on 17.03.2017.
 */
import {Component, Input} from "@angular/core";
@Component({
    selector:'my-video-list',
    templateUrl:'./video-list.component.html',
    styleUrls:['./video-list.component.css'],

})

export  class VideoList{
    private _videos:Array<any>;

    @Input()
    videoList(videos:Array<any>){
        this._videos = videos;
    }


    get videos(): Array<any> {
        return this._videos;
    }

    set videos(value: Array<any>) {
        this._videos = value;
    }
}
