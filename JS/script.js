/*<div class="row pt-3 post"> (mainDiv)
    <div class="col-1"></div> (secondaryDiv)
    <div class="col-7">       (secondaryDiv)
        <div class="title">   (tertiaryDiv)
            <h3>Google Notícias completa 20 anos com redesign e fundo de apoio ao jornalismo independente</h3> (h3)
        </div>
        <div class="mt-3 pb-3"></div>   (tertiaryDiv)
        <div class="description">       (tertiaryDiv)
            <p>Na última semana, o Google apresentou uma nova versão para desktop do seu serviço de notícias. Após um redesign profundo, o Google Notícias promete informar mais sobre os temas que os usuários acompanham, com mais profundidade e facilidade de acesso – seja lendo no smartphone ou, agora, no computador.</p>   (p)
        </div>
    </div>                 
    <div class="col-3">       (secondaryDiv)
        <img src="../api-fake-blog/public/images/post-1.jpg" alt="" class="img">    (img)
    </div>

</div>
*/

function criarPost(title, description, imgSrc) {

    // Declaração das variáveis dos elementos
    let mainDiv = document.createElement("div");
    let secondaryDiv = document.createElement("div"); 
    let tertiaryDiv = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let img = document.createElement("img");

    // Linha 1
    mainDiv.className = "row pt-3 post";

    // Linha 2
    secondaryDiv.className = "col-md-1";
    mainDiv.appendChild(secondaryDiv);

    // Linha 3
    secondaryDiv = document.createElement("div");
    secondaryDiv.className = "col-md-7";

    // Linha 4
    tertiaryDiv.className = "title"

    // Linha 5
    h3.appendChild(document.createTextNode(title));

    // Append Linha 3 - 6
    tertiaryDiv.appendChild(h3);
    secondaryDiv.appendChild(tertiaryDiv);

    // Linha 7
    tertiaryDiv = document.createElement("div");
    tertiaryDiv.className = "mt-3 pb-3";
    secondaryDiv.appendChild(tertiaryDiv);

    // Linha 8
    tertiaryDiv = document.createElement("div");
    tertiaryDiv.className = "description";

    // Linha 9
    p.appendChild(document.createTextNode(description));

    // Append Linha 8 - 10
    tertiaryDiv.appendChild(p);
    secondaryDiv.appendChild(tertiaryDiv);

    // Append Linha 2 - 11
    mainDiv.appendChild(secondaryDiv);

    // Linha 12
    secondaryDiv = document.createElement("div");
    secondaryDiv.className = "col-md-3";

    // Linha 13
    img.src = imgSrc;
    img.className = "img"

    // Append Linha 12 - 14
    secondaryDiv.appendChild(img);
    mainDiv.appendChild(secondaryDiv);

    // Retorna post em HTML
    return mainDiv;
}

function colocarPost(post) {
    if(post){
        let container = document.querySelector(".container");
        container.appendChild(post);
        let hr = document.createElement("hr");
        container.appendChild(hr);
        return false;
    } else
        return true;
}