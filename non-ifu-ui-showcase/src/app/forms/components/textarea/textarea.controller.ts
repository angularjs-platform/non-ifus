import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./textarea.form.json');

export class TextareaComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
