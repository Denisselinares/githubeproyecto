function rectángulo() {
  const x =parseInt(document.getElementById('base').value);
  const y =parseInt(document.getElementById('altura').value);
  if (x > 0 && y > 0) {
    const resultado = x * y
    document.getElementById('Resultado').innerHTML= x*y;
  } else {
    if (x < 0) {
      alert("El valor de Base es invalido")
      document.getElementById('base').value = '0'
      document.getElementById('altura').value = '0'
    }
    if (y < 0) {
      alert("El valor de Altura es invalido")
      document.getElementById('altura').value = '0'
      document.getElementById('base').value = '0'
    }
    document.getElementById('Resultado').value = '0'
  }
}

function triangulo() {
  var x =parseInt(document.getElementById('base').value);
  var y =parseInt(document.getElementById('altura').value);
  if (x > 0 && y > 0) {
    const resultado = x * y/2
    document.getElementById('Resultado').innerHTML= x*y/2;
  } else {
    if (x < 0) {
      alert("El valor de base es invalido")
      document.getElementById('base').value = '0'
      document.getElementById('altura').value = '0'
    }
    if (y < 0) {
      alert("El valor de altura es invalido")
      document.getElementById('altura').value = '0'
      document.getElementById('base').value = '0'
    }
    document.getElementById('Resultado').value = '0'
  }
}

function limpiar(){
  document.getElementById('base'). value = 'o'
}
