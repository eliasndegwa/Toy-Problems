const calculate=()=>{
    //getting speed from HTML
    let speed=document.querySelector("#speed").value
    let points=Math.ceil((speed-70)/5)
    let detector=""

    //ensuring values are not empty
    if (speed="") {
        detector=document.querySelector("#showdata").innerHTML="Please enter a value"
    }
    //setting limits
    else if(speed<=70){
        detector=document.querySelector("#showdata").innerHTML="Ok"
    } else if(speed>70 && points<=12) {
        detector=document.querySelector("#showdata").innerHTML=`Your speed is ${speed}.<br>Your demerit points are ${points}`
    }
    else{
        detector=document.querySelector("#showdata").innerHTML=`Your speed is ${speed}.<br>Your demerit points are ${points}.<br>Your license is suspended`
    }
}