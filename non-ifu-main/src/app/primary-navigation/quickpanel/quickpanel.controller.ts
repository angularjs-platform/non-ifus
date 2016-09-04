import {ILayoutService, IThemeService} from '@norn/non-framework';

export class PrimaryQuickpanelController {

    public primaryLayoutType: string;
    public secondaryLayoutType: string;
    public theme: string;

    constructor(private $cookies: ng.cookies.ICookiesService,
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
            this.$cookies.put('primaryLayoutType', 'contentOnly');
            this.$cookies.put('previousPrimaryLayoutType', this.primaryLayoutType);
        }
        else {
            this.$cookies.put('primaryLayoutType', this.$cookies.get('previousPrimaryLayoutType'));
        }
        this.$window.location.reload();
    }

    public updatePrimaryLayoutStyle = () : void => {
        this.$cookies.put('primaryLayoutType', this.primaryLayoutType);
    }

    public updateSecondaryLayoutStyle = () : void => {
        this.$cookies.put('secondaryLayoutType', this.secondaryLayoutType);
    }

    public updateTheme = () : void => {
        this.$cookies.put('theme', this.theme);
    }

    public reload = () : void => {
        this.$window.location.reload();
    }

    public scrollToTop = (): void => {
        this.$location.hash('scrollTop');
        this.$anchorScroll();
    }
}
