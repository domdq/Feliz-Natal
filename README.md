# 🎄 Feliz Natal — Plataforma de Doações de Fim de Ano

> _Espalhe alegria. Conecte corações. Faça a diferença neste Natal._

Uma landing page temática de Natal criada para conectar pessoas generosas com quem mais precisa — de forma simples, bonita e acessível.

---

## 📖 Visão Geral

**Feliz Natal** é uma página web desenvolvida para campanhas de doação durante as festas de fim de ano. A proposta é simples: criar um espaço digital acolhedor onde qualquer pessoa possa descobrir a campanha, sentir o espírito natalino e ser motivada a contribuir com um presente para quem precisa.

O projeto nasceu da vontade de unir design afetivo com uma causa real — mostrar que tecnologia pode (e deve) ser usada para espalhar generosidade.

---

## ✨ Destaques

- 🕐 **Contador regressivo ao vivo** — exibe o tempo restante até o Natal em dias, horas, minutos e segundos
- 🎨 **Visual temático e acolhedor** — paleta natalina com tons de vermelho, creme e branco
- 📱 **Design responsivo** — funciona bem em celulares, tablets e desktops
- ⚡ **Leve e sem dependências externas** — HTML, CSS e JavaScript puro (vanilla)
- 🔤 **Tipografia elegante** — fonte Archivo via Google Fonts

---

## 🖼️ Demonstração

A página é dividida em três partes principais:

| Seção       | O que aparece                                                  |
| ----------- | -------------------------------------------------------------- |
| **Header**  | Logo, descrição da plataforma e botão de doação                |
| **Seção 1** | Título motivacional + contador regressivo + imagem de presente |
| **Seção 2** | Ilustração + texto sobre a missão da plataforma                |
| **Footer**  | Logo e ícones de redes sociais                                 |

> 💡 Para ver ao vivo, basta abrir o arquivo `natal.html` no seu navegador.

---

## 🚀 Como começar

Não precisa instalar nada. O projeto roda direto no navegador.

### Pré-requisitos

- Um navegador moderno (Chrome, Firefox, Edge, Safari)
- Os arquivos do projeto organizados corretamente (veja a estrutura abaixo)

### Passos

1. **Baixe ou clone o repositório**

```bash
git clone https://github.com/domdq/feliz-natal.git
```

2. **Entre na pasta do projeto**

```bash
cd feliz-natal
```

3. **Abra o arquivo principal no navegador**

Clique duas vezes em `natal.html` ou arraste para o navegador — pronto! 🎉

---

## 🧭 Como usar

1. Abra `natal.html` no navegador
2. Veja o contador regressivo funcionar automaticamente em tempo real
3. Clique em **"Fazer uma doação"** para redirecionar o visitante à ação desejada (personalize o link no HTML)
4. Personalize textos, imagens e cores conforme a sua campanha

### Personalizando a data do contador

No arquivo `natal.js`, linha 1, altere a data de destino:

```javascript
const dataFinal = new Date("Dec 25, 2026 00:00:00").getTime();
```

---

## 📁 Estrutura do Projeto

```
feliz-natal/
│
├── natal.html          # Página principal — toda a estrutura da interface
├── natal.js            # Lógica do contador regressivo em tempo real
│
├── style/
│   └── natl.css        # Estilos visuais: cores, layout, tipografia e responsividade
│
└── sr/                 # Pasta de imagens e ícones
    ├── logo.png            # Logo da plataforma
    ├── imagem.png          # Imagem do header
    ├── present.png         # Ilustração de presente
    ├── illustration (1).png # Ilustração da seção 2
    ├── logo-twitter.png    # Ícone Twitter
    ├── logo-whatsapp.png   # Ícone WhatsApp
    ├── logo-instagram.png  # Ícone Instagram
    ├── logo-facebook.png   # Ícone Facebook
    └── logo-google.png     # Ícone Google
```

> **Dica:** Certifique-se de que a pasta `sr/` está no mesmo nível que o `natal.html` para que as imagens carreguem corretamente.

---

## 🤝 Como contribuir

Toda ajuda é bem-vinda! Se você quer melhorar o projeto, siga estes passos:

1. **Fork** este repositório (botão no canto superior direito do GitHub)
2. Crie uma **branch** para sua melhoria:
   ```bash
   git checkout -b minha-melhoria
   ```
3. Faça suas alterações e **commit**:
   ```bash
   git commit -m "Adiciona animação de neve no header"
   ```
4. Envie para o seu fork:
   ```bash
   git push origin minha-melhoria
   ```
5. Abra um **Pull Request** descrevendo o que você mudou e por quê

### Ideias de contribuição

- 🌨️ Adicionar animação de neve na tela
- 🌍 Tradução para inglês ou espanhol
- ♿ Melhorias de acessibilidade (ARIA, contraste, navegação por teclado)
- 📧 Integração com formulário de doação real
- 🌙 Modo escuro temático

---

## 📄 Licença

Este projeto está sob a licença **MIT** — sinta-se livre para usar, modificar e distribuir, desde que mantenha os créditos.

Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<div align="center">

Feito com ❤️ e espírito natalino.

_"Doe um presente. Compartilhe alegria. Faça o Natal de alguém mais especial."_

</div>
