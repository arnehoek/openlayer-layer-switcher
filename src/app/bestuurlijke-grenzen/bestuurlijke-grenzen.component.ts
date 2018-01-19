import {Component, Input, OnInit} from '@angular/core';
import {MapService} from '../map/map.service';

@Component({
  selector: 'gkc-bestuurlijke-grenzen',
  templateUrl: './bestuurlijke-grenzen.component.html'
})
export class BestuurlijkeGrenzenComponent implements OnInit {
  public params: {[x: string]: any} = {
    'transparant': ''
  };

  @Input() landsgrens: boolean = true;
  @Input() provincies: boolean = false;
  @Input() gemeenten: boolean = false;
  @Input() map: string = MapService.DEFAULT_MAP;

  constructor(private mapService: MapService) {

  }

  ngOnInit() {
    const layerArray: string[] = [];

    if (this.gemeenten){
      layerArray.push('gemeenten');
    }
    if (this.provincies){
      layerArray.push('provincies');
    }
    if (this.landsgrens) {
      layerArray.push('landsgrens');
    }
    this.params.layers = layerArray.join(',');


    const layer = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        params: this.params,
        url: 'https://geodata.nationaalgeoregister.nl/bestuurlijkegrenzen/wms',
      })
    });

    this.mapService.getMap(this.map).addLayer(layer);
  }
}
