import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./select.form.json');

export class SelectComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
