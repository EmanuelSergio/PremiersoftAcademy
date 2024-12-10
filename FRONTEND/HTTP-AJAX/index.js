// Exemplo usando a API pública do GitHub para buscar dados de um usuário
fetch("https://api.github.com/users/github")
  .then((response) => response.json())
  .then((data) => {
    console.log("Dados do usuário:", data);
    // Aqui você terá acesso a: data.login, data.avatar_url, data.name, etc.
  })
  .catch((error) => console.error("Erro:", error));

// Exemplo usando a JSONPlaceholder API para criar um post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Novo Post",
    body: "Conteúdo do post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Post criado:", data))
  .catch((error) => console.error("Erro:", error));
