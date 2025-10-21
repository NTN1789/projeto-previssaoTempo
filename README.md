# 🌤️ Aplicativo de Previsão do Tempo

Uma aplicação moderna feita com **React + TypeScript + Vite** que consome a **API do OpenWeather** para exibir as condições climáticas atuais de qualquer cidade do mundo, com layout elegante e responsivo usando **Bootstrap**.

---

## 🚀 Tecnologias utilizadas

- ⚛️ **React 18 + TypeScript**
- ⚡ **Vite** (para build e hot reload ultrarrápido)
- 🎨 **Bootstrap 5** (estilização responsiva)
- 🌎 **OpenWeatherMap API** (dados meteorológicos)
- 🧩 **CSS Customizado** (gradientes dinâmicos conforme o clima)

---


> Interface limpa e responsiva, exibindo dados de temperatura, vento, pressão, umidade, nascer/pôr do sol e muito mais.

---

## 🧠 Funcionalidades

✅ Busca por cidade  
✅ Exibe:
- Temperatura atual, mínima e máxima  
- Sensação térmica  
- Umidade, pressão e visibilidade  
- Velocidade e direção do vento  
- Nascer e pôr do sol  
- Cobertura de nuvens (%)  
- Possíveis chuvas ou neve  
✅ Fundo dinâmico conforme o tipo de clima (sol, chuva, nublado etc.)  
✅ Layout 100% responsivo  

---

## 🛠️ Instalação e execução

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/previsao-do-tempo.git

cd previsao-do-tempo

npm install

npm run dev

```
```bash
src/
 ├── components/
 │    ├── SearchBar.tsx        # Campo de busca por cidade
 │    ├── WeatherCard.tsx      # Card principal com informações do clima
 │    ├── Loader.tsx           # Indicador de carregamento
 │    └── ErrorMessage.tsx     # Mensagem de erro
 ├── types/
 │    └── weather.ts           # Tipagem dos dados da API
 ├── utils/
 │    ├── api.ts               # Função de comunicação com a OpenWeather API
 │    └── format.ts            # Funções utilitárias de formatação
 ├── App.tsx                   # Componente raiz da aplicação
 └── index.tsx                 # Ponto de entrada principal

```