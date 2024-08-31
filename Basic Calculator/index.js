

sumEl = document.getElementById("sum-el")

function add(){
    let num1 = parseInt(document.getElementById("num1-in").value)
    let num2 = parseInt(document.getElementById("num2-in").value)
    let sum = num1 + num2
    sumEl.textContent = "Sum: "
    sumEl.textContent += sum
    
}

function sub(){
    let num1 = parseInt(document.getElementById("num1-in").value)
    let num2 = parseInt(document.getElementById("num2-in").value)
    let sum = num1 - num2
    sumEl.textContent = "Sum: "
    sumEl.textContent += sum
}

function div(){
    let num1 = parseInt(document.getElementById("num1-in").value)
    let num2 = parseInt(document.getElementById("num2-in").value)
    let sum = num1 / num2
    sumEl.textContent = "Sum: "
    sumEl.textContent += sum
}


function mult(){
    let num1 = parseInt(document.getElementById("num1-in").value)
    let num2 = parseInt(document.getElementById("num2-in").value)
    let sum = num1 * num2
    sumEl.textContent = "Sum: "
    sumEl.textContent += sum
}