async function cafe() {

    const destino = document.getElementById('destino');

    try {
        const response = await fetch('PDP.json');

        if (!response.ok) throw new Error('Falha ao carregar dados');
        
        const cafes = await response.json();
         
        destino.innerHTML = '';
        
        cafes.forEach(item => {
            const prod = document.createElement('div');
            prod.className = 'model';
            
            prod.innerHTML = `
                <img src="imagens/${item.imagem}" alt="Foto de ${item.nome}">
                <h3></h3>
                <p></p>
                <a href="${item.link}">
                <button type="button">Saiba Mais</button>
                </a>`;

            prod.querySelector('h3').textContent = item.nome;
            destino.appendChild(prod);
        });
    }        catch (error) {
        console.error('Erro na requisição:', error);
        destino.innerHTML = `
        <p>Desculpa, não foi possível carregar as informações no momento.</p>
        `;
    }
}
