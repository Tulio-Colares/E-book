let portugues = document.getElementById('portugues')

portugues.addEventListener('click', function() {
    document.getElementById("black-belt").innerHTML = "Torne-se um Faixa Preta";
    document.getElementById("skills").innerHTML = "em Programação";
    document.getElementById('about').innerHTML = "Sobre";
    document.getElementById('reviews').innerHTML = "Opiniões";
    document.getElementById('contact').innerHTML = "Entre em Contato";
    document.getElementById('pricing').innerHTML = "Preços";
    document.getElementsByClassName('buyNow').innerHTML = "Comprar Agora";
    document.getElementById("explore").innerHTML = "Explore meus outros livros"
    document.getElementById("titles").innerHTML = "Escolha um título"
    document.getElementById("pricing-plans").innerHTML = "Preços"
    document.getElementById("pricing-sentence").innerHTML = "Escolha um preço que se ajusta a você"
    document.getElementById("inside").innerHTML = "Por dentro do livro..."
    document.getElementById("inside-description").innerHTML = "Uma rápida olhada nos tópicos que você vai aprender"
    document.getElementById("opinions").innerHTML = "<i class='bi bi-stars'></i>Opiniões"
    document.getElementById("opinions-descriptions").innerHTML = "O que meus alunos estão falando sobre o livro"
    document.getElementById("touch").innerHTML = "Entre em contato"
    document.getElementById("questions").innerHTML = "Tem perguntas? Preencha o formulário para entrar em contato direto conosco"
})

