   const moeda = document.getElementById('moeda');
    const som = document.getElementById('som');

    function lançarMoeda() {
      moeda.classList.remove('animar');
      void moeda.offsetWidth; 
      moeda.classList.add('animar');
      som.play();

      setTimeout(() => {
        const resultado = Math.random() < 0.5 ? 'Cara' : ' Coroa';
        moeda.textContent = resultado;
      }, 600);
    }
