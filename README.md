# Studio Sidlaine Thomaz Hair

Cartão de visita digital do salão em **Magé/RJ** — serviços, portfólio, depoimentos e pagamento Pix em um único link.

**[Acessar o Site](https://studio-sidlaine-thomaz-hair-connect.vercel.app/)**

---

## Preview

<p align="center">
  <img src="assets/img/logo.jpeg" alt="Logo Studio Sidlaine Thomaz Hair" width="30%">
</p>

> *"Beleza que transforma"* — Realçando sua beleza com alisamentos que transformam, com técnica, cuidado e muito amor.

---

## O que tem dentro

| Bloco | Como funciona |
|-------|---------------|
| Avalie no Google | Abre a página de avaliação do salão |
| WhatsApp | Conversa direto pelo número do estúdio |
| Instagram / Facebook | Acompanhe as atualizações |
| Localização | Abre o endereço no Google Maps |
| Nossos Serviços | Accordion com alisamentos, luzes, corte, escova, queratina, apliques e crescimento capilar |
| Catálogo de Serviços | Carrossel de imagens e vídeos dos trabalhos |
| Depoimentos | Vídeos em carrossel — termina um, o próximo entra sozinho |
| Tela cheia | Visualizador com play, volume, setas e avanço automático |
| Pix | Copia a chave (Nubank, nome: Sidlaine Thomaz Nascimento) ou escolhe o banco |
| Escolha seu banco | Detecta os apps bancários instalados no celular |
| WiFi Grátis | Rede `SIDILAINE_THOMAZ-5G` com senha e botão "Conectar Agora" |
| QR Code | Gera QR Code da página para compartilhar |
| Acessibilidade | Tema claro/escuro, alto contraste e VLibras |
| PWA | Instala como aplicativo no celular |

---

## Como Rodar

Abrir direto no navegador:

```
duplo clique em index.html
```

Ou com servidor local:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`

---

## Como Personalizar

Tudo mora no topo de `assets/js/script.js`:

```javascript
const CONFIG = {
    pixKey: '+5521988593392',
    whatsappPhone: '5521988593392',
    googleReviewUrl: 'https://g.page/r/.../review',
    instagramUrl: 'https://www.instagram.com/thomazsidlaine',
    facebookUrl: 'https://www.facebook.com/sidlaine.thomaz',
    pageUrl: 'https://studio-sidlaine-thomaz-hair-connect.vercel.app/',
    wifiPassword: 'sidy1206',
    wifiSSID: 'SIDILAINE_THOMAZ-5G',
};
```

**Trocar os vídeos:**

```javascript
const CATALOG_MEDIA = [ /* vídeos do catálogo */ ];

const TESTIMONIALS_MEDIA = [
    { type: 'video', src: 'assets/media/videos/depo 1.mp4' },
    { type: 'video', src: 'assets/media/videos/depo 2.mp4' },
];
```

Salve, recarregue e pronto.

---

## Estrutura

```
├── index.html              ← Página principal
├── style.css               ← Estilos e temas
├── assets/
│   ├── js/script.js        ← Lógica, CONFIG e mídias
│   ├── img/                ← Logo, ícones e gifs
│   └── media/videos/       ← Catálogo + depoimentos (depo 1, depo 2)
├── manifest.json           ← PWA
├── vercel.json             ← Deploy na Vercel
├── .htaccess / web.config  ← Apache e IIS
├── robots.txt / sitemap.xml ← SEO
```

---

## Deploy

1. Conecte o repositório ao [vercel.com](https://vercel.com)
2. Clique em **Deploy**

---

## Tecnologias

- HTML5 / CSS3 / JavaScript (sem framework)
- [Font Awesome 6](https://fontawesome.com/) — Ícones
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) — QR Code
- [VLibras](https://vlibras.gov.br/) — Tradução de Libras

---

## Contato

- **WhatsApp:** [+55 21 98717-2463](https://wa.me/5521987172463)
- **Pix / WhatsApp comercial:** [+55 21 98859-3392](https://wa.me/5521988593392)
- **Instagram:** [@thomazsidlaine](https://www.instagram.com/thomazsidlaine)
- **Facebook:** [sidlaine.thomaz](https://www.facebook.com/sidlaine.thomaz)
- **Local:** Magé — RJ

---

Desenvolvido por **Papel e Sonhos Informática**
