const moduleName: string = 'non.ifu.organization';

import app from './app/app.module';

angular.module(moduleName, ['non.framework', app]);

export default moduleName;
