var texto = document.getElementById("textoLinea");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

boton.addEventListener("click",dibujoPorClick);

//
dibujarLinea("black",0,0,0,500);
dibujarLinea("black",0,500,500,500);
dibujarLinea("black",500,500,500,0);
dibujarLinea("black",500,0,0,0);

//
function dibujarLinea(color,xi,yi,xf,yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);

    var linea = 0;

    color="red";
    xi=0;
    yi=0;
    xf=0;
    yf=500;
    
    var spacio=500/lineas;
    while(linea<lineas+1)
    {
        dibujarLinea(color,xi,yi,xf,yf);
        xf = xf + spacio;
        yi = yi + spacio;
        linea = linea + 1;
        
    }

    //dos

    var linea = 0;

    color="blue";
    xi=0;
    yi=500;
    xf=0;
    yf=0;

    var spacio=500/lineas;
    while(linea<lineas+1)
    {
        dibujarLinea(color,xi,yi,xf,yf);
        yi = yi - spacio;
        xf = xf + spacio;
        linea = linea + 1;
    }

    //tres

    var linea = 0;

    color="green";
    xi=0;
    yi=0;
    xf=500;
    yf=0;

    var spacio=500/lineas;
    while(linea<lineas+1)

    {
        dibujarLinea(color,xi,yi,xf,yf);
        xi=xi+spacio;
        yf=yf+spacio;
        linea=linea+1;
    }

    //cuarto

    var linea = 0;

    color="yellow";
    xi=500;
    yi=0;
    xf=500;
    yf=500;
    
    var spacio=500/lineas;
    while(linea<lineas+1)
    {
        dibujarLinea(color,xi,yi,xf,yf);
        yi=yi+spacio;
        xf=xf-spacio;
        linea = linea + 1;
    }
    
}