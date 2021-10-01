function maskManager(objeto, mascara) {
	objeto.value = mascara(objeto.value);
}

function maskCPF(cpf) {
	cpf = cpf.replace(/\D/g, '');
	if (cpf.length > 11) {
		cpf = cpf.substring(0, 11);
	}
	cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
	cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
	cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
	return cpf;
}

function maskTel(tel) {
	tel = tel.replace(/\D/g, '');
	tel = tel.replace(/^(\d)/, '($1');
	tel = tel.replace(/(.{3})(\d)/, '$1)$2');
	if (tel.length > 12) {
		tel = tel.replace(/(.{4})$/, '-$1');
	}
	return tel;
}

/* Validar CPF */
function _cpf(cpf) {
	cpf = cpf.replace(/[^\d]+/g, '');
	if (cpf == '') return false;
	if (
		cpf.length != 11 ||
		cpf == '00000000000' ||
		cpf == '11111111111' ||
		cpf == '22222222222' ||
		cpf == '33333333333' ||
		cpf == '44444444444' ||
		cpf == '55555555555' ||
		cpf == '66666666666' ||
		cpf == '77777777777' ||
		cpf == '88888888888' ||
		cpf == '99999999999'
	)
		return false;
	add = 0;
	for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11) rev = 0;
	if (rev != parseInt(cpf.charAt(9))) return false;
	add = 0;
	for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11) rev = 0;
	if (rev != parseInt(cpf.charAt(10))) return false;
	return true;
}

function validarCPF(el) {

	if (!_cpf(el.value)) {
		document.getElementById('cpf').style.backgroundColor = '#fcc9c9';
		el.value = '';
		el.placeholder ='CPF INVÁLIDO';
	} else {
	//	document.getElementById('cpf').style.backgroundColor = '#00ff00';
		document.getElementById('cpf').style.backgroundColor = "rgba(255, 255, 255, 0.2)";
	//	document.getElementById('cpf').classList.add("x");
	}
}

//botão Verificar
function verificar() {
    location.href="consulta.html"
    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ',' + ' Cadastro com sucesso');
    }

}




