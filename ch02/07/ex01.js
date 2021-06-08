console.log('Global EC pushed');

function f1() {
    console.log("f1 Function EC pushed");

    const f2 = function() {
        console.log("f2 Function EC pushed");
        // some codes...
        console.log('f2 Function EC popped off');
    }
    
    f2();
    console.log('f1 Function EC popped off');
}

f1();
console.log('Global EC popped off');