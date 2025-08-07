var currentInput = "";
var lastInput = 0;
var result = 0;

$("button").click(function (e) { 

    switch ($(this).attr("class")) {
    case "number":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "plus":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "minus":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "multiply":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "divide":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "remainder":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "delete":
        currentInput = currentInput.slice(0,-1);
        $(".result-text").text(currentInput);
        break;

    case "delete-all":
        currentInput = "";
        lastInput = 0;
        $(".result-text").text(currentInput);
        break;

    case "comma":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "enter":
        try{
            if (['+', '-', '*', '/', '%'].includes(currentInput[0])) {
            result = eval(lastInput + currentInput);
            }
            else {result = eval(currentInput)};

            //If you spam enter, it could error i think

            if (isNaN(result)){
                result = 0;
                $(".result-text").text("E");
            };
            if (!isFinite(result)){
                result = 0;
                $(".result-text").text("Inf.")
            };

            lastInput = result;
            currentInput = "";
            $(".result-text").text(result);
            break;
        }
        catch(err){
            currentInput = "";
            lastInput = 0;
            $(".result-text").text("E")

            //IF A USER ENTERS + (or something that's not a number) AT THE END IT ERRORS
            //Also, put the result into the .last-input-text text when you start something else
            //Also, the nan and finite conditions doesnt work !    
        }
        

    default:
        break;
}


});

