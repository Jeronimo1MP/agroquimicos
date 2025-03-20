document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then(data => {
        // Acceder al arreglo dentro del JSON
        const productosArray = data.productos;
  
        // Seleccionar el contenedor principal donde se agregarán los productos
        const contenedorPrincipal = document.createElement('section');
        document.body.appendChild(contenedorPrincipal);
  
        // Iterar sobre los productos y generar la estructura HTML
        productosArray.forEach(producto => {
          // Crear el contenedor del producto
          const contenedorProducto = document.createElement('div');
          contenedorProducto.classList.add('Contenedor_Productos');
  
          // Crear el contenedor de imágenes
          const contenedorImagenes = document.createElement('div');
          contenedorImagenes.classList.add('Contenedor_Imagenes');
          const imagen = document.createElement('img');
          imagen.src = producto.imagen; // Ruta de la imagen
          imagen.alt = producto.nombre; // Texto alternativo
          contenedorImagenes.appendChild(imagen);
  
          // Crear el contenedor de información
          const contenedorInformacion = document.createElement('div');
          contenedorInformacion.classList.add('informacion');
  
          const titulo = document.createElement('div');
          titulo.classList.add('titulo');
          titulo.textContent = producto.nombre;
  
          const descripcion = document.createElement('div');
          descripcion.classList.add('descripcion');
          descripcion.textContent = producto.descripcion;
  
          const boton = document.createElement('button');
          boton.classList.add('boton');
          boton.textContent = 'Agregar al carrito';
  
          // Añadir título, descripción y botón al contenedor de información
          contenedorInformacion.appendChild(titulo);
          contenedorInformacion.appendChild(descripcion);
          contenedorInformacion.appendChild(boton);
  
          // Añadir contenedor de imágenes e información al contenedor del producto
          contenedorProducto.appendChild(contenedorImagenes);
          contenedorProducto.appendChild(contenedorInformacion);
  
          // Añadir el producto al contenedor principal
          contenedorPrincipal.appendChild(contenedorProducto);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  