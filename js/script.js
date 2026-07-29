document.addEventListener('DOMContentLoaded', () => {

  // 1. Alerta de Boas-Vindas
  console.log("Bem-vindo ao Projeto de Férias!");

  // 2. Relógio em Tempo Real
  function atualizarRelogio() {
    const elementoRelogio = document.getElementById('relogio');
    if (elementoRelogio) {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');
      elementoRelogio.textContent = `${horas}:${minutos}:${segundos}`;
    }
  }
  setInterval(atualizarRelogio, 1000);
  atualizarRelogio();

  // 3. Modo Escuro (Dark Mode)
  const btnDarkMode = document.getElementById('btn-dark-mode');
  if (btnDarkMode) {
    btnDarkMode.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const icone = btnDarkMode.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
      } else {
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
      }
    });
  }

  // 4. Botão Voltar ao Topo
  const btnTopo = document.getElementById('btn-topo');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTopo.classList.remove('d-none');
    } else {
      btnTopo.classList.add('d-none');
    }
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 5. Validação do Formulário de Contato
  const formContato = document.getElementById('form-contato');
  const msgSucesso = document.getElementById('mensagem-sucesso');

  if (formContato) {
    formContato.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (formContato.checkValidity()) {
        msgSucesso.classList.remove('d-none');
        formContato.reset();
        formContato.classList.remove('was-validated');
      } else {
        msgSucesso.classList.add('d-none');
        formContato.classList.add('was-validated');
      }
    });
  }

});
