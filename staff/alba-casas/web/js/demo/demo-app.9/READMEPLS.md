# PLACE ORDER

DONE logica
TODO 0. Logica para buscar una orden específica (según Order ID)

1. En vista cart agregar botón para hacer pedido
2. Crear vista de resumen de Pago, que será manejada por el Home:
   2.1 Estilos y Html
   2.2 Este componente debe recibir como props al token y al orderID
   2.3 UseEffect deberá llamar la lógica para encontrar la orden segun el ID y guardará en un useState la orden encontrada.
3. Crear funcionalidad Place Order, que llama al logic, le envia la autenticación del usuario y maneja:
   3.1. Happy path: si el llamado se ejecuta correctamente, cambia a la vista del resumen del pago, mostrando al usuario los datos de su pedido.
   3.2. Errores: si el llamado resulta en un error, le notifica al usuario con una alerta el erorr que ha tenido.
4. Al hacer click en el botón ejecutar función para hacer pedido

# VIEW ORDER HISTORY

### Flujo crear pedido

1. Crear un botón en la vista cart para hacer el pedido
2. Crear función disparadora que capture el evento del usuario al pinchar el boton
3. Crear la función manejadora (funcion que va a englobar todo el codigo que necesita nuestra aplicación) para manejar el place order (funcion de capa de presentación)
4. Manejar los errores ( esto lo hacemos porque dentro vamos a escribir un código asincrono y lógico )
5. Llamamos a la lógica placeVehiclesOrders que crea un nuevo pedido y le pasamos la información que necesite (token)
6. Como esta logica hace una llamada asincrona tenemos dos tipos de resultados
   6.1 - En caso de que todo vaya bien ->  Mostrar al usario un mensaje de feedback y mostrar los detalles del pedido
     - Creamos una nueva lógica retrieve-order (por ID) 
     - Creamos un nuevo view en el componente que maneja las vistas 
     - Crearemos el componente orderDetails 
     - linkaemos al view en home (ponemos props y seteamos la view )
   6.2 - En caso de que algo salga mal entonces mostrar un error al usuario

### Flujo ver mis Pedidos
1. crear función retrieve-orders que reciba un token y devuelva las orders
2. crear en el jsx del componente padre Home un link que contenga "ver pedidos"
3. Crear función disparadora que capture el evento del usuario al pinchar el enlace 
4. crear la función manejadora que se ejecutara al hacer click cambiando la vista
5. Crear componente Orders
6. Crear la función manejadora para manejar el retrieve-orders 
7. Manejar los errores
8. en caso de que salga bien, mostrar al usuario la vista de orders
9. en el componente Orders, al iniciarse, traeremos los pedidos que tenga el usuario pasandole la identificacion correspondiente (token)
