const header = document.querySelector("header")

header.style.cssText= "background-color:yellow; border:2px solid; text-align:center"



let operations = document.querySelectorAll(".operation")

operations.forEach(div=>{
    let [first,second,result] = div.querySelectorAll("input")
    let operation= first.nextSibling.data
    second.addEventListener("input", ()=>{

        switch(operation){
            case "+":
                result.value = (+first.value) + (+second.value)
                break;
            case "-":
                result.value = first.value - second.value
                break;
            case "*":
                result.value = first.value * second.value
                break;
            case "/":
                result.value= first.value/second.value
                break;
            case "%":
                result.value=first.value%second.value 
            default:
                break;
        }

    })
})


/* 
let main = Array.from(document.querySelector("main").children)


main.forEach(div=>{
    let [first,second,result] = div.querySelectorAll("input")
    let operation= first.nextSibling.data
    second.addEventListener("input", ()=>{

        switch(operation){
            case "+":
                result.value = (+first.value) + (+second.value)
                break;
            case "-":
                result.value = first.value - second.value
                break;
            case "*":
                result.value = first.value * second.value
                break;
            case "/":
                result.value= first.value/second.value
                break;
            default:
                break;
        }

    })
})


let modulo= document.querySelector(".modulo")
let [first,second,result] = modulo.querySelectorAll("input")
second.addEventListener("input",()=>{
    result.value = first.value%second.value
}) */