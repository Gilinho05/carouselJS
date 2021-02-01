function fTesteLista(){
    let itemLista = document.createElement('div');
    for( i = 0; i < 10; i++){
        let item = document.createElement('div');
        item.classList.add('item');
        item.setAttribute('id', i);
        item.innerHTML = "testando listagens " + i;
        console.log('fTesteLista >', item);  
        itemLista.appendChild(item)      ;
    }
    return itemLista;
}
document.getElementById('testeLista').appendChild(fTesteLista());

/******************************************************* */

function fTesteLista2(){

    let array = ['banana', 'morango', 'ananas', 'pera', 'maça'];

    let itemLista = document.createElement('div');
    for( i = 0; i < array.length; i++){
        let item = document.createElement('p');
        item.innerHTML = "texto "+ i + " fruta: " + array[i];
        itemLista.appendChild(item);
        console.log('fTesteLista 2 >', itemLista);  
    }
    return itemLista;
}
document.getElementById('testeLista2').appendChild(fTesteLista2());