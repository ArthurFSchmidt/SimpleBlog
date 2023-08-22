let i = 0;

carregarTelaInicial();

function criarPost(title, description, imgSrc, postNum) {

    // Declaração das variáveis dos elementos
    let mainDiv = document.createElement("div");
    let secondaryDiv = document.createElement("div"); 
    let tertiaryDiv = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let btn = document.createElement("button");

    // Linha 1
    mainDiv.className = "row pt-3 post";

    // Linha 2
    secondaryDiv.className = "col-md-1";
    mainDiv.appendChild(secondaryDiv);

    // Linha 12
    secondaryDiv = document.createElement("div");
    secondaryDiv.className = "col-md-3";

    mainDiv.appendChild(secondaryDiv);

    // Linha 13
    img.src = imgSrc;
    img.className = "img";

    // Append Linha 12 - 14
    secondaryDiv.appendChild(img);

    // Linha 3
    secondaryDiv = document.createElement("div");
    secondaryDiv.className = "col-md-7";

    // Linha 4
    tertiaryDiv.className = "title";

    // Linha 5
    h3.appendChild(document.createTextNode(title));

    // Append Linha 3 - 6
    btn.appendChild(h3);
    btn.style = "background-color: #fff; border: 0;"
    btn.className = "btnPost-"+postNum;
    tertiaryDiv.appendChild(btn);
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
    
    // Retorna post em HTML
    return mainDiv;
}

function colocarPost(post, postNum) {
    if(post){
        let section = document.querySelector(".section");
        section.appendChild(post);
        let hr = document.createElement("hr");
        hr.className = "mt-4"
        section.appendChild(hr);

        let btn = document.querySelector(".btnPost-"+postNum);
        console.log(btn);
        btn.addEventListener("click", function(){
            lerPost(postNum);
        });
    
        return false;
    } else
        return true;
}

function carregarTelaInicial() {
    let section = document.querySelector(".section");
    section.innerHTML = "";
    i = 0;

    colocarSubTitulo();

    fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens/", {method : "GET"})
        .then(resp => {
            return resp.json();
        })
        .then(publicacoes => {
            console.log(publicacoes);
            publicacoes.forEach(post => {
                let formatPost = criarPost(post.title, post.description, "https://api-rest-post-diegocandido.herokuapp.com" + post.thumbImage, i);
                let resp = colocarPost(formatPost, i);
                if(!resp)
                    console.log("Post carregado com sucesso.");
                else
                    console.log("Erro ao carregar o post.");
                i++;
            });
        });
}

function lerPost(postNum) {
    console.log("Clicou no btn do post "+postNum);

    let section = document.querySelector(".section");
    section.innerHTML = "";

    fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/"+postNum, {method : "GET"})
        .then(resp => {
            return resp.json();
        })
        .then(publicacoes => {
            console.log(publicacoes);
            let page = createPage(publicacoes.title, publicacoes.description, publicacoes.thumbImage, publicacoes.postDate, publicacoes.profileName, publicacoes.profileThumbImage)
            
            let container = document.querySelector(".section");
            container.appendChild(page);
        });

    
}

function colocarSubTitulo() {
    /*
            <div class="row mt-5 pb-3">
                <div class="col-1"></div>
                <div class="col-10">
                    <h2>Ultimas postagens</h2>
                </div>
    
            </div>
    
            <hr>
    */
    let section = document.querySelector(".section");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h2 = document.createElement("h2");
    let hr = document.createElement("hr");

    div1.className = "row mt-5 pb-3";
    div2.className = "col-1";
    div1.appendChild(div2);
    div2 = document.createElement("div");
    div2.className = "col-10";
    h2.appendChild(document.createTextNode("Ultimas postagens"));
    div2.appendChild(h2);
    div1.appendChild(div2);
    hr.className = "mt-4";
    div1.appendChild(hr);

    section.appendChild(div1);

}

function createPage(title, description, thumbImg, postDate, profileName, profileImg) {
    let divPage = document.createElement("div");
    let h2 = document.createElement("h2");
    let h5 = document.createElement("h5");
    let thumbImage = document.createElement("img");
    let p = document.createElement("p");
    let divImg = document.createElement("div");

    h2.appendChild(document.createTextNode(title));
    h2.className = "col-8 mx-auto mt-5";
    divPage.appendChild(h2);

    h5.appendChild(document.createTextNode(profileName));
    h5.className = "col-8 mx-auto mb-3";
    divPage.appendChild(h5);

    thumbImage.src = "https://api-rest-post-diegocandido.herokuapp.com"+thumbImg;
    thumbImage.className = "img-fluid";

    divImg.appendChild(thumbImage);
    divImg.className = "col-6 mx-auto";
    divPage.appendChild(divImg);
    
    p.appendChild(document.createTextNode(description));
    p.className = "col-8 mx-auto my-5";
    divPage.appendChild(p);


    return divPage;
}
