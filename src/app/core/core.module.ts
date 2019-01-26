import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { loadSvgResources } from '../utils/svg.util';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent:CoreModule,ir:MatIconRegistry,ds:DomSanitizer){
    if(parent){
      throw new Error('模块已经存在，不能再次加载！')
    }
    loadSvgResources(ir,ds);
  }
}
