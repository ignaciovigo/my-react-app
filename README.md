# Bienvenido al repositorio del proyecto  [![](https://svgur.com/i/q6b.svg)](https://the-zitro-app.vercel.app/)
## Introducción
El proyecto Zitro es una app web desarrollada con React ,mediante [create-react-app](https://create-react-app.dev/), que contiene las funcionalidades principales de un ecommerce, las cuales son:
- Visualizar productos desde una base de datos para que el usuario pueda interactuar con ellos.
- Agregar,eliminar,aumentar o disminuir productos de un carrito.
- Generar un ticket de compra al completar un formulario con los datos del usuario.
- Guardar las ventas en una base de datos.
- Actualizar el stock de los productos que se encuentran en la base de datos tras la compra.


### Aclaraciones sobre el proyecto
1. El componente [CartProvider](https://github.com/ignaciovigo/my-react-app/blob/main/src/context/CartProvider.js) se encarga de crear y proveer un contexto el cual posee la gestion del carrito.
Dicho contexto es utilizado en componentes que hacen uso de su informacion [CartList](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/CartList.js),[CartWidget](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/CartWidget.js),[Item](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/Item.js),[ItemDetail](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/ItemDetail.js),[PurchaseSummary](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/PurchaseSummary.js).

2. La cantidad maxima de un producto es de 5, establecido en el componente [CartProvider](https://github.com/ignaciovigo/my-react-app/blob/main/src/context/CartProvider.js)

3. Cada vez que se agrega o remueve productos del carrito, la aplicacion consulta hacia la base de datos
si hay stock disponible, en caso de que no haya, el usuario sera avisado y no podra concretar su compra hasta que elimine o reduzca la cantidad del producto seleccionado.

4. El proyecto tiene 2 hooks personalizados.
    - **[useProducts()](https://github.com/ignaciovigo/my-react-app/blob/main/src/hooks/useProducts.js)** Permite 4 parametros, entre ellos parametros de url y valores que son necesarios para realizar una consulta especifica hacia el servicio de Cloud Firestore. Posee y retorna estados propios con la informacion obtenida de las consultas (un array con productos como objeto). Utilizado en
    ([CarouselProducts](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/CarouselProducts.js),[ItemListContainer](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/ItemListContainer.js))
    
    - **[useProductDetail()](https://github.com/ignaciovigo/my-react-app/blob/main/src/hooks/useProductDetail.js)** Permite un solo parametro que es la id que utilizara para realizar una consulta sobre un solo producto en particular. Tambien posee estados propios que seran retornados.Utilizado en ([ItemDetailContainer](https://github.com/ignaciovigo/my-react-app/blob/main/src/components/ItemDetailContainer.js))



### Dependecias del proyecto
- *Ademas de las que brinda create-react-app*
- **bootstrap y react-bootstrap** Para el uso de clases y componentes de bootstrap.
- **react-hook-form**: Es un hook utilizado para facilitar la gestion de formularios.
- **react-icons**: Nos provee de iconos.
- **react-router-dom**: Utilizado para implementar el sistema de navegacion de la aplicacion.
- **react-toastify**: Una libreria que permite disparar notificaciones en la interfaz.
- **sass**: Preprocesador de CSS.
- **firebase**: Nos provee del servicio Cloud Firestore, una base de datos NoSQL, para almacenar, sincronizar y consultar fácilmente datos (como de los productos o ventas).

*El proyecto se encuentra desplegado, para verlo [Click Aquí](https://the-zitro-app.vercel.app/)*
