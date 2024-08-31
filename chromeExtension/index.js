const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("siteUrl"))
const renameLeadsFromLocalStorage = JSON.parse(localStorage.getItem("renamedUrl"))

let siteUrl = []        //current tab url
let renamedUrl = []     //input string


//load list from localStorage
if(leadsFromLocalStorage){
    renamedUrl = renameLeadsFromLocalStorage
    siteUrl = leadsFromLocalStorage
    render(renamedUrl, siteUrl)

}

//save current tab url and input field
tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
       
        renamedUrl.push(inputEl.value)
        console.log(localStorage.setItem("renamedUrl", JSON.stringify(renamedUrl)))
        inputEl.value=""

        siteUrl.push(tabs[0].url)
        console.log(localStorage.setItem("siteUrl", JSON.stringify(siteUrl)))
        
        render(renamedUrl, siteUrl)
        
    })

})


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    siteUrl = []
    renamedUrl = []
    render(renamedUrl, siteUrl)

})


    //  Remove each individual item - kinda works but not really but needs re-open for multiple deletion

let removeBtn = document.getElementsByClassName("remove")

const buttonPressed = e => {

    siteUrl.splice(e.target.id, 1)
    console.log(localStorage.setItem("siteUrl", JSON.stringify(siteUrl)))

    renamedUrl.splice(e.target.id, 1)
    console.log(localStorage.setItem("renamedUrl", JSON.stringify(renamedUrl)))
    
    render(renamedUrl, siteUrl)
}


for(let button of removeBtn){
    button.addEventListener("click", buttonPressed)
}


//display saved urls - if custom name gived, display that instead
function render(passedRenameUrl, passedSiteUrl){

    let listItems = " "

    for(let i = 0; i< passedSiteUrl.length; i++){
           
        if(passedRenameUrl[i]){
         listItems += ` 
         <li>
         <button class="remove" id="${i}">Remove</button>
         <a target = '_blank' href='${passedSiteUrl[i]}'> ${passedRenameUrl[i]} </a>
         </li> 
         `}else{
            listItems += ` 
            <li>
            <button class="remove" id="${i}">Remove</button>
            <a target = '_blank' href='${passedSiteUrl[i]}'> ${passedSiteUrl[i].substring(8,45)} </a>
            </li> 
            `
         }
        
    }
    ulEl.innerHTML = listItems
    
}


