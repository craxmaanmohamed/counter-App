var count=document.getElementById("count")
var increace=document.getElementById("increace")
var decreace=document.getElementById("decreace")
var save=document.getElementById("save")
var store=document.getElementById("store")
var cleare=document.getElementById("cleare")

var countNumber=0
increace.addEventListener("click",function(){
    countNumber++
    count.innerHTML=countNumber

})
decreace.addEventListener("click",function(){
    countNumber--
    count.innerHTML=countNumber
    if (countNumber==-1){
        countNumber=0
        count.innerHTML=countNumber
    }
    

})


save.addEventListener("click",function(){

        var savenum=countNumber+'-'
        store.innerText +=savenum 
        countNumber=0
        count.innerHTML=countNumber

})

cleare.addEventListener("click",function(){

    store.innerText ="people entered: "

})
