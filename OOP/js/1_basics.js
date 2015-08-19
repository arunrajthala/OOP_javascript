"use strict";

function SayHelloTo(person) {
    this.person = person;
    this.messageType = '';
};
SayHelloTo.prototype.showGreeting = function () {
    var fullName = this.person.firstName + ' ' + this.person.middleName + ' ' + this.person.lastName;
    if (this.messageType === 1) {
        return 'Good Bye ' + fullName;
    }
    return 'Hello ' + fullName;
};
SayHelloTo.prototype.setMessageType = function (messageType) {
    this.messageType = messageType;
    return true;
};
/*
 var Person = {
 "first Name": undefined,
 lastName: undefined,
 middleName: undefined,
 setName: function (firstName, lastName, middleName) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.middleName = middleName;
 return true;
 }

 };
 */







