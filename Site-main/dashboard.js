 // Redireciona para o questionário correspondente
  document.querySelectorAll('.card-option').forEach(card => {
    card.addEventListener('click', () => {
      const iso = card.dataset.id;
      /*window.location.href = `questionario.html?iso=${iso}`;*/
      window.location.href='iso27001/questionario.html'
      window.location.href='iso19249/questionario.html'
      window.location.href='iso27034/questionario.html'

    });
  });

  document.getElementById('logoutBtnDash').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
