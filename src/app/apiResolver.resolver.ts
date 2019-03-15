import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { MetroService } from "./metro/metro.service";


@Injectable()
export class ApiResolver implements Resolve<any> {
  constructor(private metroService: MetroService) {}

  resolve() {
    return this.metroService.getTrainStationInfo();
  }
}