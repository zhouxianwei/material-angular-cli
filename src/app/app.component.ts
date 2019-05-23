import { Component } from '@angular/core';
import {Navs} from './mock/nav-mock';
import {Nav} from './mock/nav-model';

import { ConfigService } from './config/config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ ConfigService ]
})
export class AppComponent {
  
  constructor(private configService: ConfigService ){}

  title = 'material-angular-cli';
  
  // navs = Navs;
  navs:Nav[];
  
  ngOnInit(){
  	this.getNavs();
  }

  getNavs(){
  	this.configService.api().subscribe(nav => this.navs = (<Object>nav)["data"]);
  }
}
