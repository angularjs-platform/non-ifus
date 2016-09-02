import {IMenuService} from '@norn/non-framework';

export class SecondaryHorizontalController {

    public menuList: any = {};

    constructor(private $rootScope: ng.IRootScopeService,
                private MenuService: IMenuService) {
        'ngInject';

        this.menuList = this.MenuService.getSecondaryMenuList();

        this.$rootScope.$on('$stateChangeStart', (event: any, toState: any, toParams: any, fromState: any, fromParams: any): any => {
            this.menuList = this.MenuService.getSecondaryMenuList();
        });
    }
}
