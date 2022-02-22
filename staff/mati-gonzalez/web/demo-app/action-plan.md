### flujo crear pedido
1. crear un boton en la vista carrito para lanzar el proceso de compra
2. crear funcion disparadora que capture el evento del usuario al pinchar el boton 
3. crear la funcion manejadora para manejar place order (funcion de capa de presentacion)
4. abrir un manejador de errores (esto lo hacemos porque dentro vamos a escribir un codigo asynchronous & logico)
5. llamamos a la logica que cree un nuevo pedido (place-vehicles-order.js) y le pasamos la info que necesite (en este caso = autentificacion del usuario)
6. como esta logica hace una llamada a una api ( osea llamada asincrona? ) entonces podemos tener dos tipos de resultado ( todo bien || algo mal) 
7. en caso de que todo bien entonces avisaremos al usuario de que todo ha salido bien y mostraremos los detalles del pedido
- Mostraremos los detalles del pedido
- 7.1. creamos una nueva Logica retrieve-order (por id)
- 7.2. creamos un nueva vista en el componente que maneja las vistas
- 7.3. crearemos el componente OrderDetails.js 
- 7.3. linkeamos (ponemos los props y seteamos la view a nuestra nueva view de detalles de orden) el view al papixulo, en este caso Home.js 
8. en caso de que algo salga mal informaremos al usuario del error que haya tenido


### flujo ver mis pedidos
//TODO for tmr : --^ 


//TODO b4 writing any code write a plan of action, discuss with peers and get to the plan of actions ALWAYS b4 actually coding...