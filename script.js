console.log("Hello");

var countA = 6, countB = 6, scoreA = 0, scoreB = 0; 
function getRandom()
{
   return Math.floor(Math.random() * 8 +1);
}

function hitA()
{  
    var a = getRandom();

    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = false;

    document.getElementById("lightA").style.backgroundColor = "red";
    document.getElementById("lightB").style.backgroundColor = "green";
    document.getElementById("p1").innerHTML = a;
    countA--;
    document.getElementById("ballA").innerHTML = "Balls left: "+countA;

    scoreA += a;
    document.getElementById("scoreA").innerHTML = scoreA; 

}

function hitB()
{  
    var  a = getRandom();

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;

    document.getElementById("lightB").style.backgroundColor="red";
    document.getElementById("lightA").style.backgroundColor="green";
    document.getElementById("p2").innerHTML = a;
    countB--;
    document.getElementById("ballB").innerHTML = "Balls left: "+countB;
     
    scoreB += a;
    document.getElementById("scoreB").innerHTML = scoreB;

    if ( countA <= 0 && countB <= 0)
        {
            document.getElementById("btn1").disabled = true;   
            document.getElementById("lightA").style.backgroundColor = "red";
            document.getElementById("btn1").style.display="none";
            document.getElementById("btn2").style.display="none";
        
            if(scoreA > scoreB)
                {
                   document.getElementById("resultA").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; Winner &#127942;";
                   document.getElementById("resultB").innerHTML = "Try Next Time &#129310;";

                }
                else if(scoreB > scoreA)
                {
                    document.getElementById("resultB").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; Winner &#127942;";
                    document.getElementById("resultA").innerHTML = "Try Next Time &#129310;";
                }
                else
                {
                    document.getElementById("resultA").innerHTML = "It's a Tie";
                    document.getElementById("resultB").innerHTML = "It's a Tie";
                }

        }
}

