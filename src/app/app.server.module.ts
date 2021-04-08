import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule, RootComponent } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [RootComponent],
})
export class AppServerModule {}
