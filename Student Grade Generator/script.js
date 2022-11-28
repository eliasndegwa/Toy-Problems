//function for calcultating grades
const calculate=()=>{
    //getting grades from HTML
    let math=document.querySelector("#math").value
    let eng=document.querySelector("#eng").value
    let kisw=document.querySelector("#kisw").value
    let sci=document.querySelector("#sci").value
    let ss=document.querySelector("#ss").value
    let grades=""
    //calculating total marks
    let totalGrades=
    parseFloat(math)+
    parseFloat(eng)+
    parseFloat(kisw)+
    parseFloat(sci)+
    parseFloat(ss)

    //assigning grades
    let percentage = (totalGrades / 500) * 100;
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

    //ensuring values are not empty
    if (math==""|| eng==""|| kisw==""|| sci==""|| ss=="") {
        document.querySelector("#showdata").innerHTML="Please enter all the fields"
    } else {
        //returning the result
        if (percentage>=40) {
            document.querySelector("#showdata").innerHTML=`Out of 500 your total is  ${totalGrades} 
        and percentage is ${percentage}%. <br> 
        Your grade is ${grades}. You have Passed.`
        } else {
            document.querySelector("#showdata").innerHTML=`Out of 500 your total is  ${totalGrades} 
        and percentage is ${percentage}%. <br> 
        Your grade is ${grades}. You have failed.`
        }
    }
}
