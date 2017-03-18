/**
 * Created by Gasparyan on 17.03.2017.
 */
import {Injectable} from '@angular/core';
import {SERVER_URL} from "../server.config";
import {Http, Response, Headers} from "@angular/http";

@Injectable()
export class VideoService {
    private baseUrl = SERVER_URL + '/users';
    private headers = new Headers({'Content-Type': 'application/json'});
    private transactionVideoUrl = 'http://localhost:8080/playlist' ;
    // "http://192.168.38.206:8090/streamwebm2";

    constructor(private http:Http){}




    getVideos(){

        let videos = [
            {id:1,name:"http://192.168.38.206:8090/streamwebm1"},
            {id:2,name:"http://192.168.38.206:8090/streamwebm2"},
            {id:3,name:"http://192.168.38.206:8090/streamwebm3"},
            {id:4,name:"http://192.168.38.206:8090/streamwebm4"},
            {id:5,name:"video5"},
        ];

        return videos;
    }

    loadVideoById(id:number){
        let video;
        this.getVideos().forEach(vid=> {
            if(vid.id==id){
                video = vid;
            }
        });
        return video;
    }


    loadVideos(){
        return this.http.get(this.transactionVideoUrl).map((response:Response)=>{
            console.log("resp", response.json());
           return response.json();
        })
    }



}
