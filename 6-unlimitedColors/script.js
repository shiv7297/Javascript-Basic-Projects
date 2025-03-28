const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return  color;
} 

   let intervalId;
   const startChanging = function(){
        if(!intervalId){    //  nice isse to mera vo wala doubt bhi solve ho gya
            intervalId = setInterval(changeBG,300);
        }
   }

   const stopChanging = function(){
    clearInterval(intervalId)
    intervalId = null;
   }

   const changeBG = function(){
    document.body.style.backgroundColor = randomColor()
   }

 

   document.querySelector("#start").addEventListener("click",startChanging)

   document.querySelector("#stop").addEventListener("click",stopChanging)
