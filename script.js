var name = document.frm.name;
var surname = document.frm.surname;
var idNumber = document.frm.idNumber;
function check(){
    if(document.getElementById("correct1").value  == 'TRUE'){
        if(document.getElementById("correct2").value  == 'TRUE'){
            if(document.getElementById("correct3").value == 'TRUE'){
                alert("Answers are correct");
            }else{
                alert("Wrong answers");
            }
        }else{
            alert("Wrong answers");
        }
    }else{
        alert("Wrong answers");
    }
}

localStorage.setItem(name, surname, idNumber)
document.getElementById("button").innerHTML = localStorage.getItem(name, surname, idNumber);

//fs.writeFileSync(path.resolve("s", 'data.json'), JSON.stringify(name, surname, idNumber));