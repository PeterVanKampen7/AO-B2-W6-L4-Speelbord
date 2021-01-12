document.getElementById("submit").onclick = function(){
    var charArray = document.getElementById("wordField").value.split('');
    var checkWord = document.getElementById("checkWord").value.split('');
    if(charArray.length == 5 && checkWord.length == 5){
        for (let i = 0; i < 5; i++) {
            var letterField = document.getElementById("letter"+i);
            letterField.innerHTML = checkWord[i];
            letterField.style.backgroundColor = "transparent";
            letterField.style.borderRadius = "0px";
            for (let j = 0; j < 5; j++) {               
                if(charArray[i] == checkWord[i]){              
                    letterField.style.backgroundColor = "green";
                }
                else if(checkWord[i] == charArray[j]){
                    letterField.style.backgroundColor = "yellow";
                    letterField.style.borderRadius = "20px";
                }
            }
        }
    }
    else{
        alert("Het woord dat ingevuld is heeft geen geldig aantal letters. Zorg ervoor dat het ingevoerde woord bestaat uit 5 letters.");
    }
}