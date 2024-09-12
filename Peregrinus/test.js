

fetch('http://localhost:3307/usuario', {
    method: 'GET', // Requisição GET não deve ter um corpo
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach(element => {
       console.log(element.id, element.login,element.senha, element.email) 
    });
})
.catch(error => {
    console.error('Erro:', error);
});