import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayerSwitcherModule} from './layer-switcher/layer-switcher.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BestuurlijkeGrenzenModule} from './bestuurlijke-grenzen/bestuurlijke-grenzen.module';
import {MapModule} from './map/map.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapModule.forRoot(),
    LayerSwitcherModule,
    BrowserAnimationsModule,
    BestuurlijkeGrenzenModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
