let clave = "1234";
function login() {
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {
        let ingresacont = prompt( "Ingresa tu PIN. Tenés " + (i + 1) + " oportunidades");
        if (ingresacont === clave) {
        alert("Bienvenido ingreso exitoso");
        ingresar = true;
        break;
        } else {
            alert("Error");
        }
    }
    return ingresar;
}
let correcto= login()
if (correcto){
    let marca = +(prompt("1-xbox 2-playstation"));
    if (marca==1){
        alert("Elegiste xbox")
    }   else if (marca==2){
        alert("Elegiste playstation")
    }
    
    let juego = +(prompt("1-Arcade 2-Simulacion 3-Deportivo"));
    
    switch (juego) {
        case 1: {
            alert("manolito");
            break;
        }
        case 2: {
            alert("sims");
            break;
        }
        case 3: {
            alert("fifa");
            break;
        }
        default :
            alert ("La opcion no es correcta")
    }
    
    //Mostrando Pedido
    
    let unidades = +(prompt("¿Cuantas unidades quieres comprar?"));
    
    
        alert ("Elegiste" +" "+ unidades  +" "+ "juegos");
    
        function tuPedido(a,b,c){
            let mensaje = "Marca: " + a + "\n"; 
            mensaje+="juego: " + b  + "\n"; 
            mensaje+="unidades: " + c + "\n"; 
        
            return mensaje;
        }
    
    let completado = tuPedido(marca, juego, unidades);
    
    alert ("Tu pedido es"+ " " + "\n"+ completado);

}else{
    alert("Vuelve a intentarlo Luego");
}

