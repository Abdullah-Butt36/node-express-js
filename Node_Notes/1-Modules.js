// There are two types of modules 
// 1- Common Js modules
// ES6 modules

// Common Modules

const obj = {
    name : "Ali",
    class : "13B",
    email : "stydent@gmail.com",
    password : "dfg67@3",
    Data : function() {
        console.log(`Student login id ${this.email} and password ${this.password}`)
    }
};
// console.log(obj.Data());

module.exports = obj