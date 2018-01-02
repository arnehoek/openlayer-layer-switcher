import {Injectable} from '@angular/core';

@Injectable()
export class MapService {
  public map: ol.Map;

  constructor() {
    this.map = new ol.Map({
      layers: [
        // new ol.layer.Tile({
        //   source: new ol.source.OSM()
        // })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([6.12, 52.53]),
        zoom: 6
      })
    });
  }
}
