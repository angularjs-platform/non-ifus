import { IStateProvider, IMenuService } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';
        $stateProvider
            .state('app.home', {
                url: '/home',
                onEnter: this.loadSecondaryMenu,
                views   : {
                    'secondary-main@app': {
                        template: require('./dashboard.tpl'),
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    skip: true
                }
        });
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuList(null);
    }
}
