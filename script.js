let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arrA = Array.from(buttons);
arrA.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);  /* use evaluate method for calcultion */
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);  /*return substring with string (length-1)*/
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})