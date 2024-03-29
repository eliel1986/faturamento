const form = document.querySelector("#form");
const dens_orig = document.querySelector("#dens_orig");
const dens_dest = document.querySelector("#dens_dest");
const peso_orig = document.querySelector("#peso_orig");
const peso_dest = document.querySelector("#peso_dest");
const vol_dren = document.querySelector("#vol_dren");
const vol_vinte_ori = document.querySelector("#vol_vinte_origem");

const calcular = () => {

    document.getElementById("formulario_principal").style.display = "none";
    document.getElementById("resposta").style.display = "block";

    const densOrig = document.getElementById('dens_orig').value;
	const densDest = document.getElementById('dens_dest').value;
	const pesoOrig = document.getElementById('peso_orig').value;
	const pesoDest = document.getElementById('peso_dest').value;
    const volDren = document.getElementById('vol_dren').value;
    const volVinteOrig = document.getElementById('vol_vinte_origem').value;

    document.getElementById('vol_vint_orig').value = `${volVinteOrig} litros`;

    	const pesoDest_densDest = (pesoDest / densDest).toFixed(0);		
		document.getElementById('pDest_dDest').value = `${pesoDest_densDest} litros`;

		const pesoDest_densOrig = (pesoDest / densOrig).toFixed(0);		
		document.getElementById('pDest_dOrig').value = `${pesoDest_densOrig} litros`;

		const dif_Dens = (pesoDest_densDest - pesoDest_densOrig).toFixed(0);
		if (dif_Dens < 0) {
			document.getElementById('dif_Dens').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('dif_Dens').style.backgroundColor = 'green';
		}
		document.getElementById('dif_Dens').value = `${dif_Dens} litros`;

		const difPesos = (pesoDest - pesoOrig).toFixed(0);
		document.getElementById('pDest_pOrig').value = `${difPesos} Kilos`;
		if (difPesos < 0) {
			document.getElementById('pDest_pOrig').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('pDest_pOrig').style.backgroundColor = 'green';
		}

		const difPesosdensDest = (difPesos / densDest).toFixed(0);
		document.getElementById('dif_Peso').value = `${difPesosdensDest} litros`;
		if (difPesosdensDest < 0) {
			document.getElementById('dif_Peso').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('dif_Peso').style.backgroundColor = 'green';
		}

		const apurado = Number(dif_Dens) + Number(difPesosdensDest) + Number(volDren);
		document.getElementById('result').value = `${apurado} litros`;
		if (apurado <= 0) {
			document.getElementById('result').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('result').style.backgroundColor = 'green';
		}

        const perc = ((apurado / volVinteOrig) * 100 ).toFixed(2);
        document.getElementById('percent').value = `${perc} %`;

        if (perc >= -0.4 && perc <= 0.4) {
            document.getElementById("inform").style.backgroundColor = "green";
            document.getElementById("inform").value = "LIBERADO";
        } else {
            document.getElementById("inform").style.backgroundColor = "red";
            document.getElementById("inform").value = "CONTRA PROVA";
        }

    
	}




// function geraErroNaDensidade() {
//     dens_orig.style.backgroundColor = 'red'
//     dens_orig.focus();

//     dens_dest.style.backgroundColor = 'red'
//     dens_dest.focus();
// }

// function verificarDensidade(densidade) {
//     dens_orig.style.backgroundColor = 'white'
//     dens_dest.style.backgroundColor = 'white'

//     if (!densidade) return;

//     if (!densidade.includes('.')) {
//         dens_orig.value = `.${densidade}`;
//         dens_dest.value = `.${densidade}`;
//         return;
//     }

//     const primeiraLetra = densidade.charAt(0);

//     if (primeiraLetra === '0') {
//         const segundaLetra = densidade.charAt(1);

//         if (segundaLetra !== '.') {
//             geraErroNaDensidade();
//             return;
//         }
//     }

//     if (primeiraLetra !== '.') {
//         geraErroNaDensidade();
//         return;
//     }
// }

// function removePonto(input) {
//     const valor = input.value;

//     if (valor.includes('.')) {
//         input.value = valor.replace('.', '')
//     }
// }

// dens_orig.addEventListener('blur', (e) => {
//     verificarDensidade(e.target.value);
// })

// dens_dest.addEventListener('blur', (e) => {
//     verificarDensidade(e.target.value);
// })

// peso_orig.addEventListener('blur', () => {
//     removePonto(peso_orig);
// })

// peso_dest.addEventListener('blur', () => {
//     removePonto(peso_dest);
// })

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const densOrig = dens_orig.value;
    const densDest = dens_dest.value;
    const pesoOrig = peso_orig.value;
    const pesoDest = peso_dest.value;

    if (densOrig && densDest && pesoOrig && pesoDest) {
        calcular();
    }
});