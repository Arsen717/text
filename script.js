function f(){
    let text = prompt("Greq text")
    let text1 = prompt("Greq text")
    let longestmatch = 0
    let longestmatchString = ''
    for(i = 0; i < text.length; i++){
        for(j = 0; j < text.length; j++){
            let match = 0
            let matchString = ''
            while(text[i + match] == text1[j + match]){
                matchString = matchString + text[i+match]
                match++
                if(!text[i+match] || !text1[j+match]){
                    break
                }
            }
            if(matchString.length > longestmatch){
                longestmatch=match
            }
            if(matchString.length > longestmatchString.length){
                longestmatchString = matchString
            }
        }
    }
    alert(longestmatchString)
}

f();