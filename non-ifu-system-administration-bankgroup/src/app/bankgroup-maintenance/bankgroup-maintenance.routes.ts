import { IStateProvider, IMenuService } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bga.bankgroup-maintenance', {
                url: '/bga/bankgroup',
                onEnter: this.loadSecondaryMenu,
                views: {
                    'content@app': {
                        template: require('./bankgroup-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'BANKGROUP_MAINTENANCE'
                }
            });
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('bga-bankgroup-maintenance-ref');
    }
}
