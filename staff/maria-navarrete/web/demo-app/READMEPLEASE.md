# PLACE ORDER

DONE 
0. Logica para buscar una orden específica (según Order ID)
Logica para traer los vehiculos de una orden
TODO 
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