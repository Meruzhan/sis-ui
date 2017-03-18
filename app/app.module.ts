import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {Video} from "./components/video/video.component";
import {VideoList} from "./components/video-list/video-list.component";
import {Translation} from "./components/translation/translation.component";
import {VideoService} from "./services/videoService";


@NgModule({
    declarations: [
        AppComponent,
        Video,
        VideoList,
        Translation

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        AlertModule
    ],
    providers: [
        VideoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
