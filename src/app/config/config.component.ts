import { Component } from '@angular/core';
import { ConfigService } from './config.service'


@Component({
	selector: 'config-service',
	templateUrl: './config.component.html'
})
export class ConfigComponent {
	
	constructor(private configService: ConfigService){ }

	ngOnInit(){
		this.configService.api();
	}
}