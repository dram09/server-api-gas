
## Ejecutar api

- Comando: npm install
- Comando: node index.js

Ruta login:  http://localhost:3000/api/login

 Parametros requeridos:  
 
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |


- Respuesta Existosa: ---> objecto **"user"**
- Sin respuesta: ---> objecto **"error"**
 
Ruta register: http://localhost:3000/api/logger   

Parametros requeridos:   

 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |
| `user_alt` | `numeric` | **Required**. Your API key |


- Respuesta Existosa: ---> **""**
- Sin respuesta: ---> objecto **"error"**
  

### Rutas usuario 

  Consultar todos los usuarios:  http://localhost:3000/api/users/current_page/page_size/search
  
  Metodo: GET
  
 Parametros requeridos:  
 
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `current_page` | `integer` | **Required**. Your API key |
| `page_size` | `integer` | **Required**. Your API key |
| `search` | `string` | **Optional**. Your API key |

Ejemplo:

http://localhost:3000/api/users/1/10

http://localhost:3000/api/users/1/10/dennis

Repuesta: 
- Respuesta Existosa: ---> objecto **"rows"**
- Sin respuesta: ---> objecto **"error"**


#

Consultar un unico usuario:  http://localhost:3000/api/user/find/id
  
  Metodo: GET
  
 Parametros requeridos:  
 
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | **Required**. Your API key |

Ejemplo:

 http://localhost:3000/api/user/find/1

Repuesta: 
- Respuesta Existosa: ---> objecto **"rows"**
- Sin respuesta: ---> objecto **"error"**

#

Registrar un nuevo usuario: http://localhost:3000/api/user/store
  
  Metodo: POST
  
 Parametros requeridos:  
 
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_name` | `string` | **Required**. Your API key |
| `full_name` | `string` | **Required**. Your API key |
| `mail` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |
| `roles` | `array` | **Required**. Your API key |
| `user_alt` | `integer` | **Required**. Your API key |

Repuesta: 
- Respuesta Existosa: ---> objecto **"rows"**
- Sin respuesta: ---> objecto **"error"**


#

Actualizar un usuario: http://localhost:3000/api/user/update/id
  
  Metodo: PUT
  
 Parametros requeridos:  
 
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_name` | `string` | **Required**. Your API key |
| `full_name` | `string` | **Required**. Your API key |
| `mail` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |
| `roles` | `array` | **Required**. Your API key |
| `user_alt` | `integer` | **Required**. Your API key |

Repuesta: 
- Respuesta Existosa: ---> objecto **"rows"**
- Sin respuesta: ---> objecto **"error"**

#

Eliminar un usuario: http://localhost:3000/api/user/destroy/id
  
  Metodo: DELETE
  
 Parametros requeridos:  
 
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | **Required**. Your API key |

Ejemplo:

http://localhost:3000/api/user/destroy/1

Repuesta: 
- Respuesta Existosa: ---> objecto **"rows"**
- Sin respuesta: ---> objecto **"error"**

### Rutas cliente 
Consultar cliente por referencia: http://localhost:3000/api/customer/reference
  
  Metodo: GET
  
 Parametros requeridos:  
 
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `reference` | `string` | **Required**. Your API key |


Ejemplo:

http://localhost:3000/api/customer/1111123459

Repuesta: 
- Respuesta Existosa: ---> objecto **"rows"**
- Sin respuesta: ---> objecto **"error"**



Ruta registrar recibo por validar: http://localhost:3000/api/receipt/store   

Parametros requeridos:   

 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `customer_id` | `string` | **Required**. your API key |
| `fol` | `string` | **Required**. your API key |
| `previous_measurement` | `string` | **Required**. your API key |
| `current_measurement` | `string` | **Required**. your API key |
| `consumption_m` | `string` | **Required**. your API key |
| `amount_consumption` | `string` | **Required**. your API key |
| `consumption_lt` | `string` | **Required**. your API key |
| `accumulated_debt` | `string` | **Required**. your API key |
| `interests` | `string` | **Required**. your API key |
| `agreement_payment` | `string` | **Required**. your API key |
| `billed_month` | `string` | **Required**. your API key |
| `extraordinary_service_concept` | `string` | **Required**. your API key |
| `amount_service_concept` | `string` | **Required**. your API key |
| `fee` | `string` | **Required**. your API key |
| `date_received` | `string` | **Required**. your API key |
| `start_period` | `string` | **Required**. your API key |
| `end_period` | `string` | **Required**. your API key |
| `price_lt` | `string` | **Required**. your API key |

- Respuesta Existosa: ---> **""**
- Sin respuesta: ---> objecto **"error"**




Ruta iniciar sesion cliente: http://localhost:3000/api/login/customer/referencia

Parametros requeridos:   

 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `referencia` | `string` | **Required**. your API key |


Ejemplo:

http://localhost:3000/api/login/customer/1111123863

- Respuesta Existosa: ---> **"rows"**
- Sin respuesta: ---> objecto **"error"**
