
/**
    //---Convert String into Number---//

    (1) Using the Unary Plus Operator:- 
        var n = +str;

    (2) The Number Constructor:- 
        var n = Number(str);

    (3) The parseFloat functions:-
        var n = parseFloat(str);

*/



const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {

    number.innerHTML = 0;

    const updatenumber = () => {
        const targetnumber = +number.getAttribute('data-target'); 
        //getAtrribute is used to access any attribute from HTML. + is to convert it into number.

        const starting = Number(number.innerHTML);
    
        const increment = targetnumber/100;

     
       
        if(starting < targetnumber){
            number.innerHTML = `${Math.round(starting + increment)}`;
            setTimeout(updatenumber,8)
        }else{
            number.innerHTML = targetnumber;
        }

    }

    updatenumber();
})