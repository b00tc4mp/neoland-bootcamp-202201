### flujo crear pedido  
1. crear un botón en la vista carrito para lanzar el proceso de compra.
2. crear función disparadora que capture el evento del usuario al pinchar el botón.
3. crear la funcion manejadora para menejar place order(funcion de capa de presentacion ->Cart.js)
4. Abrir un manejador de errores (esto lo hacemos porque dentro vamos a escribir un codigo asynchronous & logico)
5. llamamos a la logica que cree un nuevo pedido (place-vehicle-order.js) y le pasamos la innfo que necesite (en ese caso = autentificacion del usario)
6. como esta logica  hace una llamada a una api (osea llamada asincrona) entonces podemos tener dos tipos de resultado(todo bien / algo mal)
7. en caso de qe todo bien entonces avisaremos al usuario de que todo ha salido bien y mostraremos los detalles del pedido
- Mostramos los detalles del pedido
- 7.1 creamos una nueva logica retrieve-order (por id)
- 7.2 creamos una nueva vista en el componente (Home) que maneje las vistas
- 7.3 creamos el componente OrderDetails.js en todo lo relacionado a vista/render (HTML/CSS)
- 7.4 linkeamos (ponemos los props y setamos la view en nuestra view de OrderDetails.js) el view del padre -->Home.js
- 7.5 gestionar llamada a Api y pintar el pedido con los datos conseguidos de dicha llamada (desarrollo similar al 3.para abajo)
8. en caso de que algo salga mal informaremos al usario del error que haya tenido.


### flujo ver mis pedidos
1. crear logica retreve-orders pasandole la autentificacion 
2. crear boton en la vista Home para ver mis pedidos (orders)
3. crear funcion disparadora que capture el evento del usuario al pinchar el boton.
4. crear nuevo componente Orders.js
5. crear funcion manejadora (en Home) igual que el punto 3, 4, 5
6. e ¡n caso de qe salga bien -> que te setee la vista a Orders.js (nuevo comp) parecido o similar al 7
7. en el componente Orders traeremos los pedidos que tenga el usuario pasandole la identificacion correspondiente (token)

print.

