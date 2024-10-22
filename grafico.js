const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Todos os dias', 'Raramente', 'As vezes', 'Nunca'],
        datasets: [{
            label: 'Com que frequência você consome alimentos saudáveis?',
            data: [68, 16, 16, 0],
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
                text: 'Alimentação Saudável'
            }
        }
    }
});    
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['0', '1', '2', '3','+'],
        datasets: [{
            label: 'Em media quantas vezes consome fast-food na semana?',
            data: [21, 68, 5, 0, 5],
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
                text: 'Alimentação Saudável'
            }
        }
    }
});    

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['1L', '2L', '3L', '+','-'],
        datasets: [{
            label: 'Quantos litros de água você bebe em media por dia?',
            data: [11, 47, 21, 16, 5],
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
                text: 'Alimentação Saudável'
            }
        }
    }
});  

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não', 'Talvez', ],
        datasets: [{
            label: 'Você costuma ler os rótulos nutricionais dos alimentos antes de comprá-los?',
            data: [16, 63, 21,],
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
                text: 'Alimentação Saudável'
            }
        }
    }
});    

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não', 'Talvez', ],
        datasets: [{
            label: 'Você costuma evitar alimentos ultra processados? ',
            data: [21, 53, 26,],
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
                text: 'Alimentação Saudável'
            }
        }
    }
});