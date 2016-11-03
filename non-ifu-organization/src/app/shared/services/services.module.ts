const moduleName: string = 'non.ifu.organization.app.shared.services';

// Services
import {ReferenceDataService} from './reference-data.service';

angular.module(moduleName, [])
    .service('ReferenceDataService', ReferenceDataService);

export default moduleName;
