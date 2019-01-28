import {ActivatedRouteSnapshot,RouteReuseStrategy,DetachedRouteHandle} from '@angular/router'

export class ExtensionRouteReuseStrategy implements RouteReuseStrategy{
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        throw new Error("Method not implemented.");
    }    
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        throw new Error("Method not implemented.");
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        throw new Error("Method not implemented.");
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        throw new Error("Method not implemented.");
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        throw new Error("Method not implemented.");
    }


}