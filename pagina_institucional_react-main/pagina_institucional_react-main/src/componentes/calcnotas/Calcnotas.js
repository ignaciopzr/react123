import './Calcnotas.css'

function Calcnotas() {
	function calculate() {
		var q1 = document.getElementById("q1").value;
		var q2 = document.getElementById("q2").value;
		var q3 = document.getElementById("q3").value;
		var q4 = document.getElementById("q4").value;

		if (q1 === "") {
			alert("Debe llenar al menos 2 campos");
			return;
		}

		if (q4 === "") {
			q4 = "0";
			if (q3 === "") {
				q3 = "0";
			}
		}

		var result = (parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4)) / 4;

		document.getElementById("result").value = result.toFixed(1);

		var message = document.getElementById("message");

		if (result >= 0.1 && result < 2) {
			message.innerHTML = "Necesitas mejorar";
		} else if (result >= 2 && result < 3) {
			message.innerHTML = "Te falta poco";
		} else if (result >= 3 && result < 4) {
			message.innerHTML = "Lo ganaste pero debes mejorar";
		} else if (result >= 4 && result < 5) {
			message.innerHTML = "Lo hiciste muy bien";
		} else if (result == 5) {
			message.innerHTML = "Felicitaciones, lo hiciste PERFECTO";
		} else {
			message.innerHTML = "Perdiste la asignatura";
		}
	}

	function limpiar() {
		document.getElementById("q1").value = "";
		document.getElementById("q2").value = "";
		document.getElementById("q3").value = "";
		document.getElementById("q4").value = "";
		document.getElementById("result").value = "";
		document.getElementById("message").innerHTML = "";
	}

	return (
		<div className="calculadora-nota">
			<h2 id="titulocalc">Calculadora de Nota Definitiva</h2>
			<div id="input-container">
				<label id="label-notas" htmlFor="q1">Nota 1:</label>
				<input type="number" id="q1" min="0" max="5"></input>
			</div>
			<div id="input-container">
				<label id="label-notas" htmlFor="q2">Nota 2:</label>
				<input type="number" id="q2" min="0" max="5"></input>
			</div>
			<div id="input-container">
				<label id="label-notas" htmlFor="q3">Nota 3:</label>
				<input type="number" id="q3" min="0" max="5"></input>
			</div>
			<div id="input-container">
				<label id="label-notas" htmlFor="q4">Nota 4:</label>
				<input type="number" id="q4" min="0" max="5"></input>
			</div>
			<button id="calculadoranotas" data-testid="calcular-button" onClick={calculate}>Calcular Nota Definitiva</button>
			<div id="output-container">
				<label id="label-notas" htmlFor="result">Nota Definitiva:</label>
				<input type="number" id="result" disabled></input>
				<div id="message"></div>
			</div>
			<button id="limpiar" onClick={limpiar}>Limpiar</button>
		</div>
	);
}

export default Calcnotas;