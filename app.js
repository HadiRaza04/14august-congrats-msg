var text = document.getElementById('text');
var i = 1;
var txt = '14 August Happy Pakistan Independence Day To celebrate the freedom. Celebrate Happy Independence day Pakistan with your loved ones with flowers, gifts and happy thoughts.';


function typewritter() {
        console.log(i)
        if (i <= txt.length) {
            i++;

            text.innerHTML += txt.charAt(i)
            setTimeout(typewritter, 50)
            var inner_box = document.getElementById('q');
            if(i===171){
                inner_box.innerHTML ='<b>- Hadi Raza</b>';
            }

        }


    }
console.log(txt.length)
window.onload = typewritter();
