
let php = 0;
function Function() {

        let active =++php;
        document.getElementById("initial").innerHTML = active;

        if (active > 0) {
            document.getElementById("initial").style.color = "green";
           }
           else if (numb < 0){
               document.getElementById("initial").style.color = "red";
           }
           else {
               document.getElementById("initial").style.color = "rgb(3,3,46)";
           }

    };
    
    function Function2(){
        let active = --php;
        document.getElementById("initial").innerHTML = active;

        if (active > 0) {
            document.getElementById("initial").style.color = "green";
           }
           else if (active < 0){
               document.getElementById("initial").style.color = "red";
           }
           else {
               document.getElementById("initial").style.color = "rgb(3, 3, 46)";
           }

    };
   
