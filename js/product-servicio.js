// Obtener todos los productos
const productList = () => fetch(' http://localhost:3000 ')
.then(respuesta => respuesta.json())
.catch(error=>console.log(error))

// Crear un producto
const createProduct = (imagen, nombre, precio, categoria, descripcion) => {
  return fetch(' http://localhost:3000/casa_Hufflepuff', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({ imagen, nombre, precio, categoria, descripcion, id: uuid.v4() })
  }).then(respuesta =>{
    if(respuesta.ok){
       return respuesta.body
    }

  })
throw new Error ("No se pudo crear el producto")
}
export const productosServivcios={
    listaProductos,
    crearProductos,
}

// Eliminar un producto
const deleteProduct = (id) => {
  return fetch(`https:// /${id}`, {
    method: 'DELETE'
  })
}

// Obtener el detalle de un producto
const productDetail = (id) => {
  return fetch(`https:// /${id}`).then(res => res.json())
}

// Actualizar un producto
const updateProduct = (imagen, nombre, precio, categoria, descripcion, id) => {
  return fetch(`https://   /${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ imagen, nombre, precio, categoria, descripcion })
  }).then(res => res)
    .catch(error => console.log(error))
}

// Obtener una cantidad limitada de productos

const getLimitProduct = () => {
  return fetch('https://').then(res => res.json())
}

export const productService = {
  productList,
  createProduct,
  deleteProduct,
  productDetail,
  updateProduct,
  getLimitProduct
}
