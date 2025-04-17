function validarForm(){

    //Pegar dados
    const nome = document.getElementById('nomeCliente').value.trim();
    console.log(nome);

    const cpf = document.getElementById('cpfCliente').value.trim();
    console.log(cpf);

    const idade = parseInt(document.getElementById('idadeCliente').value, 10);
    console.log(idade);

    const dataNascimento = document.getElementById('dataNascimentoCliente').value.trim();
    console.log(dataNascimento);
     

    const endereco = document.getElementById('enderecoCliente').value.trim();
    console.log(endereco);

    const genero = document.getElementById('generoCliente').value.trim();
    console.log(genero);

    const contatoPessoal = document.getElementById('contatoPessoalCliente').value.trim();
    console.log(contatoPessoal);

    const estado = document.getElementById('estadoCliente').value.trim();
    console.log(estado);

    const sabendo = document.getElementById('sabendoCliente').value.trim();
    console.log(sabendo);

    const jaVeio = document.getElementById('jaVeioCliente').value.trim();
    console.log(jaVeio);

    const tipoAnimal = document.getElementById('tipoAnimalCliente').value.trim();
    console.log(tipoAnimal);

    const racaAnimal = document.getElementById('racaAnimalCliente').value.trim();
    console.log(racaAnimal);

    const idadeAnimal = parseInt(document.getElementById('idadeAnimalCliente').value, 10);
    console.log(idadeAnimal);

    const dataNascimentoAnimal = document.getElementById('dataNascimentoAnimalCliente').value.trim();
    console.log(dataNascimentoAnimal);
   

    const vacinaAnimal = document.getElementById('vacinaAnimalCliente').value.trim();
    console.log(vacinaAnimal);

    const alergiaAnimal = document.getElementById('alergiaAnimalCliente').value.trim();
    console.log(alergiaAnimal);

    const pesoAnimal = parseFloat(document.getElementById('pesoAnimalCliente').value, 10);
    console.log(pesoAnimal);

    const alturaAnimal =parseFloat(document.getElementById('alturaAnimalCliente').value, 10);
    console.log(alturaAnimal);

    const corPeloAnimal = document.getElementById('corPeloAnimalCliente').value.trim();
    console.log(corPeloAnimal);

    const corOlhoAnimal = document.getElementById('corOlhoAnimalCliente').value.trim();
    console.log(corOlhoAnimal);

    const motivo = document.getElementById('motivoAnimalCliente').value.trim();
    console.log(motivo);

    const brinquedoAnimal = document.getElementById('brinquedoAnimalCliente').value.trim();
    console.log(brinquedoAnimal);

    const seDaBemAnimal = document.getElementById('seDaBemAnimalCliente').value.trim();
    console.log(seDaBemAnimal);

    const racaoAnimal = document.getElementById('racaoAnimalCliente').value.trim();
    console.log(racaoAnimal);

    const linguaAnimal = document.getElementById('linguaAnimalCliente').value.trim();
    console.log(linguaAnimal);


    const pulgaAnimal = document.getElementById('pulgaAnimalCliente').value.trim();
    console.log(pulgaAnimal);

    const cioAnimal = document.getElementById('cioAnimalCliente').value.trim();
    console.log(cioAnimal);

    const passeioAnimal = document.getElementById('passeioAnimalCliente').value.trim();
    console.log(passeioAnimal);

    const quemAmaAnimal = document.getElementById('quemAmaAnimalCliente').value.trim();
    console.log(quemAmaAnimal);

    const pagamentoAnimal = document.getElementById('pagamentoAnimalCliente').value.trim();
    console.log(pagamentoAnimal);

    //Processar dados

    if(!nome || ){
        alert('Preencha o nome de maneira valida.');
        return;
    } else{
        console.log(nome);
    }

    if(!cpf || cpf.length !== 11 || isNaN(cpf)){
        alert('Preencha o CPF de maneira valida.');
        return;
    } else{
        console.log(cpf);
    }

    if(!idade || isNaN(idade) || idade < 18){
        alert('Preencha a idade de maneira valida(é origatorio ser maior de idade).');
        return;
    } else{
        console.log(idade);
    }

    if(!dataNascimento){
        alert('Preencha a data de nascimento de maneira valida.');
        return;
    } else{
        console.log(dataNascimento);
}

if(!endereco){
    alert('Preencha o endereço de maneira valida.');
    return;
} else{
    console.log(endereco);
}

if(!genero){
    alert('Preencha o gênero de maneira valida.');
    return;
} else{
    console.log(genero);
}

if(!contatoPessoal){
    alert('Preencha o contato pessoal de maneira valida.');
    return;
} else{
    console.log(contatoPessoal);
}

if(!sabendo){
    alert('Preencha a parte de como ficou sabendo de nós de maneira valida.');
    return;
} else{
    console.log(sabendo);
}

if(!sabendo){
    alert('Preencha a parte de como ficou sabendo de nós de maneira valida.');
    return;
} else{
    console.log(sabendo);
}

if(!jaVeio){
    alert('Preencha a parte de se você já esteve aqui antes de maneira valida.');
    return;
} else{
    console.log(jaVeio);
}

if(!tipoAnimal){
    alert('Preencha o tipo do animal de maneira valida.');
    return;
} else{
    console.log(tipoAnimal);
}

if(!racaAnimal){
    alert('Preencha a raça do animal de maneira valida.');
    return;
} else{
    console.log(racaAnimal);
}

if(!idadeAnimal || isNaN(idadeAnimal)){
    alert('Preencha a idade do animal de maneira valida.');
    return;
} else{
    console.log(idadeAnimal);
}

if(!dataNascimentoAnimal){
    alert('Preencha a data de nascimento do animal de maneira valida.');
    return;
} else{
    console.log(dataNascimentoAnimal);
}

if(!vacinaAnimal){
    alert('Preencha a parte de vacinação do animal de maneira valida.');
    return;
} else{
    console.log(vacinaAnimal);
}

if(!alergiaAnimal){
    alert('Preencha a parte de alergia do animal de maneira valida.');
    return;
} else{
    console.log(alergiaAnimal);
}

if(!pesoAnimal || isNaN(pesoAnimal)|| pesoAnimal <= 0){
    alert('Preencha o poso do animal de maneira valida.');
    return;
} else{
    console.log(pesoAnimal);
}

if(!alturaAnimal || isNaN(alturaAnimal)|| alturaAnimal <= 0){
    alert('Preencha a altura do animal de maneira valida.');
    return;
} else{
    console.log(alturaAnimal);
}

if(!motivo){
    alert('Preencha o motivo da vinda de maneira valida.');
    return;
} else{
    console.log(motivo);
}

if(!seDaBemAnimal){
    alert('Preencha se o animal se da bem com estranhos de maneira valida.');
    return;
} else{
    console.log(seDaBemAnimal);
}

if(!racaoAnimal){
    alert('Preencha a ração do animal de maneira valida.');
    return;
} else{
    console.log(racaoAnimal);
}

if(!pulgaAnimal){
    alert('Preencha se o animal tem pulga de maneira valida.');
    return;
} else{
    console.log(pulgaAnimal);
}

if(!cioAnimal){
    alert('Preencha se o animal está no cio de maneira valida.');
    return;
} else{
    console.log(cioAnimal);
}

if(!pagamentoAnimal){
    alert('Preencha a forma de pagamento de maneira valida.');
    return;
} else{
    console.log(pagamentoAnimal);
}

alert('Formulario enviado com sucesso.')

}