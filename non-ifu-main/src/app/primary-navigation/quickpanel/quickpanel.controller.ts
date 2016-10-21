import {ILayoutService, IThemeService} from '@norn/non-framework';

export class PrimaryQuickpanelController {

    public primaryLayoutType: string;
    public secondaryLayoutType: string;
    public theme: string;

    constructor(private localStorageService: angular.local.storage.ILocalStorageService,
                private $anchorScroll: ng.IAnchorScrollService,
                private $location: ng.ILocationService,
                private Layout: ILayoutService,
                private $window: ng.IWindowService,
                private ThemeService: IThemeService) {
        'ngInject';

        this.primaryLayoutType = this.Layout.getPrimaryLayoutType();
        this.secondaryLayoutType = this.Layout.getSecondaryLayoutType();
        this.theme = this.ThemeService.getTheme();
    }

    public togglePrimaryNavigationContent = () : void => {
        if (this.primaryLayoutType !== 'contentOnly') {
            this.localStorageService.set('primaryLayoutType', 'contentOnly');
            this.localStorageService.set('previousPrimaryLayoutType', this.primaryLayoutType);
        }
        else {
            this.localStorageService.set('primaryLayoutType', this.localStorageService.get('previousPrimaryLayoutType'));
        }
        this.$window.location.reload();
    }

    public updatePrimaryLayoutStyle = () : void => {
        this.localStorageService.set('primaryLayoutType', this.primaryLayoutType);
    }

    public updateSecondaryLayoutStyle = () : void => {
        this.localStorageService.set('secondaryLayoutType', this.secondaryLayoutType);
    }

    public updateTheme = () : void => {
        this.localStorageService.set('theme', this.theme);
    }

    public reload = () : void => {
        this.$window.location.reload();
    }

    public scrollToTop = (): void => {
        this.$location.hash('scrollTop');
        this.$anchorScroll();
    }
}
