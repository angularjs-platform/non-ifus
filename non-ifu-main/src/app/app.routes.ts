import {IConfigurationService, ILayoutProvider} from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider,
        private LayoutProvider: ILayoutProvider
    ) {
        'ngInject';

        // State definitions
        this.$stateProvider
            .state('app', {
                abstract: true,
                resolve: {
                    initialConfig: this.loadConfiguration
                },
                views   : {
                    'main@': {
                        template: LayoutProvider.getPrimaryLayout()
                    },
                    'toolbar@app': {
                        template: require('./primary-navigation/toolbar/toolbar.tpl'),
                        controller: 'PrimaryToolbarController as vm'
                    },
                    'horizontalNavigation@app': {
                        template: require('./primary-navigation/horizontal/horizontal.tpl'),
                        controller: 'PrimaryHorizontalController as vm'
                    },
                    'verticalNavigation@app': {
                        template: require('./primary-navigation/vertical/vertical.tpl'),
                        controller: 'PrimaryVerticalController as vm'
                    },
                    'quickpanel@app': {
                        template: require('./primary-navigation/quickpanel/quickpanel.tpl'),
                        controller: 'PrimaryQuickpanelController as vm'
                    },
                    'secondary-main@app': {
                        template: LayoutProvider.getSecondaryLayout()
                    },
                    'secondaryToolbar@app': {
                        template: require('./secondary-navigation/toolbar/toolbar.tpl'),
                        controller: 'SecondaryToolbarController as vm'
                    },
                    'secondaryHorizontalNavigation@app': {
                        template: require('./secondary-navigation/horizontal/horizontal.tpl'),
                        controller: 'SecondaryHorizontalController as vm'
                    },
                    'secondaryVerticalNavigation@app': {
                        template: require('./secondary-navigation/vertical/vertical.tpl'),
                        controller: 'SecondaryVerticalController as vm'
                    }
                }
        });
    }

    private loadConfiguration = (ConfigurationService: IConfigurationService): any => {
        'ngInject';
        return ConfigurationService.loadConfig();
    };
}
