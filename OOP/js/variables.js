"use strict";
function MyClass() { // constructor function
    var privateVariable = "foo";  // Private variable

    this.publicVariable = "bar";  // Public variable

    this.privilegedMethod = function () {  // Public Method
        alert(privateVariable);
    };
}

// Instance method will be available to all instance but only load once in memory
MyClass.prototype.publicMethod = function () {
    alert(this.publicVariable);
};

// Static variable shared by all instance
MyClass.staticProperty = "baz";

