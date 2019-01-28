import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router'

export class ExtensionRouteReuseStrategy implements RouteReuseStrategy {
    private static waitDelete:string;
    public static handlers: Map<string, DetachedRouteHandle> = new Map<string, DetachedRouteHandle>();
    constructor() { }

    //是否缓存[路由离开时触发]
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        const url = this.getRouteUrl(route)
        console.log(url)
        if (route.data.keep) {
            console.log(route.toString()+url)
            return true;
        }
        return false;
    }

    //缓存组件[离开路由时触发]
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        ExtensionRouteReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
    }

    //还原路由[进入路由时触发]
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!ExtensionRouteReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    //还原路由[进入路由时触发]
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!ExtensionRouteReuseStrategy.handlers[this.getRouteUrl(route)]) {
            return null;
        }

        return ExtensionRouteReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    //是否复用路由[进入路由时触发]
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig &&
        JSON.stringify(future.params) === JSON.stringify(curr.params);
    }

    //拿到当前路由
    private getRouteUrl(route: ActivatedRouteSnapshot) :string{
        return route['_routerState'].url
    }

    //删除快照
    private static deleteRouteSnapshot(name: string): void {
        if (this.handlers.get(name)) {
            this.handlers.delete(name);
        } else {
            this.waitDelete = name;
        }
    }


}