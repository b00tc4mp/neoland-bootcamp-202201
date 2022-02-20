### flujo crear pedido

0. Crear logica que necesitamos: 
    *pillar array cart y pasarlo a un nuebo array orders*

1. Crear un boton en la vista Cart para lanzar el proceso de compra/hacer el pedido. 
    *Crear etiqueta HTML de button place order en la vista Cart*

2. Crear funcion disparadora que capture el evento del usuario al pinchar el boton.
    *onClick*

3. Crear la FUNCION MANEJADORA(o de capa de presentacion) para manejar place order:
                const placeOrder = event => {
                    event.preventDefault()
                    try {

                        // onOrderDetails()
                    }
                    catch ({ message }) {
                        alert(message)
                    }
                }
    *ojo funcion manejadora(placeOrder) NO es la funcion principal(OrderDetails) del compo)*

    - Abrir un manejador de errores dentro de la funcion manejadora (porque dentro vamos a escribir un codigo asynchronous & logico) --> *try/catch*

    - Llamamos a la LOGICA (dentro de la funcion maneajdora) que cree un nuevo pedido (place-vehicles-order.js) y le pasamos la info que necesite (en este caso = autentificacion del usuario/TOKEN)

    - Como esta logica hace una llamada a una api ( osea llamada asincrona) entonces podemos tener dos tipos de resultado 
     (todo bien || algo mal)--> *try/catch*

4. Tomando el caso de que todo salga bien, se avisará al usuario de que todo ok  *feedback* y mostraremos los detalles del pedido (*numero de pedido, fecha, y vehiculos seleccionados*) 

    - Creamos el nuevo componente (*OrderDetails.js*) y todo lo relacionado a vista/render (HTML/CSS)
    - Creamos una nueva vista en el componente que la va a manejar (*Home.js*)
    - Linkeamos el view al padre (*Home.js*) (*{view === 'order-details' && <OrderDetails />}*) 
    - Gestionar llamada a Api y pintar el pedido con los datos conseguidos de dicha llamada (desarrollo similar al 3. para abajo)
8. en caso de que algo salga mal informaremos al usuario del error que haya tenido


### flujo ver mis pedidos
//TODO ON TEAM :D

1. crear logica retrieve-orders pasandole la autentificacion
2. crear boton en la vista Home para ver mis pedidos (orders)
3. crear funcion disparadora que capture el evento del usuario al pinchar el boton
4. crear nuevo componente Orders.js
5. crear funcion manejadora (en Home) igual que el punto 3, 4, 5... 
6. en caso de que salga bien -> que te setee la vista a Orders.js (nuevo comp) parecido o similar al 7
7. en el componente Orders traeremos los pedidos que tenga el usuario pasandole la identificacion correspondiente (token)
 

 print.
