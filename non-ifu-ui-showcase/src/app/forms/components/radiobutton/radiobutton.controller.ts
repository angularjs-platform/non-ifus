const componentFields: any = require('./radiobutton.form.json');

export class RadiobuttonComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
