import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./checkbox.form.json');

export class CheckboxComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
