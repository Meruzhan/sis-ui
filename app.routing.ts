/**
 * Created by aram.hovhannisyan on 12/6/2016.
 */
import {Routes, RouterModule} from '@angular/router'

import {Video} from "./components/video/video.component";
import {Translation} from "./components/translation/translation.component";

const appRouting:Routes = [
    {path: '', component: Translation},
    {path: 'video/:id', component: Translation},
    {path: 'video',redirectTo:'/video/1',pathMatch: 'full'},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRouting);
