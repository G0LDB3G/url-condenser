const API =
    window.location.hostname === "localhost"
        ? "http://localhost:8080"
        : "https://url-condenser-api.onrender.com";

async function createUrl() {

    try {

        const input = document.getElementById("urlInput");

        const url = input.value.trim();

        if (!url) {

            alert("Digite uma URL.");

            return;

        }

        const response = await fetch(`${API}/api/urls`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                originalUrl: url
            })

        });

        if (!response.ok) {

            const error = await response.json();

            throw new Error(error.message);

        }

        const data = await response.json();

        document.getElementById("result").innerHTML = `

            <p>Sua URL curta:</p>

            <a href="${data.shortUrl}" target="_blank" rel="noopener noreferrer">
                ${data.shortUrl}
            </a>

            <br><br>

            <button
                class="copy"
                onclick="copyUrl('${data.shortUrl}')">

                Copiar

            </button>

        `;

        input.value = "";

        loadUrls();

    }

    catch (error) {

        alert(error.message);

        console.error(error);

    }

}

async function loadUrls() {

    try {

        const response = await fetch(`${API}/api/urls`);

        const urls = await response.json();

        const table = document.getElementById("urlTable");

        table.innerHTML = "";

        urls.forEach(url => {

            table.innerHTML += `

            <tr>

                <td>

                    <a href="${url.originalUrl}" target="_blank" rel="noopener noreferrer">

                        ${url.originalUrl}

                    </a>

                </td>

                <td>

                    <a href="${API}/${url.shortCode}" target="_blank" rel="noopener noreferrer">

                        ${url.shortCode}

                    </a>

                </td>

                <td>

                    ${url.clicks}

                </td>

                <td>

                    <button
                        class="copy"
                        onclick="copyUrl('${API}/${url.shortCode}')">

                        Copiar

                    </button>

                    <button
                        class="delete"
                        onclick="deleteUrl(${url.id})">

                        Excluir

                    </button>

                </td>

            </tr>

            `;

        });

    }

    catch (error) {

        console.error(error);

    }

}

async function deleteUrl(id) {

    try {

        await fetch(`${API}/api/urls/${id}`, {

            method: "DELETE"

        });

        loadUrls();

    }

    catch (error) {

        alert("Erro ao excluir a URL.");

        console.error(error);

    }

}

function copyUrl(url) {

    navigator.clipboard.writeText(url);

    alert("URL copiada!");

}

window.onload = () => {

    loadUrls();

};