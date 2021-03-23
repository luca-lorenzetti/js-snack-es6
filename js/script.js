$(function () {


    function genRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    // 1° Snack
    function snackBici() {
        /* 
    Snack 1
    
    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */


        //1° Snack
        console.log(`PRIMO SNACK ( ESERCIIO BICI )
    `);

        const bici = [{
                nome: "Alan",
                peso: 5000
            },
            {
                nome: "Atala",
                peso: 5500
            },
            {
                nome: "Pegoretti",
                peso: 3000
            },
            {
                nome: "Werking",
                peso: 4500
            }
        ];


        let minBici = bici[0];

        console.log(`LISTA BICI
    
    `);
        for (let i = 0; i < bici.length; i++) {
            console.log(`Nome: ${bici[i].nome} - Peso: ${bici[i].peso}`);
            if (bici[i].peso < minBici.peso) {
                minBici = bici[i];
            }
        }

        const {
            nome,
            peso
        } = minBici;

        console.log(`
La bici più leggera è la bici ${nome} con un peso di ${peso}`);
    }

    //2° Snack

    function snackCalcio(){
/*   Snack2

    Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti.
    Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

        const Squadre = [
            {
                nome: "Roma",
                punti: 0,
                falliSubiti: 0
            }, {
                nome: "Lazio",
                punti: 0,
                falliSubiti: 0
            }, {
                nome: "Milan",
                punti: 0,
                falliSubiti: 0
            }, {
                nome: "Inter",
                punti: 0,
                falliSubiti: 0
            }, {
                nome: "Torino",
                punti: 0,
                falliSubiti: 0
            }, {
                nome: "Juventus",
                punti: 0,
                falliSubiti: 0
            }
        ];

      /*   for (let i = 0; i < Squadre.length; i++) {
            Squadre[i].punti = genRandom(0,100);
            Squadre[i].falliSubiti = genRandom(20,60);
        } */

        //Nuovo array con nome e falli
    /*       const ArrayFalli = [];

        for (let i = 0; i < Squadre.length; i++) {
            const {nome,falliSubiti} = Squadre[i]; 
            ArrayFalli.push({nome,falliSubiti});
        } 
        
               console.log(`Nuovo array con solo i falli e nomi squadre
        `);

        for (const key in ArrayFalli) {
            console.log(`${ArrayFalli[key].nome} falli subiti --> ${ArrayFalli[key].falliSubiti}`); 
        }
        */

            // MAP

            const arrayWithPtAndFalli = Squadre.map((element) => {
                element.punti = genRandom(10,100);
                element.falliSubiti = genRandom(30,80);

                return element;
            });


            console.log(arrayWithPtAndFalli);

            const newArrayWithOutFalli = arrayWithPtAndFalli.map((element) => {
                element.falliSubiti = genRandom(30,80);

                let {nome, falliSubiti} = element;

                return{nome, falliSubiti};
            });

            console.log(newArrayWithOutFalli);
 
    }

    //snackBici();
    snackCalcio();
});