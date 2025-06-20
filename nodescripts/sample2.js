var i = "global scope";

function fun2() {
    var i = "local scope";

    console.log(i);
};

fun2();
console.log(i);