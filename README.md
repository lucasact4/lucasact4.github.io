# Portfólio de Lucas Santos

O site usa Jekyll para gerar páginas estáticas. O GitHub Pages pode publicar a partir da raiz da branch, com o build nativo do Jekyll.

## Onde editar

- `index.html` define a ordem das seções.
- `_layouts/default.html` contém a estrutura da página e os recursos comuns.
- `_includes/sections/` contém as seções. `_includes/components/` contém os trechos reutilizáveis.
- `_data/` reúne os textos, links e imagens de perfil, habilidades, projetos, desafios e áreas de atuação.
- `_includes/styles/` contém o CSS por seção. O Jekyll reúne os arquivos em `css/index.css`.
- `js/` contém as interações de tema, projetos, tooltips e efeitos.

## Prévia local

No WSL, com Ruby e Bundler instalados:

~~~bash
bundle install
bundle exec jekyll serve --port 5501
~~~

Abra `http://localhost:5501` no navegador. A prévia precisa passar pelo Jekyll para resolver os componentes e os dados.

**Mudanças necessárias:**

Meu [Portfolio](https://lucasact4.github.io/)

*Checklist Melhorias Portfolio:*
- Trocar a foto de perfil para uma mais formal(tirar uma atual).
- Adicionar Easter Egg simples no portfolio atrás de um background para aparecer quando passar mouse em cima(Coisas do Minecraft, Animes, Jogos).

*Checklist Projetos Atuais:*
- Projeto Currículo: Atualizar o currículo, adicionar função de mudança de estilos e download versões PDF.
- 4Craft: Continuar o desenvolvimento front-end da landing-page fazendo um site mais amplo.
- Portinho: Deixar responsivo e informar projeto encerrado.

*Checklist Projetos Futuros:*
- Fast4Salons: Criar um sistema para salões no geral focado inicialmente para barbearia - Rails Base.
