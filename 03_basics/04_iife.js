// Immediatelly Involked Function Expressions (IIFE)

(function chai(){
    //Named iife
    console.log(`DB CONNECTED`)
})();

((name)=>{
    // UnNAMED iife
    console.log(`DB CONNECTED TWO ${name}`);
})(`hitesh`);