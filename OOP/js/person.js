function Person() {
    this.firstName = undefined;
    this.lastName = undefined;
    this.middleName = undefined;


};
Person.prototype.setName =
    function (firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        return true;
    }

