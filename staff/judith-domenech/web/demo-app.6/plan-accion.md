### flujo crear pedido
1. Crear un boton en la vista del carrito para empezar el proceso de compra.
2. Crear funcion disparadora que capture el evento al darle al boton 
3. Crear la función manejadora para manejar place order (funcion de capa de presentación)
4. Abrir manejador de errores (lo hacemos porque vamos a escribir codigo asincrono y logico)
5. Llama a una funcion logica que crea un nuevo pedido (placeVehiclesOrder) y le pasamos la información que necesite (parametros).
6. como esta logica hace una llamada asincrona podemos tener 2 tipos de respuestas o que salga bien o que salga mal.
7. En caso de que todo salga bien avisaremos al usuario que todo sale bien y mostraremos los datos del pedido.
    - Mostraremos los detalles del pedido
        7.1 Creamos una logica retrieve order(id)
        7.2 Crear una nueva vista en el componente que maneja las vista.
        7.3 Crear el componente orderDetails
        7.4 linkeamos el view a home (seteamos la view y pasamos props a nuestra nueva view de detalles de orden)
        
8. En caso de que todo salga mal avisaremos al usuario del error concreto 
9. 

### flujo ver mis pedidos
1. Crear un link (en la home) que te diroja a la vista de las ordenes que has hecho.
2. crear funcion disparadora que capture el evento de link
3. cear uan funcion de capa de presentacion para cambiar de vista.