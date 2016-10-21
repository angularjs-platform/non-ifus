import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./radiobutton.form.json');

export class RadiobuttonComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
