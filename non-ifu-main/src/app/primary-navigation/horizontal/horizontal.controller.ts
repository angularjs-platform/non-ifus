import {IConfigurationService, Configuration} from '@norn/non-framework';

export class PrimaryHorizontalController {

    public menuList: any = {};

    constructor(private ConfigurationService: IConfigurationService) {
        'ngInject';

        const config: Configuration =  this.ConfigurationService.getConfig();

        if (config.primaryMenuList) {
            config.primaryMenuList.forEach((menu: any): void => {
               this.menuList[menu.id] = menu.menuList;
           });
        }
    }
}
