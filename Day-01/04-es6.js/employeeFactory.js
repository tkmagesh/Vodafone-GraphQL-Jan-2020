var employeeFactory = (function(){
    var idSymbol = Symbol();
    return function employeeFactory(id, name, salary){

        var result = {
            name : name, 
            salary : salary,
            display : function() { console.log(this[idSymbol], this.name, this.salary) }    
        };
        result[idSymbol] = id;
        return result;
    }
})();