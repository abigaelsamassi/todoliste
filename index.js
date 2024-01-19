var addparole =document.getElementById('addparole')
var champparole=document.getElementById('champparole')
var parolecontenaire=document.getElementById('parolecontenaire')

addparole.onclick=function()
    {
    //on verifie que linput n'est pas vide 
    if(champparole.value !=""){
       var paragraph = document.createElement('p')
       paragraph.id= "barre"
    }

    paragraph.innerText =champparole.value;
    paragraph.classList.add('paragraphestyle')

    parolecontenaire.appendChild(paragraph)
    champparole.value =""

    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraphclick')
       
    })

    paragraph.addEventListener('dblclick', function(){
        parolecontenaire.removeChild(paragraph)
    
    })

    
   
}


