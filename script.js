function iniciarContador() {
  const fechaCercana = new Date(); // Obtiene la fecha y hora actual
  const fechaAñoNuevo = new Date('January 1, 2024 00:00:00').getTime();
  const fechaObjetivo = fechaCercana.getTime();

  const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaAñoNuevo - ahora;

    if (diferencia <= 0) {
      clearInterval(intervalo);
      diferencia = 0; // Establecer la diferencia a cero para evitar números negativos
      document.getElementById('cuenta').style.display = 'none';
      document.getElementById('mensaje').style.display = 'block';
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;
  }, 1000);
}

window.onload = iniciarContador;

// Generar la nieve
function generateSnowflakes() {
    const numSnowflakes = 50; // Número de copos de nieve
    const container = document.querySelector('.snowfall');

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('span');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❅'; // Puedes ajustar el carácter Unicode para el copo de nieve

        const size = Math.random() * 15 + 10; // Tamaño aleatorio
        const duration = Math.random() * 5 + 3; // Duración de la animación aleatoria

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${duration}s`;

        container.appendChild(snowflake);
    }
}

generateSnowflakes();

// Función para crear globos y hacerlos caer desde arriba
function createBalloons() {
    const colors = ['red', 'blue', 'green', 'yellow']; // Lista de colores para los globos
  
    setInterval(function() {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon', colors[Math.floor(Math.random() * colors.length)]);
      
      const x = Math.floor(Math.random() * window.innerWidth); // Posición horizontal aleatoria
      const animationDuration = Math.floor(Math.random() * 5) + 5; // Duración de la animación
      
      balloon.style.left = `${x}px`; // Establecer la posición horizontal inicial
      balloon.style.top = '-20px'; // Comenzar desde arriba de la página
      
      document.body.appendChild(balloon); // Agregar el globo al cuerpo del documento
  
      // Eliminar el globo después de la animación
      setTimeout(function() {
        balloon.remove();
      }, animationDuration * 1000);
    }, 1000); // Intervalo para generar globos
  }
  
  // Llamar a la función para crear los globos
  createBalloons();
  // audio
  function playaudio(){
    var audioPlayer = document.getElementById("musica1");
    audioPlayer.play();
    audioPlayer.volume = 0.03;
  }
