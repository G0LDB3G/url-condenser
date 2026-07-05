# URL Condenser 🔗

Sistema para encurtamento de URLs desenvolvido com **Java**, **Spring Boot**, **PostgreSQL** e **JavaScript**. O projeto permite criar URLs curtas, redirecionar para a URL original, consultar estatísticas de acesso e gerenciar links por meio de uma API REST documentada com **Swagger**.

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
</div>

---

## Funcionalidades 🚀

- 🔗 Encurtamento de URLs.
- 🌐 Redirecionamento automático para a URL original.
- 📊 Consulta de estatísticas de acesso.
- 🗑️ Exclusão de URLs cadastradas.
- 📋 Listagem de todas as URLs cadastradas.
- 📖 Documentação completa da API utilizando Swagger.
- 💻 Interface web simples para consumo da API.

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

- `controller/` → Endpoints REST.
- `service/` → Regras de negócio.
- `repository/` → Comunicação com o banco.
- `domain/` → Entidade principal.
- `dto/` → Objetos de transferência.
- `mapper/` → Conversão entre entidade e DTO.
- `config/` → Swagger e CORS.
- `exception/` → Tratamento global de exceções.

### Frontend

- Interface construída em HTML, CSS e JavaScript puro.
- Comunicação com a API utilizando Fetch API.
- Consulta das URLs e estatísticas em tempo real.

---

## Endpoints 📡

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/api/urls` | Cria uma URL curta |
| GET | `/api/urls` | Lista todas as URLs |
| GET | `/api/urls/{shortCode}` | Busca informações da URL |
| GET | `/{shortCode}` | Redireciona para a URL original |
| DELETE | `/api/urls/{shortCode}` | Remove uma URL |
| GET | `/api/urls/{shortCode}/stats` | Consulta estatísticas |

---

## Documentação 📚

Após iniciar a aplicação, a documentação poderá ser acessada em:

```text
http://localhost:8080/swagger-ui/index.html
```

---

## Tratamento de Erros 🧯

A API possui tratamento centralizado de exceções para:

- 400 — Requisição inválida
- 404 — URL não encontrada
- 409 — URL duplicada
- 500 — Erro interno do servidor

Todas as respostas seguem um formato padronizado.

---

## Arquitetura ⚙️

O projeto segue a arquitetura em camadas:

```
Controller
     │
Service
     │
Repository
     │
PostgreSQL
```

A comunicação externa ocorre através de DTOs, evitando exposição direta da entidade.

---

## Requisitos 💼

- Java 21+
- Maven 3.9+
- PostgreSQL 15+
- IntelliJ IDEA ou VS Code

---

## Como Executar 🚀

### Clone o repositório

```bash
git clone https://github.com/G0LDB3G/url-condenser.git
```

Entre na pasta:

```bash
cd url-condenser/backend
```

Configure o arquivo `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/urlcondenser
spring.datasource.username=postgres
spring.datasource.password=sua_senha
```

Execute:

```bash
mvn spring-boot:run
```

---

## Frontend 💻

Abra o arquivo:

```
frontend/index.html
```

ou utilize a extensão **Live Server** do VS Code.

---
