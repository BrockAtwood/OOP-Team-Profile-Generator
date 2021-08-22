//create class for manager from w3schools example

//build on the employee question js

class ManagerQuestions {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }

    //needs to override employee getRole
    getRole(){
        return this.????? "Manager"
    }

}