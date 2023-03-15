
// Bot para Seguir //
let contador = 0;
let a = document.querySelectorAll('._acas')

a.forEach((v, i) =>{
    setTimeout(()=>{
        if(!v.classList.contains('._acat')){
        v.click();
        contador++;
        console.log("Você já seguiu " + contador + " pessoas")
        }else{
        console.log("Você já segue esse usuario")
    }
    }, i * 20000
            )

})


// Bot para deixar de Seguir //
let contador = 0;

document.querySelectorAll('._acat').forEach((item, index)=> {
    setTimeout(() => {
        if(item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('._a9-_').forEach((item, index) => {
                if(item.innerText == 'Deixar de seguir'){
                    item.click();
                    contador++
                    console.log('Você deixou de seguir '+ contador +' pessoas');
                }
            })
        }
    }, index * 20000)
})