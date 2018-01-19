import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MapService} from './map.service';

@Component({
  selector: 'gkc-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapElement') mapElement: ElementRef;
  @Input() name: string = MapService.DEFAULT_MAP;

  constructor(private mapService: MapService) {

  }

  ngAfterViewInit(): void {
    this.mapService.getMap(this.name).setTarget(this.mapElement.nativeElement.id);
  }
}
