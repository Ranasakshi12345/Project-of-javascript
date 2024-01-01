const inputColor = document.getElementById("inputColorName");
const firstColorInput = document.getElementById("color1");
const secondColorInput = document.getElementById("color2");
const colorBox = document.getElementById("resultantColorBox");
const colorName = document.getElementById
("resultantColorName");

inputColor.addEventListener("submit", function(event){
    // Page ko reload hone se rok rha h
    event.preventDefault(); 
    const firstColor = firstColorInput.value.toLowerCase();
    const secondColor = secondColorInput.value.toLowerCase();

    let mixedColor;
    switch (firstColor){
        case "red":
            switch(secondColor){
                case "blue":
                    mixedColor = "purple";
                    break;
                    case "yellow":
                        mixedColor = "orange";
                    default:
                        mixedColor = "Invalid Color Combination";
            }
            break;
            case "blue":
                switch(secondColor){
                    case "red":
                        mixedColor = "purple";
                        break;
                        case "yellow":
                            mixedColor = "green";
                            default:
                                mixedColor = "Invalid Color Combination";
                }
                break;
                case "yellow":
                    switch(secondColor){
                        case "red":
                            mixedColor = "orange";
                            break;
                            case "blue":
                                mixedColor = "green";
                                default:
                                    mixedColor = "Invalid Color Combination";
                    }
                    break;
                    default:
                        mixedColor = "Invalid Color Combination";
    }

if ( mixedColor == "invalid color combination") {
    resultantColorBox.style.backgroundColor = "white";
}
else {
    colorBox.style.backgroundColor = mixedColor;
}
colorName.textContent = mixedColor;
});