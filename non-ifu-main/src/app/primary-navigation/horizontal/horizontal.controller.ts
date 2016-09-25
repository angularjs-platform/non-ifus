import {IMenuService} from '@norn/non-framework';

export class PrimaryHorizontalController {

    public menuList: any = {};

    constructor(private MenuService: IMenuService) {
        'ngInject';

        this.menuList =  this.MenuService.getPrimaryMenuList();
    }
}
