import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';


@Component({
  selector: 'yc-root',
  template: `<router-outlet></router-outlet>`
})
export class RootComponent {} 


@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HomeModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
