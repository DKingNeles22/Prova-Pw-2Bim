document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsDiv = document.getElementById('results');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        
       
        fetch(/search?q=${query})
            .then(response => response.json())
            .then(data => {
                // Exibir os resultados recebidos da API
                displayResults(data.results);
            })
            .catch(error => {
                console.error('Ocorreu um erro ao buscar os resultados:', error);
            });
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '';

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h2>${result.title}</h2>
                <p>${result.description}</p>
            `;
            resultsDiv.appendChild(resultItem);
        });
    }
});
