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
                <img src="Imgs/${item.imagem}" class="imagem_produto">
                <p class="d_produto">${item.nome}</p>
                <p class="p_produto">${item.preco}</p>
                <a href="${item.link}" class="botao_produto">Saiba Mais</a>`;

            prod.querySelector('.d_produto').textContent = item.nome;
            prod.querySelector('.p_produto').textContent = item.preco;
            destino.appendChild(prod);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
        destino.innerHTML = `
        <p>Desculpa, não foi possível carregar as informações no momento.</p>
        `;
    }
}
