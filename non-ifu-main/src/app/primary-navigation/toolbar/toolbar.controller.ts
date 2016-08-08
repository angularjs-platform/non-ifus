import {ILayoutService} from '@norn/non-framework';

export class PrimaryToolbarController {

    public verticalNavigationEnabled: boolean;
    public horizontalNavigationEnabled: boolean;

    constructor (private Layout: ILayoutService,
                 private $mdSidenav: ng.material.ISidenavService) {
        'ngInject';

        this.verticalNavigationEnabled = (this.Layout.getPrimaryLayoutType() === 'verticalNavigation') ? true : false;
        this.horizontalNavigationEnabled = (this.Layout.getPrimaryLayoutType() === 'horizontalNavigation') ? true : false;

    }

    public toggleSideNav = (id: string) : any => {
        this.$mdSidenav(id).toggle();
    };
}
