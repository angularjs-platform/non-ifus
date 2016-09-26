const componentFields: any = require('./textarea.form.json');

export class TextareaComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
