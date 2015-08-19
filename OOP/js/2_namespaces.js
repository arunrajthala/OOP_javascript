"use strict";
var App = {
    SayHelloTo: function (person) {
        this.Person = person;
        this.messageType = '';
    },
    showGreeting: function () {
        var fullName = this.Person.firstName + ' ' + this.Person.middleName + ' ' + this.Person.lastName;
        if (this.messageType === 1) {
            return 'Good Bye ' + fullName;
        }
        return 'Hello ' + fullName;
    },

    setMessageType: function (messageType) {
        this.messageType = messageType;
        return true;
    }

};






