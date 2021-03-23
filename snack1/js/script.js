$(function(){
/*     Scrivere una funzione che accetti tre argomenti, un array e due numeri
     (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

    let array = [10,43,12,56,90,100,2,1,4];
    
    console.log(`Array prima del filter -->  ${array}`
                );
    // console.log( getPositionBetween( array, 0, 3) );

    let min = 2;
    let max = 6;

    const newArray = array.filter( (element,index)=>element = index >= min && index <= max);

    console.log(`Array dopo il filter --> ${newArray}`);
    //  function getPositionBetween(array, a, b){
    //      let newArray = [];
    //      let start = false;

    //     for (let i = 0; i < array.length; i++) {
    //         if( i == a ){
    //             start = true;
    //         }
    //         else if( i == b ){
    //             start = false;
    //             newArray.push( array[i] );
    //         }
    //         if( start ){
    //             newArray.push( array[i] );
    //         }
    //     }

    //     return newArray;
    //  }
});