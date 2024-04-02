var button_troca_tema = document.getElementById("tema");

var button_troca_tema2 = document.getElementById("tema");
button_troca_tema2.addEventListener("click", function(){
    
    if(button_troca_tema.checked)
        document.getElementById('css1').setAttribute("href", "light_classes.css") + 
        document.getElementById('css2').setAttribute("href", "light_webkit.css") + 
        document.getElementById('css3').setAttribute("href", "light_tags_diretas.css") + 
        document.getElementById('css4').setAttribute("href", "light_ids.css") +
        document.getElementById('div2').setAttribute("class", "ex1")+
        document.getElementById('icon').setAttribute("class", "sun")+
        document.getElementById('id1').setAttribute("class", "id1");
        

    else
        document.getElementById('css1').setAttribute("href", "dark_classes.css") +
        document.getElementById('css2').setAttribute("href", "dark_webkit.css") +
        document.getElementById('css3').setAttribute("href", "dark_tags_diretas.css") +
        document.getElementById('css4').setAttribute("href", "dark_ids.css") +
        document.getElementById('div2').setAttribute("class", "ex2")+
        document.getElementById('icon').setAttribute("class", "moon")+
        document.getElementById('id1').setAttribute("class", "id2");
})

