//get all digits and input box
const allDigits = document.querySelectorAll('.btn');
const input = document.getElementById("input");
//global
let inputString=''

//utility function
function clearInputBox(){
    input.value = ''
}
function updateInputBox(total){
    input.value = total;
}

Array.from(allDigits).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            inputString=eval(inputString);
            updateInputBox(inputString)
        }else if(e.target.innerHTML == "C"){
            clearInputBox()
            inputString = '';
        }
        else if(e.target.innerHTML == "DE"){
            inputString = input.value;
            const arrayString = inputString.split('');
            arrayString.pop();
            input.value= arrayString.join('')
        }
        else{
            inputString = input.value;
            inputString+=e.target.innerHTML;
            updateInputBox(inputString)
        }        
        
    })
})

