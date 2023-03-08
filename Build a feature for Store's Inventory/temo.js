let initial_obj={
    "lays":2,
    "soda":4.5,
    "rum":34.99,
    "bun":3.5,
    "whisky":23,
    "waffer":6.99
}


let final_obj={}
function convert_usd_to_inr(initial_obj){
    for(let key in initial_obj) {
        let cost=initial_obj[key]*80
        final_obj[key]=cost
    }
}
convert_usd_to_inr(initial_obj)
console.log("Price List in INR is:")
console.log(final_obj)