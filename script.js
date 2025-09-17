 
    const formulario = document.getElementById("formulario");
    const lista = document.getElementById("listaUsuarios");
    const limparBtn = document.getElementById("limpar");

    // Evento de envio do formulário
    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o recarregamento da página

      // Captura dos valores
      const usuario = document.getElementById("usuario").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const nascimento = document.getElementById("nascimento").value.trim();
      const email = document.getElementById("email").value.trim();

      // Validação simples
      if (!usuario || !senha || !telefone || !nascimento || !email) {
        console.error("Preencha todos os campos antes de enviar!");
        return;
      }

      // Criando novo item dinamicamente
      const li = document.createElement("li");
      li.textContent = `Usuário: ${usuario} | Telefone: ${telefone} | Nascimento: ${nascimento} | Email: ${email}`;
      lista.appendChild(li);

      // Limpar campos após envio
      formulario.reset();
    });

    // Evento para limpar a lista
    limparBtn.addEventListener("click", () => {
      lista.innerHTML = ""; // Remove todos os elementos da lista
    });
  