import {IMenuService, IStateProvider} from '@norn/non-framework';

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
    ) {
        'ngInject';
        $stateProvider
            .state('app.ui-showcase', {
                abstract: true,
                resolve: {
                    loadMenu: this.loadMenu,
                    loadLocalization: this.loadLocalization
                },
                ncyBreadcrumb: {
                    label: 'UI_SHOWCASE'
                }
            });
    }

    private loadMenu = (MenuService: IMenuService): any => {
        'ngInject';

        const menuList: any = {
                    'main': [{
                            'id': 'menu-forms-components',
                            'title': 'Form Components',
                            'reference': 'menu-forms-components-ref'
                        },
                        {
                            'id': 'menu-forms-dynamic-validations',
                            'title': 'Form Validations',
                            'url': '/ui-showcase/forms/validations'
                        },
                        {
                            'id': 'menu-forms-layouts',
                            'title': 'Form Layouts',
                            'url': '/ui-showcase/forms/layouts'
                        }
                    ],
                    'menu-forms-components-ref': [{
                            'id': 'menu-forms-components-input',
                            'title': 'Input',
                            'url': '/ui-showcase/forms/components/input'
                        },
                        {
                            'id': 'menu-forms-components-radio',
                            'title': 'Radio Button',
                            'url': '/ui-showcase/forms/components/radiobutton'
                        },
                        {
                            'id': 'menu-forms-components-checkbox',
                            'title': 'Checkbox',
                            'url': '/ui-showcase/forms/components/checkbox'
                        },
                        {
                            'id': 'menu-forms-components-text-area',
                            'title': 'Textarea',
                            'url': '/ui-showcase/forms/components/textarea'
                        },
                        {
                            'id': 'menu-forms-components-select',
                            'title': 'Select Dropdown',
                            'url': '/ui-showcase/forms/components/select'
                        },
                        {
                            'id': 'menu-forms-components-datepicker',
                            'title': 'Date Picker',
                            'url': '/ui-showcase/forms/components/datepicker'
                        },
                        {
                            'id': 'menu-forms-components-switch',
                            'title': 'Switch',
                            'url': '/ui-showcase/forms/components/switch'
                        },
                        {
                            'id': 'menu-forms-components-attachments',
                            'title': 'Attachments',
                            'url': '/ui-showcase/forms/components/attachments'
                        }
                    ]
                };

        MenuService.setSecondaryMenuList(menuList);
    };

    private loadLocalization = ($translatePartialLoader: ng.translate.ITranslatePartialLoaderService, $translate: ng.translate.ITranslateService): any => {
        'ngInject';

        $translatePartialLoader.addPart('showcase');
        $translate.refresh();
    };
}
