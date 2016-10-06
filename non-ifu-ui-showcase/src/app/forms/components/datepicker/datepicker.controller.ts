const componentFields: any = require('./datepicker.form.json');

export class DatepickerComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
