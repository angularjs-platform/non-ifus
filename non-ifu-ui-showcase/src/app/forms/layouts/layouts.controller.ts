import { FormConfiguration } from '@norn/non-framework';

const layoutingFields: any = require('./layouts.form.json');

export class LayoutsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: layoutingFields };
    }
}
