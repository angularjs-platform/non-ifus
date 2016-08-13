import {ILayoutService} from '@norn/non-framework';

export class PrimaryToolbarController {

    public verticalNavigationEnabled: boolean;
    public horizontalNavigationEnabled: boolean;
    public storedLanguage: string;

    constructor (private Layout: ILayoutService,
                 private $mdSidenav: ng.material.ISidenavService,
                 private $translate: ng.translate.ITranslateService) {
        'ngInject';

        this.verticalNavigationEnabled = (this.Layout.getPrimaryLayoutType() === 'verticalNavigation') ? true : false;
        this.horizontalNavigationEnabled = (this.Layout.getPrimaryLayoutType() === 'horizontalNavigation') ? true : false;

        // If no language is stored then the preferred language from the browser is selected
        this.storedLanguage = this.$translate.storage().get(this.$translate.storageKey());
    }

    public toggleSideNav = (id: string): void => {
        this.$mdSidenav(id).toggle();
    }

    public changeLanguage = (lang: string): void => {
        this.$translate.use(lang);
        this.storedLanguage = lang;
    }

    public isSelected = (lang: string): boolean => {
        if (this.storedLanguage === lang) {
            return true;
        }
        return false;
    }
}
