# URL Condenser 🔗

Sistema para encurtamento de URLs desenvolvido com **Java**, **Spring Boot**, **PostgreSQL** e **JavaScript**. A aplicação permite criar URLs curtas, redirecionar automaticamente para a URL original, consultar estatísticas de acesso e gerenciar links por meio de uma API REST documentada com **Swagger**.

O projeto possui **backend em Spring Boot**, **frontend em HTML/CSS/JavaScript puro** e está publicado em produção utilizando **Render** e **Vercel**.

---

## 🌐 Demonstração

### Aplicação Web

https://url-condenser.vercel.app

### Documentação da API (Swagger)

https://url-condenser-api.onrender.com/swagger-ui/index.html

---

## Tecnologias Utilizadas 🧑‍💻

<div>
  <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white">
  <img src="https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
  <img src="https://img.shields.io/badge/Lombok-E62C2C?style=for-the-badge&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

---

## Funcionalidades 🚀

- 🔗 Encurtamento de URLs.
- 🌐 Redirecionamento automático para a URL original.
- 📊 Consulta de estatísticas de acesso.
- 📋 Listagem de todas as URLs cadastradas.
- 🗑️ Exclusão de URLs.
- 📖 Documentação completa da API utilizando Swagger.
- 💻 Interface web para consumo da API.
- ☁️ Deploy em produção utilizando Render e Vercel.

---

## Estrutura do Projeto 🗂️

```text
URL-Condenser
│
├── backend
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

### Backend

- `controller/` → Endpoints REST
- `service/` → Regras de negócio
- `repository/` → Comunicação com o banco
- `domain/` → Entidade principal
- `dto/` → Objetos de transferência de dados
- `mapper/` → Conversão entre entidades e DTOs
- `config/` → Configurações do Swagger e CORS
- `exception/` → Tratamento global de exceções

### Frontend

- HTML5
- CSS3
- JavaScript puro
- Fetch API para comunicação com o backend

---

## Endpoints 📡

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/api/urls` | Cria uma URL encurtada |
| GET | `/api/urls` | Lista todas as URLs |
| GET | `/api/urls/{id}` | Busca uma URL pelo ID |
| DELETE | `/api/urls/{id}` | Remove uma URL |
| GET | `/api/urls/stats/{shortCode}` | Consulta estatísticas |
| GET | `/{shortCode}` | Redireciona para a URL original |

---

## Documentação 📚

### Produção

```
https://url-condenser-api.onrender.com/swagger-ui/index.html
```

### Desenvolvimento

```
http://localhost:8080/swagger-ui/index.html
```

---

## Tratamento de Erros 🧯

A API possui tratamento centralizado para:

- **400** — Requisição inválida
- **404** — URL não encontrada
- **409** — URL duplicada
- **500** — Erro interno do servidor

Todas as respostas seguem um formato JSON padronizado.

---

## Arquitetura ⚙️

O projeto segue uma arquitetura em camadas.

```text
              Usuário
                  │
                  ▼
       Frontend (Vercel)
                  │
             Fetch API
                  │
                  ▼
     Spring Boot API (Render)
                  │
          Service / Repository
                  │
                  ▼
      PostgreSQL (Render)
```

A comunicação entre frontend e backend ocorre através de DTOs, evitando a exposição direta das entidades.

---

## ☁️ Deploy

### Frontend

- Vercel

### Backend

- Render

### Banco de Dados

- PostgreSQL (Render)

---

## Requisitos 💼

- Java 21+
- Maven 3.9+
- PostgreSQL 15+
- IntelliJ IDEA ou Visual Studio Code

---

## Como Executar 🚀

### 1. Clone o repositório

```bash
git clone https://github.com/G0LDB3G/url-condenser.git
```

Entre na pasta do backend:

```bash
cd url-condenser/backend
```

---

### 2. Configure as variáveis de ambiente

```properties
DB_URL=jdbc:postgresql://localhost:5432/urlcondenser
DB_USER=postgres
DB_PASSWORD=sua_senha

BASE_URL=http://localhost:8080
FRONTEND_URL=http://localhost:5500
```

---

### 3. Execute a aplicação

```bash
mvn spring-boot:run
```

---

## Frontend 💻

### Produção

https://url-condenser.vercel.app

### Desenvolvimento

Abra o arquivo

```
frontend/index.html
```

ou utilize a extensão **Live Server** do Visual Studio Code.

---
