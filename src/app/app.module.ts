import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { PermissionGuard } from './guards/permission.guard';
import { RouteReuseStrategy } from '@angular/router';
import { ExtensionRouteReuseStrategy } from './ExtensionRouteReuseStrategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    SharedModule,
    RoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers:[
    {provide:RouteReuseStrategy,useClass:ExtensionRouteReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
