button_adc_cursos = document.getElementById("adc_cursos");
button_adc_cursos.addEventListener("click",

function adicionar_cursos(){

    var br = document.createElement('br');

    var adc_geral = document.createElement('select');
    adc_geral.id = "select_cgeral";
    var adc_ngeral = document.createElement('option');
    adc_ngeral.id = "sn1";
    adc_ngeral.innerHTML = "Selecione";
    adc_ngeral.classList = ('oculta');
    adc_ngeral.value = "1";
    var adc_ngeral2 = document.createElement('option');
    adc_ngeral2.id = "sn2";
    adc_ngeral2.innerHTML = ('1');
    adc_ngeral2.value = "2";
    var adc_ngeral3 = document.createElement('option');
    adc_ngeral3.id = "sn3";
    adc_ngeral3.innerHTML = ('2');
    adc_ngeral3.value = "3";
    var adc_ngeral4 = document.createElement('option');
    adc_ngeral4.id = "sn4";
    adc_ngeral4.innerHTML = ('3');
    adc_ngeral4.value = "4";
    var adc_ngeral5 = document.createElement('option');
    adc_ngeral5.id = "sn5";
    adc_ngeral5.innerHTML = ('4');
    adc_ngeral5.value = "5";
    var adc_ngeral6 = document.createElement('option');
    adc_ngeral6.id = "sn6";
    adc_ngeral6.innerHTML = ('5');
    adc_ngeral6.value = "6";

    

    document.getElementById('cursos_extras').appendChild(adc_geral);
    document.getElementById('select_cgeral').appendChild(adc_ngeral);
    document.getElementById('select_cgeral').appendChild(adc_ngeral2);
    document.getElementById('select_cgeral').appendChild(adc_ngeral3);
    document.getElementById('select_cgeral').appendChild(adc_ngeral4);
    document.getElementById('select_cgeral').appendChild(adc_ngeral5);
    document.getElementById('select_cgeral').appendChild(adc_ngeral6);
    document.getElementById('cursos_extras').appendChild(br);

    var qtd_cursos = document.getElementById('select_cgeral');

    qtd_cursos.addEventListener("change", function(){

        var cursos_f1 = document.createElement('div');
        cursos_f1.classList = "cursos_f1";
        cursos_f1.id = "cursos_f";

        var vqtd = qtd_cursos.value;

        for(var i = 1; i < vqtd; i++){

        br2 = document.createElement('br');
        br2.id = "br"+i;

        var cursos_c1 = document.createElement('div');
        cursos_c1.classList = "cursos_c1";
        cursos_c1.id = "cursos_c"+i;

        var label_nome_cursos = document.createElement('label');
        label_nome_cursos.classList = "label_nome_cursos";
        label_nome_cursos.id = "label_nome_cursos"+i;
        label_nome_cursos.innerHTML = ("Curso: ");

        var nome_cursos = document.createElement('input');
        nome_cursos.type = "text";
        nome_cursos.classList = "nomme_curso";
        nome_cursos.id = "nome_curso"+i;

        var label_inst = document.createElement('label');
        label_inst.classList = "label_inst";
        label_inst.id = "label_inst"+i;
        label_inst.innerHTML = ("Instituição: ");

        var nome_inst =  document.createElement('input');
        nome_inst.type = "text";
        nome_inst.classList = "instituicao";
        nome_inst.id = "inst"+i;

        var label_dur_de_cursos = document.createElement('label');
        label_dur_de_cursos.classList = "label_dur_de_cursos";
        label_dur_de_cursos.id = "label_dur_de_cursos"+i;
        label_dur_de_cursos.innerHTML = "Duração De:"

        var dur_de_cursos = document.createElement('input');
        dur_de_cursos.type = "month";
        dur_de_cursos.classList = "dur_de_cursos";
        dur_de_cursos.id = "dur_de_cursos"+i;

        var label_dur_ate_cursos = document.createElement('label');
        label_dur_ate_cursos.classList = "label_dur_ate_cursos";
        label_dur_ate_cursos.id = "label_dur_ate_cursos"+i;
        label_dur_ate_cursos.innerHTML = "Até: ";

        var dur_ate_cursos = document.createElement('input');
        dur_ate_cursos.type = "month";
        dur_ate_cursos.classList = "dur_ate_cursos";
        dur_ate_cursos.id = "dur_ate_cursos"+i;

        var label_switch = document.createElement('label');
        label_switch.id = "label_switch"+i;
        label_switch.innerHTML = "Colocar média de nota?";

        var se_media = document.createElement('select');
        se_media.id = "switch_media"+i;

        var se_media_sim = document.createElement('option');
        se_media_sim.id = "media_sim"+i;
        se_media_sim.value = "Não";
        se_media_sim.innerText = ('Não');

        var se_media_nao = document.createElement('option');
        se_media_nao.id = "media_nao"+i;
        se_media_nao.value = "Sim";
        se_media_nao.innerText = ('Sim');

        var label_media_geral = document.createElement('label');
        label_media_geral.id = "label_media_geral"+i;
        label_media_geral.innerHTML = "Média: ";
        label_media_geral.classList = "auto";

        var media_geral = document.createElement('input');
        media_geral.type = "text";
        media_geral.maxLength = "4";
        media_geral.id = "media"+i;
        media_geral.classList = "oculta";
        
        

        document.getElementById('cursos_extras').appendChild(cursos_f1);
        document.getElementById('cursos_f').appendChild(cursos_c1) + document.getElementById('cursos_c'+i).appendChild(br2);
        document.getElementById('cursos_c'+i).appendChild(label_nome_cursos);
        document.getElementById('label_nome_cursos'+i).appendChild(nome_cursos);
        document.getElementById('cursos_c'+i).appendChild(label_inst);
        document.getElementById('label_inst'+i).appendChild(nome_inst);
        document.getElementById('cursos_c'+i).appendChild(label_dur_de_cursos);
        document.getElementById('label_dur_de_cursos'+i).appendChild(dur_de_cursos);
        document.getElementById('label_dur_de_cursos'+i).appendChild(label_dur_ate_cursos);
        document.getElementById('label_dur_ate_cursos'+i).appendChild(dur_ate_cursos);
        document.getElementById('cursos_c'+i).appendChild(label_switch);
        document.getElementById('label_switch'+i).appendChild(se_media);
        document.getElementById('switch_media'+i).appendChild(se_media_sim);
        document.getElementById('switch_media'+i).appendChild(se_media_nao);
        document.getElementById('cursos_c'+i).appendChild(label_media_geral);
        document.getElementById('cursos_c'+i).appendChild(media_geral);


        

}   
        qtd_cursos.remove();
        


        var exclui_cursos = document.createElement('button');
        exclui_cursos.type = "button";
        exclui_cursos.id = "excluic";
        exclui_cursos.innerHTML = "Resetar Cursos";

        document.getElementById('cursos_f').appendChild(exclui_cursos);

        var geral_exclui = document.getElementById('excluic');
        geral_exclui.addEventListener("click", function(){
            
            const exc1 = document.getElementById('cursos_f');
            exc1.remove();

            adc_cursos.classList.remove('oculta');


        })

        

//-------------inicia funcao para comparar switches*************************************************************

        var nota1 = document.getElementById('switch_media1');
                nota1.addEventListener("change", function(){
        
            var nota1v = nota1.value;
        
            if(nota1v == "Não") label_media_geral1.classList.add('auto') + media1.classList.add('oculta');
            else label_media_geral1.classList.remove('auto') + media1.classList.remove('oculta');
        });

            var nota2 = document.getElementById('switch_media2');
                nota2.addEventListener("change", function(){
        
            var nota2v = nota2.value;
        
            if(nota2v == "Não") label_media_geral2.classList.add('auto') + media2.classList.add('oculta');
            else label_media_geral2.classList.remove('auto') + media2.classList.remove('oculta');
            
        });

        var nota3 = document.getElementById('switch_media3');
        nota3.addEventListener("change", function(){

            var nota3v = nota3.value;
        
            if(nota3v == "Não") label_media_geral3.classList.add('auto') + media3.classList.add('oculta');
            else label_media_geral3.classList.remove('auto') + media3.classList.remove('oculta');
        });

        var nota4 = document.getElementById('switch_media4');
        nota4.addEventListener("change", function(){

            var nota4v = nota4.value;
        
            if(nota4v == "Não") label_media_geral4.classList.add('auto') + media4.classList.add('oculta');
            else label_media_geral4.classList.remove('auto') + media4.classList.remove('oculta');
        });

        var nota5 = document.getElementById('switch_media5');
        nota5.addEventListener("change", function(){

            var nota5v = nota5.value;
        
            if(nota5v == "Não") label_media_geral5.classList.add('auto') + media5.classList.add('oculta');
            else label_media_geral5.classList.remove('auto') + media5.classList.remove('oculta');
        });

//--------------finaliza funcao de comparacao-------------------------------------------------
        

    }   )

    adc_cursos.classList.add('oculta');

    

}

)