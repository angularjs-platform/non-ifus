import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./datepicker.form.json');

export class DatepickerComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
