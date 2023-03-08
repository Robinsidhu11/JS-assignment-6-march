let seconds=0
function display_remainingtime(){
    console.log("Random Number will be generated in "+(3-seconds)+" seconds")
    seconds++
}

setInterval(()=>{
    if(seconds==3){
        console.log(Math.floor(Math.random()*100))
        seconds=0
    }
    else{
        display_remainingtime()
    }
    
},1000)