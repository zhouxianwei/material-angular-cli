import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {
	MatSidenavModule,
	MatCardModule,
	MatGridListModule,
	MatListModule,
	MatExpansionModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatSidenavModule,
		MatCardModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatGridListModule,
		MatListModule,
		MatExpansionModule,
		MatToolbarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
