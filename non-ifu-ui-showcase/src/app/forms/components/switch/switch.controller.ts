import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./switch.form.json');

export class SwitchComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
