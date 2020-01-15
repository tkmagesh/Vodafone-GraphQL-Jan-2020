//CommonJS module system
// Everything is private by default
// Any public should be assigned to module.exports
var calculator = {
    add(x,y){
        return x + y;
    },
    subtract(x,y){
        return x - y;
    },
    multiply(x,y){
        return x * y;
    },
    divide(x,y){
        return x / y;
    }
};

//export default calculator;

module.exports = calculator;
