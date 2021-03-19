$(function(){
    /* 
    Snack 1
    
    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */


    //1° Snack

    console.log(`PRIMO SNACK ( ESERCIIO BICI )
                `);

    let bici = [
        {
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
        if( bici[i].peso  < minBici.peso){
            minBici = bici[i];
        }
    }

    const {nome,peso} = minBici;

    console.log(`
La bici più leggera è la bici ${nome} con un peso di ${peso}`);

});