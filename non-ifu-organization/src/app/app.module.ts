const moduleName: string = 'non.ifu.organization.app';

// shared
import shared from './shared/shared.module';

// pages
import create from './create/create.module';

angular.module(moduleName, [shared, create]);

export default moduleName;
