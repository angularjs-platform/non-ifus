import * as angular from 'angular';

const moduleName: string = 'non.ifu.home.app';

import dashboard from './dashboard/dashboard.module';

angular.module(moduleName, [dashboard]);

export default moduleName;
