import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

export const loadSvgResources = (ir:MatIconRegistry,ds:DomSanitizer)=>{

    ir.addSvgIcon('bmw',ds.bypassSecurityTrustResourceUrl('assets/bmw.svg'))
    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl('assets/avatar/avatars.svg'))

}