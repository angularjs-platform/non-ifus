import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./input.form.json');

export class InputComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
