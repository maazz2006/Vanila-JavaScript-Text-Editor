 let optionButs = document.querySelectorAll('.option-button');
 let advOptionButs = document.querySelectorAll('.adv-option-button');
 let fontName = document.getElementById('fontName');
 let fontSize = document.getElementById('fontSize');
 let writtingArea = document.getElementById('text-input');
 let linkbuts = document.getElementById('createLink');
 let alignButs = document.querySelectorAll('.align');
 let spacingButs = document.querySelectorAll('.spacing');
 let scriptButs = document.querySelectorAll('.script');
 let formatButs = document.querySelectorAll('.format');

 let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];
 
 const initializor=()=>{
    highlighter(alignButs,true);
    highlighter(spacingButs,true);
    highlighter(formatButs,false);
    highlighter(scriptButs,true);

    fontList.map((value)=>{
        let option = document.createElement('option');
        option.value=value;
        option.innerHTML=value;
        fontName.appendChild(option);
    })

    for (let i = 1; i <= 7; i++) {
        let fontValue = document.createElement('option');
        fontValue.value = i;
        fontValue.innerHTML=i;
        fontSize.appendChild(fontValue);

        
    }
    fontSize.value = 3;
};

 

const modifyText = (commad,defaultUi,value)=>{
    document.execCommand(commad,defaultUi, value);
}

advOptionButs.forEach((button) => {
    button.addEventListener(('change'), () => {
        modifyText(button.id, false, button.value);
    });
});



optionButs.forEach((button) => {
    button.addEventListener(('click'),() => {
        modifyText(button.id, false, null);

    });

});




const highlighter = (className,needRemoval)=>{
    className.forEach((button) => {
        
            button.addEventListener("click",()=>{
            if(needRemoval){
                let activeCheck=false;
                if(button.classList.contains('active')){
                    activeCheck=true;
                }
                highlighterRemover(className);

                if(!activeCheck){
                    button.classList.add('active');
                }

            }else{
                button.classList.toggle('active');
            }
        });
        
        
    });
    
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove('acitve');
    });

};

window.onload=initializor();
