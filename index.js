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
        $(".last-input-text").text(currentInput);
        break;

    case "comma":
        currentInput += this.innerHTML;
        $(".result-text").text(currentInput);
        break;

    case "enter":
    try {
            if (!currentInput || /[+\-*/%]$/.test(currentInput)) {
                throw new Error("Invalid input");
            }

            if (['+', '-', '*', '/', '%'].includes(currentInput[0])) {
                result = eval(lastInput + currentInput);
            } else {
                result = eval(currentInput);
            }

            if (isNaN(result)) {
                result = 0;
                $(".result-text").text("E");
            } else if (!isFinite(result)) {
                result = 0;
                $(".result-text").text("Inf.");
            } else {
                $(".result-text").text("0");
            }

            lastInput = result;
            currentInput = "";
            $(".last-input-text").text(lastInput);

        } catch (err) {
            currentInput = "";
            lastInput = 0;
            $(".result-text").text("0");
            $(".last-input-text").text(lastInput);
        }
}
});
