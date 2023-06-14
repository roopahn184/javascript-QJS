    var x=10
    function number(){
        console.log(x);
    }
    number()

    function outer(out){
        function inner(inner){
            console.log(out);
        }
        inner()
    }
    outer(20)