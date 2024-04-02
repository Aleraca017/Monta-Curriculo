const button_adc_xp = document.getElementById('adc_xp');
button_adc_xp.addEventListener("click",

function adicionar_xp(){

    

    var xp_geral = document.createElement('select');
    xp_geral.id = "select_xpgeral";
    
        var xp_ngeral1 = document.createElement('option');
            xp_ngeral1.id = "xpn1";
            xp_ngeral1.innerHTML = "selecione"
            xp_ngeral1.classList = ('oculta');
            xp_ngeral1.value = "1";

        var xp_ngeral2 = document.createElement('option');
            xp_ngeral2.id = "xpn2";
            xp_ngeral2.innerHTML = "1"
            xp_ngeral2.value = "2";   
            
        var xp_ngeral3 = document.createElement('option');
            xp_ngeral3.id = "xpn3";
            xp_ngeral3.innerHTML = "2"
            xp_ngeral3.value = "3";
            
        var xp_ngeral4 = document.createElement('option');
            xp_ngeral4.id = "xpn4";
            xp_ngeral4.innerHTML = "3"
            xp_ngeral4.value = "4";

        var xp_ngeral5 = document.createElement('option');
            xp_ngeral5.id = "xpn5";
            xp_ngeral5.innerHTML = "4"
            xp_ngeral5.value = "5";
        

        document.getElementById('experiencias_profissionais').appendChild(xp_geral);
        document.getElementById('select_xpgeral').appendChild(xp_ngeral1);
        document.getElementById('select_xpgeral').appendChild(xp_ngeral2);
        document.getElementById('select_xpgeral').appendChild(xp_ngeral3);
        document.getElementById('select_xpgeral').appendChild(xp_ngeral4);
        document.getElementById('select_xpgeral').appendChild(xp_ngeral5);

        adc_xp.classList.add('oculta');


       

        //inicia for 

        var xp_f1 = document.createElement('div');
                xp_f1.classList = "xp_f1";
                xp_f1.id = "xp_f";
        

        var qtd_xp = document.getElementById('select_xpgeral');
        qtd_xp.addEventListener("change", function(){

            var vxp = qtd_xp.value;

            for(var g = 1; g < vxp; g++){

                br3 = document.createElement('br');
                br3.id = "br"+g;

                var xp_c1 = document.createElement('div');
                xp_c1.classList = "xp_c1";
                xp_c1.id = "xp_c"+g;

                var label_xp_empresa = document.createElement('label');
                label_xp_empresa.classList = "label_xp_empresa";
                label_xp_empresa.id = "label_xp_empresa"+g;
                label_xp_empresa.innerHTML = ("Empresa: ")

                var xp_empresa = document.createElement('input');
                xp_empresa.type = "text";
                xp_empresa.classList = "xp_empresa";
                xp_empresa.id = "xp_empresa"+g;

                var label_xp_cargo = document.createElement('label');
                label_xp_cargo.classList = "label_xp_cargo";
                label_xp_cargo.id = "label_xp_cargo"+g;
                label_xp_cargo.innerHTML = ("Cargo: ");

                var xp_cargo = document.createElement('input');
                xp_cargo.type = "text";
                xp_cargo.classList = "xp_cargo";
                xp_cargo.id = "xp_cargo"+g;

                var label_xp_dur_de = document.createElement('label');
                label_xp_dur_de.classList = "label_xp_dur_de";
                label_xp_dur_de.id = "label_xp_dur_de"+g;
                label_xp_dur_de.innerHTML = "Duração - De: ";

                var xp_dur_de = document.createElement('input');
                xp_dur_de.type = "month";
                xp_dur_de.classList = "xp_dur_de";
                xp_dur_de.id = "xp_dur_de"+g;

                var label_xp_dur_ate = document.createElement('label');
                label_xp_dur_ate.classList = "label_xp_dur_ate";
                label_xp_dur_ate.id = "label_xp_dur_ate"+g;
                label_xp_dur_ate.innerHTML = "Até: ";

                var xp_dur_ate = document.createElement('input');
                xp_dur_ate.type = "month";
                xp_dur_ate.classList = "xp_dur_ate";
                xp_dur_ate.id = "xp_dur_ate"+g;

                var label_ematividade = document.createElement('label');
                label_ematividade.innerHTML = "Em-atividade";
                label_ematividade.htmlFor = "ematividade"+g;
                label_ematividade.id = "label_ematividade"+g;

                var ematividade = document.createElement('input');
                ematividade.type = "checkbox";
                ematividade.classList = "ematividade_check";
                ematividade.id = "ematividade"+g;

                document.getElementById('experiencias_profissionais').appendChild(xp_f1);
                document.getElementById('xp_f').appendChild(xp_c1) + document.getElementById('xp_c'+g).appendChild(br3);
                document.getElementById('xp_c'+g).appendChild(label_xp_empresa);
                document.getElementById('label_xp_empresa'+g).appendChild(xp_empresa);
                document.getElementById('xp_c'+g).appendChild(label_xp_cargo);
                document.getElementById('label_xp_cargo'+g).appendChild(xp_cargo);
                document.getElementById('xp_c'+g).appendChild(label_xp_dur_de);
                document.getElementById('label_xp_dur_de'+g).appendChild(xp_dur_de);
                document.getElementById('label_xp_dur_de'+g).appendChild(label_xp_dur_ate);
                document.getElementById('label_xp_dur_ate'+g).appendChild(xp_dur_ate);
                document.getElementById('xp_c'+g).appendChild(label_ematividade);
                document.getElementById('label_ematividade'+g).appendChild(ematividade);

                

                
                

                
}//finaliza for
            select_xpgeral.remove();

            var exclui_xp = document.createElement('button');
            exclui_xp.type = "button";
            exclui_xp.id = "excluixp";
            exclui_xp.innerHTML = "Resetar Experiencias";
    
            document.getElementById('xp_f').appendChild(exclui_xp);

            var geral_ex_xp = document.getElementById('excluixp');
                geral_ex_xp.addEventListener("click", function(){
                
                const exxp = document.getElementById('xp_f')
                exxp.remove();

                adc_xp.classList.remove('oculta');

            })


        })
        

    }
)
