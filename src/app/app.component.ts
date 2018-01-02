///<reference path="../../node_modules/@types/openlayers/index.d.ts"/>

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MapService} from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mapElement') mapElement: ElementRef;

  constructor(private mapService: MapService) {

  }

  ngAfterViewInit(): void {
    this.mapService.map.setTarget(this.mapElement.nativeElement.id);
  }
}
