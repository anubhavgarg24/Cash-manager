const curr = [1, 5, 10, 20, 100, 500, 2000]

// const ans = [0, 0, 0, 0, 0, 0, 0]
var ans = Array(7).fill(0, 0) 
// fill array of size 7 w/ zeros from idx 0 

// console.log(curr)
// console.log(ans)

/*
//Logic example
const billAmt = 1257
const givenAmt = 1500

let balance = givenAmt - billAmt 
// 1500 - 1257 = 243

for(let i=curr.length-1; i>=0; i--){
    // console.log(curr[i])
    if(balance >= curr[i]){
        ans[i] = Math.floor(balance/curr[i])
        balance = balance - curr[i]*ans[i]
    }
}

for(let i=curr.length-1; i>=0; i--){
    console.log(curr[i] , ans[i])
}
*/

function help_me(){

    var form = document.getElementById('input-data')
    var billAmt = form.elements['bill-amt'].value
    var givenAmt = form.elements['given-amt'].value
    var balance = givenAmt - billAmt
    if(balance == 0){
        var final_out = "No balance" + "<br>"        
    }
    else if(balance<0){
        var final_out = "Request ₹  " + Math.abs(balance) + "<br>"
    }
    else{
        var final_out = "Return ₹  " + balance + "<br>"
        for(let i=curr.length-1; i>=0; i--){
            // console.log(curr[i])
            if(balance >= curr[i]){
                ans[i] = Math.floor(balance/curr[i])
                balance = balance - curr[i]*ans[i]
            }
            if(balance == 0)
                break;
        }

        // console.log(curr , ans)

        for(let i=curr.length-1; i>=0; i--){
            final_out += curr[i] + " x " + ans[i] + "<br>"
        }
    }
    

    // console.log(billAmt)
    // console.log(givenAmt)    

    document.getElementById("result").innerHTML = final_out
}