const calculate=()=>{
    let math=document.querySelector("#math").value
    let eng=document.querySelector("#eng").value
    let kisw=document.querySelector("#kisw").value
    let sci=document.querySelector("#sci").value
    let ss=document.querySelector("#ss").value
    let grades=""

    let totalGrades=
    parseFloat(math)+
    parseFloat(eng)+
    parseFloat(kisw)+
    parseFloat(sci)+
    parseFloat(ss)

    let percentage = (totalgrades / 500) * 100;
    if (percentage>79) {
        grades="A"
    } else if (percentage>59&&percentage<=79) {
        grades="B"
    } else if(percentage>49&&percentage<=59) {
        grades="C"
    }else if(percentage>39&&percentage<=49){
        grades="D"
    }else{
        grades="E"
    }

    if (math==""|| eng==""|| kisw==""|| sci==""|| ss=="") {
        document.querySelector("#showdata").innerHTML="Please enter all the fields"
    } else {
        if (percentage>=40) {
            document.querySelector("#showdata").innerHTML=`Out of 400 your total is  ${totalgrades} 
        and percentage is ${percentage}%. <br> 
        Your grade is ${grades}. You have Passed.`
        } else {
            document.querySelector("#showdata").innerHTML=`Out of 400 your total is  ${totalgrades} 
        and percentage is ${percentage}%. <br> 
        Your grade is ${grades}. You have failed.`
        }
    }
}
