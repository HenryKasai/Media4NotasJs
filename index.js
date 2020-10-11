alert("Insira as 4 notas que serão avaliadas");
let notaum = prompt("Nota 1:");
let notadois = prompt("Nota 2:");
let notatres = prompt("Nota 3:");
let notaquatro = prompt("Nota 4:");
if (notaum == null || notadois == null || notatres == null || notaquatro == null) {
    alert("Insira um valor válido");
} else if (notaum <= 10 && notaum >= 0 && notadois <= 10 && notadois >= 0 && notatres <= 10 && notatres >= 0 && notaquatro <= 10 && notaquatro >= 0) {
    let resultado = (Number(notaum) + Number(notadois) + Number(notatres) + Number(notaquatro)) / 4;
    if (resultado < 5) {
        alert(`Você ficou com média ${resultado}. Resultado: Reprovado.`);
    } if (resultado >= 5 && resultado <= 6) {
        alert(`Você ficou com média ${resultado}. Resultado: Em recuperação.`);
    } if (resultado > 6) {
        alert(`Você ficou com média ${resultado}. Resultado: Aprovado.`);
    }
} else {
    alert("Digite valores entre 0 e 10");
}
