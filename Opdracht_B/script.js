document.getElementById("submit").onclick = function(){
    var charArray = document.getElementById("wordField").value.split('');
    var checkLetter = document.getElementById("checkLetter").value.split('');
    if(charArray.length == 5 && checkLetter.length == 1){
        for (let i = 0; i < 5; i++) {
            if(charArray[i] == checkLetter[0]){
                document.getElementById("letter"+i).innerHTML = charArray[i];
            }
        }
    }
    else{
        alert("Het woord of de letter die ingevuld is heeft geen geldig aantal letters. Zorg ervoor dat het ingevoerde woord bestaat uit 5 letters en 1 letter die word nagekeken.");
    }
}