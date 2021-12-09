var billullo = [];
billullo["50"] = "billete50.png";
billullo["20"] = "billete20.png";
billullo["10"] = "billete10.png";

class Cash{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;

    this.imagen = new Image();
    this.imagen.src = billullo[this.valor];

  }
}


function pasarDinero()
{
  //para la variable money de box, lo que hace es aharrar los elementos que hay en
  //box e ir uno por uno y colocarlos en money
  var dibujado = [];
  var te = document.getElementById("dinero");
  dinero = parseInt(te.value);

  if (total >= dinero) {

    for (var money of box)
    {
      if (dinero > 0) {
        division = Math.floor(dinero / money.valor);

        if (division > money.cantidad)
        {
          caramelos = money.cantidad;
        }
        else
        {
          caramelos = division;
        }

            money.cantidad = money.cantidad - caramelos;
          for (var i = 0; i < caramelos; i++) {
            dibujado.push(new Cash(money.valor, 1) );
          }
          dinero -= (money.valor * caramelos);
      }
}
    if (dinero == 0)
    {
      resultado.innerHTML ="has retirado: <br />";
      for(var e of dibujado)
      {
        resultado.innerHTML +=  "<img src=" + e.imagen.src + " />";
        resultado.innerHTML +=  e.cantidad + " billetes de $ " + e.valor + "<br />";
      }
        resultado.innerHTML += "<hr />";
        contar();
      }
      else
      {
        resultado.innerHTML += "No tengo billetes de esa denominación para tu suma, please try again";
      }

  }
  else
  {
    resultado.innerHTML += "I´m a poor ATM";
  }


  }




function contar()
  {
    total = 0;
    for (var totalito of box) {
      total += totalito.valor * totalito.cantidad;
    }
    console.log(total);
  }

var box = [];
var entrega = [];

box.push(new Cash(50, 10));
box.push(new Cash(20, 30));
box.push(new Cash(10, 5));

contar();

var dinero = 0;
var division = 0;
var caramelos = 0;

var resultado = document.getElementById("result");
var b = document.getElementById("extraer");
b.addEventListener("click", pasarDinero);
