const calculate=()=>{
    //getting speed from HTML
    let speed=document.querySelector("#speed").value
    let detector=""

    //ensuring values are not empty
    if (speed="") {
        detector=document.querySelector("#showdata").innerHTML="Please enter a value"
    }
    //setting limits
    else if(speed<=70){
        detector=document.querySelector("#showdata").innerHTML="Ok"
    } else {
        const points=((speed-70)/5);
        Math.ceil(points);
        detector=document.querySelector("#showdata").innerHTML=`Your speed is ${speed}.<br>Your demerit points are ${points}`
    }
}