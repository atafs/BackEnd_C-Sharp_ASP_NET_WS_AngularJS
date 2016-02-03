/// <reference path="controller.js" />

//BUSINESS LOGIC: WS
myAppObject.factory('stringService', function () {
    return {
        processString: function (input) {
            //CHECK: if input is not null
            if (!input) {
                return input;
            }

            var output = "";
            //LOOP
            for (var i = 0; i < input.length; i++) {
                //SKIP THE FIRST LETTER
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }
                output = output + input[i];
            }
            return output;
        }
    };
});