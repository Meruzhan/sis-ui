/**
 * Created by Gasparyan on 17.03.2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../services/videoService";

@Component({

    selector:'my-video',
    templateUrl:'./video.component.html',
    styleUrls:['./video.component.css']
})

export class Video implements OnInit{

    private _video:any;

    constructor(private activRoter:ActivatedRoute,private videoServaice:VideoService){}


    ngOnInit(): void {

       this.activRoter.params.subscribe(param=>{
          this._video = this.videoServaice.loadVideoById(param["id"]);
      });
    }


    get video(): any {
        return this._video;
    }

    set video(value: any) {
        this._video = value;
    }
}
