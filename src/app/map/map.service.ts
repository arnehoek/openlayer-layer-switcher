import {Injectable} from '@angular/core';

@Injectable()
export class MapService {
  public static DEFAULT_MAP = '_DEFAULT_';
  private maps: Map<string, ol.Map> = new Map();

  getMap(mapIndex?: string): ol.Map {
    if (mapIndex == null) {
      mapIndex = MapService.DEFAULT_MAP;
    }
    if (!this.maps.has(mapIndex)) {
      this.maps.set(mapIndex, this.createNewMap());
    }
    console.log(this.maps);
    return this.maps.get(mapIndex);
  }

  private createNewMap() {
    return new ol.Map({
      layers: [],
      view: new ol.View({
        center: ol.proj.fromLonLat([6.12, 52.53]),
        zoom: 6
      })
    });
  }
}
