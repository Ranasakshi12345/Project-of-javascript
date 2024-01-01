function countvowel(){
    const userName = document.getElementById("inputName").value;

    let countvowel = 0;
    for(i=0 ; i<userName.length ; i++){
        const value = userName.charAt(i).toLowerCase();
        
        if(value === "a" || value === "e" || value === "i" || value === "o" || value === "u" ){
            countvowel++;
        }
    }

    document.getElementById("blankContainer").textContent = `Number of vowel  Your name is : ${countvowel}`;
}
