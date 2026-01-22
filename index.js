//armazenar variavel
let nomeHeroi = "Malek";
let XpHeroi = 6100;
let nivelHeroi = "";

//determinar o nivel pela XpHeroi
if (XpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (XpHeroi >= 1001 && XpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (XpHeroi >= 2001 && XpHeroi <= 5000){
    nivelHeroi = "Prata";
} else if (XpHeroi >= 5001 && XpHeroi <= 7000){
    nivelHeroi = "Ouro";
} else if (XpHeroi >= 7001 && XpHeroi <= 8000){
    nivelHeroi = "Platina";
} else if (XpHeroi >= 8001 && XpHeroi <= 9000){
    nivelHeroi = "Ascedente";
} else if (XpHeroi >= 9001 && XpHeroi<= 10000){
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

//saida
console.log(`O Héroi de nome ${nomeHeroi} está no nivel ${nivelHeroi}`);