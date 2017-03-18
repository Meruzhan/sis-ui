import {Component, OnInit, ElementRef} from "@angular/core";
import {VideoService} from "../../services/videoService";

/**
 * Created by Gasparyan on 17.03.2017.
 */
@Component({

    selector:'my-translation',
    templateUrl:'./translation.component.html',
    styleUrls:['./translation.component.css']
})

export class Translation implements OnInit{

    private _videos:any;
    private _selectedIndex:any;
    private _selectedVideo:any;
    private element:ElementRef;


    constructor(private videoService:VideoService){}


    ngOnInit(): void {
        this.videoService.loadVideos().subscribe(resp=>{
            this._videos = resp;
            this._selectedIndex = 1;
            this._selectedVideo =this._videos[1];
        });
        // this._selectedIndex = 0;
        // this._selectedVideo =this._videos[0];

    }


    get selectedIndex(): any {
        return this._selectedIndex;
    }

    set selectedIndex(value: any) {
        this._selectedIndex = value;
    }

    get selectedVideo(): any {
        return this._selectedVideo;
    }

    set selectedVideo(value: any) {
        this._selectedVideo = value;
    }

    get videos(): any {
        return this._videos;
    }

    set videos(value: any) {
        this._videos = value;
    }

    selectVideo( select:any){
        // this.element.nativeElement.classList.delete("active");
        // this.element = element.nativeElement.classList.add("active");
       let vid = document.getElementById("vid") ;
       vid.load();
        this._selectedIndex = select;
        this._selectedVideo = this._videos[select];
    }

}
