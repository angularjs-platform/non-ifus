import { FormConfiguration } from '@norn/non-framework';

const componentFields: any = require('./attachments.form.json');

export class AttachmentComponentsController {

    public formConfiguration: FormConfiguration;

    constructor() {
        this.formConfiguration = { model: {}, fields: componentFields };
    }
}
