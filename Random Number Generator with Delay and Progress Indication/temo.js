let inputstring=prompt("Enter any string")
setTimeout(()=>{
    let ans=""
    for(chr of inputstring){
        ans=chr+ans
    }
    let ptag=document.createElement("p")
    ptag.style.fontSize="50px"
    ptag.style.textAlign="center"
    ptag.textContent=ans
    document.body.appendChild(ptag)
},2000)