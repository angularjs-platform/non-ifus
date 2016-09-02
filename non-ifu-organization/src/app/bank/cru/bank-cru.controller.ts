const bankCRUFields: any = require('./bank-cru.form.json');

export class CRUBankController {

    public bank: any;

    constructor(private $mdToast: ng.material.IToastService) {

        this.bank = { data: {}, fields: bankCRUFields };
    }

    public submit = (valid: boolean): void => {
        if (valid) {
            console.log('submitted');
        }
        else {
            this.$mdToast.show(this.$mdToast.simple().textContent('Please correct your inputs!').position('bottom left'));
        }
    };
}
