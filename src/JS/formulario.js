const divInput = document.querySelectorAll(".container-input")
const input = document.querySelectorAll(".dado-usuario")
const submit = document.getElementById("btn-enviar")

submit.addEventListener("click", function(){
    divInput.forEach(element => {
        element.classList.remove("nao-preenchido")
        element.classList.remove("preenchido")
    });
    for(var i = 0; i < input.length;i++){
        if (input[i].value === ""){
            divInput[i].classList.add("nao-preenchido")
        } else if(input[i].value !== ""){
            divInput[i].classList.add("preenchido")
        }
    }
})
