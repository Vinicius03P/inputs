function pegatexto(){
    let input: HTMLInputElement | null =document.querySelector('#texto');
    if(input != null){
        let texto= parseFloat(input.value);
        let ress: HTMLInputElement | null = document.querySelector('#resultado')!;
        let n= parseFloat(ress.value);
        let soma: HTMLInputElement | null = document.querySelector('#soma')!;
        soma.value = String(texto+n);
    }
}