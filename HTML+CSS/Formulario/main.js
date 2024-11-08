document.getElementById('formCadastro').addEventListener('submit', async function(event) {
    
    event.preventDefault();
    
    
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    
    const pessoa = {
        nome: nome,
        email: email,
        senha: senha
    }

    console.log(pessoa);
    


    
})