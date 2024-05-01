//desafio classificador de nível do herói
//definindo a variável nome e experiência do herói
let nickDoHeroi = "BatatinhaFrita123"
let expDoHeroi = 5300

//determinado a quantidade de experiência do herói, vamos checar em qual nível nosso herói está, utilizando estrutura de decisão
let nivel;
    switch (true) {
        case (expDoHeroi < 1000):
            nivel = "Ferro";
            break
        
        case (expDoHeroi >= 1001 && expDoHeroi <= 2000):
            nivel = "Bronze";
            break
        
        case (expDoHeroi >= 2001 && expDoHeroi <= 5000):
            nivel = "Prata";
            break
        
        case (expDoHeroi >= 5001 && expDoHeroi <= 7000):
            nivel = "Ouro";
            break
        
        case (expDoHeroi >= 7001 && expDoHeroi <= 8000):
            nivel = "Platina";
            break

        case (expDoHeroi >= 8001 && expDoHeroi <= 9000):
            nivel = "Ascendente";
            break
        
        case (expDoHeroi >=9001 && expDoHeroi <=10000):
            nivel: "Imortal";
            break
        
        default:
            nivel = "Radiante";
    }

//exibindo a mensagem
    console.log("O herói de nome " + nickDoHeroi +" está no nível " + nivel)