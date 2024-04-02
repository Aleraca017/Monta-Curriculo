


const button = document.getElementById('botao');
button.addEventListener("click", function a(e){


    //dados pessoais
    let name = document.querySelector("#nome");
    let civil = document.querySelector("#estadoc");
    let nacio = document.querySelector("#nacionalidade");
    let nascimento = document.querySelector("#nascimento");
    let nascimentov = nascimento.value;
    let nascimentov_br = nascimentov.split('-').reverse().join('/');
    let end_rua = document.querySelector("#rua");
    let end_bairro = document.querySelector("#bairro");
    let end_cep = document.querySelector("#cep");
    let end_cidade = document.querySelector("#city");
    let telefone = document.querySelector("#tel");
    let email = document.querySelector("#email");

    //dados de formação
    let formacao = document.querySelector("#formacao");
    let escola =  document.querySelector("#escola");
    let anoc = document.querySelector("#anoc");

    //Cursos extracurriculares
    let curso1 = document.querySelector("#nome_curso1");
    let instituicao1 = document.querySelector("#inst1");
    let duracao1 = document.querySelector("#dur_de_cursos1");
    let duracao1a = document.querySelector("#dur_ate_cursos1");
    let exmedia1 = document.querySelector("#media1");

    let curso2 = document.querySelector("#nome_curso2");
    let instituicao2 = document.querySelector("#inst2");
    let duracao2 = document.querySelector("#dur_de_cursos2");
    let duracao2a = document.querySelector("#dur_ate_cursos2");
    let exmedia2 = document.querySelector("#media2")

    let curso3 = document.querySelector("#nome_curso3");
    let instituicao3 = document.querySelector("#inst3");
    let duracao3 = document.querySelector("#dur_de_cursos3");
    let duracao3a = document.querySelector("#dur_ate_cursos3");
    let exmedia3 = document.querySelector("#media3");

    let curso4 = document.querySelector("#nome_curso4");
    let instituicao4 = document.querySelector("#inst4");
    let duracao4 = document.querySelector("#dur_de_cursos4");
    let duracao4a = document.querySelector("#dur_ate_cursos4");
    let exmedia4 = document.querySelector("#media4");

    let curso5 = document.querySelector("#nome_curso5");
    let instituicao5 = document.querySelector("#inst5");
    let duracao5 = document.querySelector("#dur_de_cursos5");
    let duracao5a = document.querySelector("#dur_ate_cursos5");
    let exmedia5 = document.querySelector("#media5");

    //Habiliaddes
    let habilidades = document.querySelector("#habilidades");

    //Experiencias Profissionais
    let empresa1 = document.querySelector("#xp_empresa1");
    let cargo1 =  document.querySelector("#xp_cargo1");
    let tempo1de = document.querySelector("#xp_dur_de1");
    let tempo1ate = document.querySelector("#xp_dur_ate1");
    let catividade = document.querySelector("#ematividade1");

    let empresa2 = document.querySelector("#xp_empresa2");
    let cargo2 = document.querySelector("#xp_cargo2");
    let tempo2de = document.querySelector("#xp_dur_de2");
    let tempo2ate = document.querySelector("#xp_dur_ate2");
    let catividade2 = document.querySelector("#ematividade2")

    let empresa3 = document.querySelector("#xp_empresa3");
    let cargo3 = document.querySelector("#xp_cargo3");
    let tempo3de = document.querySelector("#xp_dur_de3");
    let tempo3ate = document.querySelector("#xp_dur_ate3");
    let catividade3 = document.querySelector("#ematividade3")

    let empresa4 = document.querySelector("#xp_empresa4");
    let cargo4 = document.querySelector("#xp_cargo4");
    let tempo4de = document.querySelector("#xp_dur_de4");
    let tempo4ate = document.querySelector("#xp_dur_ate4");
    let catividade4 = document.querySelector("#ematividade4")

    //Observações
    let obs = document.querySelector("#obs");

    if((name.value && civil.value && nacio.value && nascimento.value && end_rua && end_bairro.value && end_cidade.value && telefone.value && email.value && formacao.value && escola.value && anoc.value) == false) callback();
    else
    

    document.write(
        //abertura dos dados importantes
        "<link rel='stylesheet'  href='css/theme/light/final.css' type='text/css'>",
        "<title>Curriculo</title>",
        "<div class='geral'>",
        "<div class='titulo'> <b>",name.value,"</b> </div>",
        "<br/><br/>",
        "<b>Dados Pessoais</b>", "<hr/>",
        "Estado Civil: ",civil.value, "<br/>", 
        "Nacionalidade: ",nacio.value, "<br/>", 
        "Data de nascimento: ",nascimentov_br, "<br/>",
        "Endereço: ",end_rua.value, ", ",end_bairro.value, " — ",end_cep.value, "<br/>",
        "Cidade: ",end_cidade.value, "<br/>",
        "Telefone: ",telefone.value, "<br/>",
        "E-mail: ",email.value, " ",
        "<br/><br/>",
        "<b>Formação</b> <hr/>",formacao.value, "<br/>",
        "Escola: ",escola.value, "<br/>",
        "Ano de conclusão: ",anoc.value, "<br/>",
        "<br/>")
        
        //fechamento dos dados importantes
        if(curso1 == null || curso1.value == "") document.write("");
        else document.write(
        "<b>Cursos Extracurriculares</b> <hr/>",
        "Curso: ",curso1.value, "<br/>",
        "Escola: ",instituicao1.value, "<br/>",
        "Duracao De: ",duracao1.value, " Até: ",duracao1a.value, "</br>");
        if((curso1 == null || curso1.value == "") && (exmedia1 == null || exmedia1.value == "")) document.write("");
        else if (exmedia1 == null || exmedia1.value == "")document.write("<br/>")
        else document.write(
        "Media: ",exmedia1.value, "<br/>",
        "<br/>");
        
        if(curso2 == null || curso2.value == "") document.write("");
        else document.write(
        "Curso: ",curso2.value, "<br/>",
        "Escola: ",instituicao2.value, "<br/>",
        "Duracao De: ",duracao2.value, " Até: ",duracao2a.value, "</br>")
        if((curso2 == null || curso2.value == "") && (exmedia2 == null || exmedia2.value == "")) document.write("");
        else if (exmedia2 == null || exmedia2.value == "")document.write("<br/>")
        else
        document.write(
        "Média: ",exmedia2.value, "<br/>",
        "<br/>");

        if(curso3 == null || curso3.value == "") document.write("");
        else document.write(
        "Curso: ",curso3.value, "<br/>",
        "Escola: ",instituicao3.value, "<br/>",
        "Duracao De: ",duracao3.value, " Até: ",duracao3a.value, "</>")
        if((curso3 == null || curso3.value == "") && (exmedia3 == null || exmedia3.value == "")) document.write("");
        else if (exmedia3 == null || exmedia3.value == "")document.write("<br/>")
        else
        document.write(
        "Média: ",exmedia3.value, "<br/>",
        "<br/><br/>");

        if(curso4 == null || curso4.value == "") document.write("");
        else document.write(
        "Curso: ",curso4.value, "<br/>",
        "Escola: ",instituicao4.value, "<br/>",
        "Duracao De: ",duracao4.value, " Até: ",duracao4a.value, "</br>")
        if((curso4 == null || curso4.value == "") && (exmedia4 == null || exmedia4.value == "")) document.write("");
        else if (exmedia4 == null || exmedia4.value == "")document.write("<br/>")
        else
        document.write(
        "Média: ",exmedia4.value, "<br/>",
        "<br/><br/>");

        if(curso5 == null || curso5.value == "") document.write("");
        else document.write(
        "Curso: ",curso5.value, "<br/>",
        "Escola: ",instituicao5.value, "<br/>",
        "Duracao De: ",duracao5.value, " Até: ",duracao5a.value, "</br>");
        if((curso5 == null || curso5.value == "") && (exmedia5 == null || exmedia5.value == "")) document.write("");
        else if (exmedia5 == null || exmedia5.value == "")document.write("<br/>")
        else
        document.write(
        "Média: ",exmedia5.value, "<br/>",
        "<br/><br/>");
        
        if(habilidades.value == "")document.write("");
        else document.write(
        "<b>Habilidades</b> <hr/>",
        habilidades.value, " ",
        "<br/><br/>",
        );

        if(empresa1 == null || empresa1.value == "") document.write("");
        else document.write(
        "<b>Experiencias Profissionais</b>",
        "<hr/>",
        "Empresa: ",empresa1.value, "<br/>",
        "Cargo: ",cargo1.value, "<br/>",
        "Tempo de serviço: De ",tempo1de.value.split('-').reverse().join('/'), " ") 
        if(catividade == null || empresa1 == null || empresa1.value == "") document.write("");
        else if(catividade.checked)document.write(", em atividade <br/><br/>");
        else document.write("Até: ",tempo1ate.value.split('-').reverse().join('/'),
        "<br/><br/>");

        if(empresa2 == null || empresa2.value == "")document.write("");
        else document.write(
        "Empresa: ",empresa2.value, "<br/>",
        "Cargo: ",cargo2.value, "<br/>",
        "Tempo de serviço: De ",tempo2de.value.split('-').reverse().join('/'))
        if(catividade2 == null || empresa2 == null || empresa2.value == "" ) document.write("");
        else if(catividade2.checked)document.write(", em atividade <br/><br/>")
        else document.write("Até: ",tempo2ate.value.split('-').reverse().join('/'),
        "<br/><br/>");


        if(empresa3 == null || empresa3.value == "") document.write("");
        else document.write(
        "Empresa: ",empresa3.value, "<br/>",
        "Cargo: ",cargo3.value, "<br/>",
        "Tempo de serviço: De ",tempo3de.value.split('-').reverse().join('/'))
        if(catividade3 == null || empresa3 == null || empresa3.value == "") document.write("");
        else if(catividade3.checked)document.write(", em atividade <br/><br/>")
        else document.write("Até: ",tempo3ate.value.split('-').reverse().join('/'),
        "<br/><br/>");

        if(empresa4 == null || empresa4.value == "") document.write("");
        else document.write(
        "Empresa: ",empresa4.value, "<br/>",
        "Cargo: ",cargo4.value, "<br/>",
        "Tempo de serviço: De: ",tempo4de.value.split('-').reverse().join('/'))
        if(catividade4 == null || empresa4 == null || empresa4.value == "") document.write("");
        else if(catividade4.checked)document.write(", em atividade <br/><br/>")
        else document.write("Até: ",tempo4ate.value.split('-').reverse().join('/'),
        "<br/><br/>");

        if(obs.value == "") document.write("");
        else document.write(
        "<b>Observações:</b>", "<hr/>",
        obs.value,)

        document.write(

        "<input type='button' value='Imprimir' class='noprint' onClick='window.print()'/>",

        "</div>"
        );
        


    }

)


