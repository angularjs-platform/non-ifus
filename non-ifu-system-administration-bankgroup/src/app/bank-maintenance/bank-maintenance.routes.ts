import { IStateProvider, IMenuService } from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.bga.bank-maintenance', {
                url: '/bga/bank',
                onEnter: this.loadSecondaryMenu,
                views: {
                    'content@app': {
                        template: require('./bank-maintenance.tpl')
                    }
                },
                ncyBreadcrumb: {
                    label: 'BANK_MAINTENANCE'
                }
            });
    }

    private loadSecondaryMenu = (MenuService: IMenuService): any => {
        'ngInject';

        MenuService.setSecondaryMenuListID('bga-bank-maintenance-ref');
    }
}
