import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GridService } from '../../app/services/grid.service';

@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class GridPage {
  items: any;

  constructor(public navCtrl: NavController, private gridService:GridService) {

  }

  ngOnInit(){
    //console.log('OnInit Ran.....');
    this.getServiceId();
  }

  getServiceId(){
    this.gridService.getServiceId().subscribe(response => {
      //console.log(response);
      this.items = response.ServicesResult.Services.Service;
    });
  }

}
