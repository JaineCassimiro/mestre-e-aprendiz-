const API_URL = "http://localhost:4000/api/artifacts";

async function uploadArtifact() {
    const fileInput = document.getElementById("fileInput").files[0];
    if (!fileInput) {
        alert("Selecione um arquivo para enviar!");
        return;
    }

    let formData = new FormData();
    formData.append("file", fileInput);

    const response = await fetch(API_URL, {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("output").innerHTML = `<p>✅ Artefato Enviado: ${data.message}</p>`;
}

async function getArtifact() {
    const artifactId = document.getElementById("artifactId").value;
    if (!artifactId) {
        alert("Digite um ID válido!");
        return;
    }

    const response = await fetch(`${API_URL}/${artifactId}`, {
        method: "GET"
    });

    const data = await response.json();
    document.getElementById("output").innerHTML = `<p>📂 Artefato: ${data.message}</p>`;
}
