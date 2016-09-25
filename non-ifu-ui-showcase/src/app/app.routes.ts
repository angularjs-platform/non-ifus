import {IMenuService} from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';
        $stateProvider
            .state('app.ui-showcase', {
                abstract: true,
                resolve: {
                    loadMenu: this.loadMenu,
                    loadLocalization: this.loadLocalization
                }
            });
    }

    private loadMenu = (MenuService: IMenuService): any => {
        'ngInject';

        const menuList: any = [
                {
                    'id': 'main',
                    'menuList': [{
                            'id': 'menu-forms-components',
                            'title': 'Form Components Demo',
                            'url': '#/ui-showcase/forms/components'
                        },
                        {
                            'id': 'menu-forms-dynamic-validations',
                            'title': 'Form Dynamic Validations Demo',
                            'url': '#/ui-showcase/forms/validations'
                        }
                    ]
                }
        ];

        MenuService.setSecondaryMenuList(menuList);
    };

    private loadLocalization = ($translatePartialLoader: ng.translate.ITranslatePartialLoaderService, $translate: ng.translate.ITranslateService): any => {
        'ngInject';

        $translatePartialLoader.addPart('showcase');
        $translate.refresh();
    };
}
