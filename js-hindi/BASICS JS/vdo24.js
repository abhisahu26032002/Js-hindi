//immediately invoked function expression (IIFE)

(function chai(){
    //name iife chai jisme name hia
    console.log(`DB Connected`);
})
();

( (name) => {
    //no named iife
    console.log(`DB-Connected two  ${name}`);
})("abhisau")


