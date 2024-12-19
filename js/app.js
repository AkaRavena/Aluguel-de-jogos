function alterarStatus(id){

    let elemento = document.getElementById(`game-${id}`);
    let div = elemento.querySelector("div");
    let link = elemento.querySelector("a");

    if(link.classList.contains("dashboard__item__button--return")){
    div.classList.remove("dashboard__item__img--rented");
    link.classList.remove("dashboard__item__button--return");
    link.innerHTML= "Alugar";
    } else {
    div.classList.add("dashboard__item__img--rented");
    link.classList.add("dashboard__item__button--return");
    link.innerHTML = "Devolver";
    }
}