let inp = document.querySelector('.inputF input')
let btn = document.querySelector('.inputF button')
let outTxt = document.querySelector(".out")
let out = "The DeCoded Txt"
btn.onclick = ()=>{
    if(inp.value.trim() != ""){
        out = ""
        outTxt.innerHTML = out
        for (let i = 0; i < inp.value.length; i++) {
            if(inp.value[i] == " "){
                out+=" "
            }
            if(inp.value[i] == "."){
                out+="ز"
            }
            if(inp.value[i] == "a"){
                out+="ش"
            }if(inp.value[i] == "s"){
                out+="س"
            }if(inp.value[i] == "d"){
                out+="ي"
            }if(inp.value[i] == "f"){
                out+="ب"
            }if(inp.value[i] == "g"){
                out+="ل"
            }if(inp.value[i] == "h"){
                out+="ا"
            }if(inp.value[i] == "j"){
                out+="ت"
            }if(inp.value[i] == "k"){
                out+="ن"
            }if(inp.value[i] == "l"){
                out+="م"
            }if(inp.value[i] == ";"){
                out+="ك"
            }if(inp.value[i] == "'"){
                out+="ط"
            }if(inp.value[i] == "q"){
                out+="ض"
            }if(inp.value[i] == "w"){
                out+="ص"
            }if(inp.value[i] == "e"){
                out+="ث"
            }if(inp.value[i] == "r"){
                out+="ق"
            }if(inp.value[i] == "t"){
                out+="ف"
            }if(inp.value[i] == "y"){
                out+="غ"
            }if(inp.value[i] == "u"){
                out+="ع"
            }if(inp.value[i] == "i"){
                out+="ه"
            }if(inp.value[i] == "o"){
                out+="خ"
            }if(inp.value[i] == "p"){
                out+="ح"
            }if(inp.value[i] == "["){
                out+="ج"
            }if(inp.value[i] == "]"){
                out+="د"
            }if(inp.value[i] == "z"){
                out+="ئ"
            }if(inp.value[i] == "x"){
                out+="ء"
            }if(inp.value[i] == "c"){
                out+="ؤ"
            }if(inp.value[i] == "v"){
                out+="ر"
            }if(inp.value[i] == "b"){
                out+="لا"
            }if(inp.value[i] == "n"){
                out+="ى"
            }if(inp.value[i] == "m"){
                out+="ة"
            }if(inp.value[i] == ","){
                out+="و"
            }if(inp.value[i] == "/"){
                out+="ظ"
            }
        }
    }
    outTxt.innerHTML = out
    inp.value = ""
}
