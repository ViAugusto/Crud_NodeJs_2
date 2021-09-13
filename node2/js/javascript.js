(function readyJS(win, doc){ // Windown confirmando se realmente quer apagar o dado.

    if(doc.querySelectorAll(".deletar")){
        for(let i=0; i<doc.querySelectorAll(".deletar").length; i++){
            doc.querySelectorAll(".deletar")[i].addEventListener("click", function(event){
                if(confirm("Deseja realmente apagar os dados? (Não poderá reverter!)")){
                    return true;
                }else{
                    event.preventDefault();
                };
            });
        }
    }

})(windown, document);