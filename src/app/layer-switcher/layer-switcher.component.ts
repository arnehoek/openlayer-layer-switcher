import {Component, OnInit} from '@angular/core';
import {MapService} from '../map.service';
import {FormBuilder, FormGroup} from '@angular/forms';

export class LayerObject {
  title: string;
  layer: ol.layer.Layer;
}

@Component({
  selector: 'app-layer-switcher',
  templateUrl: './layer-switcher.component.html',
  styleUrls: ['./layer-switcher.component.scss']
})
export class LayerSwitcherComponent implements OnInit {
  layers: LayerObject[];
  activeLayer: ol.layer.Layer;
  formGroup: FormGroup;

  constructor(private mapService: MapService, fb: FormBuilder) {
    this.formGroup = fb.group({
      layer: ''
    });
  }

  ngOnInit() {
    this.layers = [
      {title: 'Bing Road', layer: this.createBingLayer('Road')},
      {title: 'Bing road on demand', layer: this.createBingLayer('RoadOnDemand')},
      {title: 'Bing aerial', layer: this.createBingLayer('Aerial')},
      {title: 'Bing aerial with labels', layer: this.createBingLayer('AerialWithLabels')},
      {title: 'Open street map', layer: this.createOpenStreetMapLayer()},
      {title: 'Google maps', layer: this.createGoogleMapsLayer()}
    ];

    this.setLayer(this.layers[0].layer);
    this.formGroup.get('layer').valueChanges.subscribe(layer => this.setLayer(layer));
  }

  setLayer(layer: ol.layer.Layer) {
    if (this.activeLayer != null) {
      this.mapService.map.removeLayer(this.activeLayer);
    }
    this.mapService.map.addLayer(layer);
    this.activeLayer = layer;
  }

  private createBingLayer(style): ol.layer.Tile {
    return new ol.layer.Tile({
      preload: Infinity,
      source: new ol.source.BingMaps({
        key: 'AkJgeIGyOaWQz20ZsVO4rMSeq1uKPsoH8bl0aZqFotf81YhTvuJThNHQCcdhZMhN',
        imagerySet: style,
        maxZoom: 19
      })
    });
  }

  private createOpenStreetMapLayer(): ol.layer.Tile {
    return new ol.layer.Tile({
      source: new ol.source.OSM()
    });
  }

  private createGoogleMapsLayer(): ol.layer.Tile {
    return new ol.layer.Tile({
      source: new ol.source.TileImage({
        url: 'http://khm{0-3}.googleapis.com/kh?v=742&hl=pl&&x={x}&y={y}&z={z}',
        projection: 'EPSG:3857'
      })
    });
  }
}
