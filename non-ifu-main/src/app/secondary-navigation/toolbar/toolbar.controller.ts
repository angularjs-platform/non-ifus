import {ILayoutService} from '@norn/non-framework';

export class SecondaryToolbarController {

    public secondaryVerticalNavigationEnabled: boolean;
    public secondaryHorizontalNavigationEnabled: boolean;

    constructor(private Layout: ILayoutService,
                private $mdSidenav: ng.material.ISidenavService) {
        'ngInject';

        this.secondaryVerticalNavigationEnabled = (this.Layout.getSecondaryLayoutType() === 'verticalNavigation') ? true : false;
        this.secondaryHorizontalNavigationEnabled = (this.Layout.getSecondaryLayoutType() === 'horizontalNavigation') ? true : false;
    }

    public toggleSideNav = (id: string) : any => {
        this.$mdSidenav(id).toggle();
    };

}
