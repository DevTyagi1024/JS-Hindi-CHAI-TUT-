// Immediately Invoked Function Expressions(IIFE)

(function chai() {
    console.log("DB connedcted");

})();

( (name) => {
    console.log(`DB conneted ,${name}`);

})("Dev");