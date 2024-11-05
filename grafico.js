const ctxPizza1 = document.getElementById('graficoPizza1').getContext('2d');
const graficoPizza1 = new Chart(ctxPizza1, {
    type: 'pie',
    data: {
        labels: ['Ler um livro', ' Caminhar ao ar livre', 'Assistir filmes ou séries', 'Praticar meditação', ' Sair com amigos'
        ],
        datasets: [{
            label: ' Qual é a sua atividade preferida para relaxar no fim de semana?',
            data: [5, 11, 47, 0, 21],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            bordarWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Explorando suas Preferências e Estilo de Vida'
            }
        }
    }
});    
const ctxPizza2 = document.getElementById('graficoPizza2').getContext('2d');
const graficoPizza2 = new Chart(ctxPizza2, {
    type: 'pie',
    data: {
        labels: ['Japão', 'França', 'Estados Unidos', 'Nova Zelândia','Itália'],
        datasets: [{
            label: ' Se você pudesse viajar para qualquer lugar do mundo, para onde iria?',
            data: [26, 0, 42, 11, 5],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            bordarWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Explorando suas Preferências e Estilo de Vida'
            }
        }
    }
});    

const ctxPizza3 = document.getElementById('graficoPizza3').getContext('2d');
const graficoPizza3 = new Chart(ctxPizza3, {
    type: 'pie',
    data: {
        labels: [' Ler livros', ' Assistir filmes ou séries', 'Praticar esportes', ' Cozinhar',' Jogar videogames'],
        datasets: [{
            label: 'Qual é o seu passatempo favorito?',
            data: [5, 21, 16, 0, 43],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            bordarWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Explorando suas Preferências e Estilo de Vida'
            }
        }
    }
});  

const ctxPizza4 = document.getElementById('graficoPizza4').getContext('2d');
const graficoPizza4 = new Chart(ctxPizza4, {
    type: 'pie',
    data: {
        labels: ['Café da manhã', ' Almoço', 'jantar', 'lanche da tarde', ],
        datasets: [{
            label: ' Qual é a sua refeição favorita do dia?',
            data: [26, 21, 26, 11,],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            bordarWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Explorando suas Preferências e Estilo de Vida'
            }
        }
    }
});    

const ctxPizza5 = document.getElementById('graficoPizza5').getContext('2d');
const graficoPizza5 = new Chart(ctxPizza5, {
    type: 'pie',
    data: {
        labels: ['inverno', 'verão', 'outono', 'primavera', ],
        datasets: [{
            label: 'Qual estação do ano você prefere? ',
            data: [37, 26, 16, 5,],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            bordarWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Explorando suas Preferências e Estilo de Vida'
            }
        }
    }
});