const productos = [
  {
    id: 1,
    nombre: "Bujia",
    tipo: "repuesto",
    precio: 45000,
    descripcion:
      "Bujia para Frio. Estas bujias sirven para cualquier tipo de moto.",
    marca: "Genérico",
    categoria: "Motor",
    imagen: "../img/bujia.jpg",
  },
  {
    id: 2,
    nombre: "Moto Honda CB 125f",
    tipo: "moto",
    precio: 3500000,
    descripcion: "Moto honda CB 125f Deportivo. Moto de segunda",
    marca: "Honda",
    modelo: "CB 125f",
    categoria: "Deportiva",
    cilindraje: 125,
    año: 2020,
    imagen: "../img/honda.jpg",
  },
  {
    id: 3,
    nombre: "Moto Yamaha Scooter",
    tipo: "moto",
    precio: 7500000,
    descripcion: "Scooter 150 Deportivo. Moto de segunda.",
    marca: "Yamaha",
    modelo: "Scooter",
    categoria: "Scooter",
    cilindraje: 150,
    año: 2019,
    imagen: "../img/scooter.png",
  },
  {
    id: 4,
    nombre: "Guayas",
    tipo: "repuesto",
    precio: 24000,
    descripcion: "Guayas totalmente nuevas",
    marca: "Original",
    categoria: "Frenos",
    referencia: "WR7DC",
    imagen: "../img/guayas.png",
  },
  {
    id: 5,
    nombre: "Moto Yamaha XTZ",
    tipo: "moto",
    precio: 6700000,
    descripcion: "Moto yamaha XTZ",
    marca: "Yamaha",
    modelo: "XTZ",
    categoria: "Enduro",
    cilindraje: 125,
    año: 2021,
    imagen: "../img/yamaha.jpg",
  },
  {
    id: 6,
    nombre: "Cadena Reforzada Dorada",
    tipo: "repuesto",
    precio: 120000,
    descripcion: "Cadenas que te dejara impresionado",
    marca: "Original",
    categoria: "Transmisión",
    referencia: "DID 520VX3-120",
    imagen: "../img/Cadena.webp",
  },
  {
    id: 7,
    nombre: "Moto totto 125",
    tipo: "moto",
    precio: 7000000,
    descripcion: "Moto totto 125",
    marca: "Totto",
    modelo: "Totto 125",
    categoria: "Deportiva",
    cilindraje: 125,
    año: 2022,
    imagen: "../img/Moto2.jpeg",
  },
  {
    id: 8,
    nombre: "Yamaha YBR 125",
    tipo: "moto",
    precio: 4500000,
    descripcion: "Moto económica y confiable para uso urbano.",
    marca: "Yamaha",
    modelo: "YBR 125",
    categoria: "Street",
    cilindraje: "124 cc",
    año: 2020,
    imagen: "https://i.imgur.com/7X9jQ9W.jpg", // Yamaha YBR 125 real
  },
  {
    id: 9,
    nombre: "Honda CB190R",
    tipo: "moto",
    precio: 8500000,
    descripcion: "Naked sport con diseño agresivo y bajo consumo.",
    marca: "Honda",
    modelo: "CB190R",
    categoria: "Street",
    cilindraje: "184.4 cc",
    año: 2021,
    imagen: "https://motos.honda.com.ec/uploads/galeria/CBF190_Repsol.jpg", // Honda CB190R real
  },
  {
    id: 10,
    nombre: "Auteco Pulsar NS160",
    tipo: "Naked",
    precio: 6500000,
    descripcion: "Estilo deportivo y tecnología avanzada en cilindrada media.",
    marca: "Auteco",
    modelo: "Pulsar NS160",
    categoria: "Street",
    cilindraje: "160 cc",
    año: 2022,
    imagen:
      "https://cdn.globalbajaj.com/-/media/Colombia/Images/Pulsar/Product/NS160/pulsar-ns-160-miniatura.png?h=997&iar=0&w=1640&rev=24113cfe31ef4637aea335b1e6428c07&hash=8B96E4DC44ACE7CA229D1DB66A27C5ED", // Pulsar NS160 real
  },
  {
    id: 11,
    nombre: "Suzuki Gixxer 250",
    tipo: "Deportiva",
    precio: 10500000,
    descripcion: "Deportiva ligera con motor de 249 cc y ABS.",
    marca: "Suzuki",
    modelo: "Gixxer 250",
    categoria: "Sportbike",
    cilindraje: "249 cc",
    año: 2023,
    imagen:
      "https://cdnx.jumpseller.com/cash247/image/50679663/resize/1200/1200?1720965756", // Suzuki Gixxer 250 real
  },
  {
    id: 12,
    nombre: "Kawasaki KLX 230",
    tipo: "Enduro",
    precio: 11500000,
    descripcion: "Moto todoterreno con suspensión de largo recorrido.",
    marca: "Kawasaki",
    modelo: "KLX 230",
    categoria: "Off-road",
    cilindraje: "233 cc",
    año: 2022,
    imagen:
      "https://peru.kawasaki-la.com/Content/Images/SubBrand/2024-klx/24klx230s_sblp.jpg", // Kawasaki KLX 230 real
  },
  {
    id: 13,
    nombre: "Yamaha XTZ 150",
    tipo: "Enduro",
    precio: 9000000,
    descripcion: "Clásica moto de campo con motor indestructible.",
    marca: "Yamaha",
    modelo: "XTZ 150",
    categoria: "Off-road",
    cilindraje: "149 cc",
    año: 2019,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDA__NMbEomv_KPlde5zD9xIDJt4X4fbyBg&s", // Yamaha XTZ 150 real
  },
  {
    id: 14,
    nombre: "Honda XRE 300",
    tipo: "Adventure",
    precio: 12000000,
    descripcion: "Aventurera con motor monocilíndrico y ABS.",
    marca: "Honda",
    modelo: "XRE 300",
    categoria: "Adventure",
    cilindraje: "291.6 cc",
    año: 2021,
    imagen: "https://motos.honda.com.co/images/blogs/Todoterreno_XRE300.jpg", // Honda XRE 300 real
  },
  {
    id: 15,
    nombre: "Auteco AKT TT 125",
    tipo: "Enduro",
    precio: 5000000,
    descripcion: "Moto todoterreno económica para principiantes.",
    marca: "Auteco",
    modelo: "TT 125",
    categoria: "Off-road",
    cilindraje: "124.4 cc",
    año: 2018,
    imagen:
      "https://ttr.aktmotos.com/wp-content/uploads/TT-125-Hotspot-AKT.jpg", // AKT TT 125 real
  },
  {
    id: 16,
    nombre: "Suzuki DR 200",
    tipo: "Enduro",
    precio: 7500000,
    descripcion: "Moto robusta para campo y ciudad.",
    marca: "Suzuki",
    modelo: "DR 200",
    categoria: "Dual-sport",
    cilindraje: "199 cc",
    año: 2020,
    imagen:
      "https://motocaribe.net/wp-content/uploads/2013/08/suzuki-dr-650.jpg", // Suzuki DR 200 real
  },
  {
    id: 17,
    nombre: "Kawasaki D-Tracker 150",
    tipo: "Naked",
    precio: 8000000,
    descripcion: "Estilo urbano con esencia off-road.",
    marca: "Kawasaki",
    modelo: "D-Tracker 150",
    categoria: "Street",
    cilindraje: "149 cc",
    año: 2021,
    imagen:
      "https://imgcdnblog.carbay.com/wp-content/uploads/2020/10/01235441/Kawasaki-D-Tracker-warna-baru-2-650x433.jpg", // Kawasaki D-Tracker 150 real
  },
  {
    id: 18,
    nombre: "Yamaha FZ25",
    tipo: "Naked",
    precio: 11000000,
    descripcion: "Naked con motor de 249 cc y diseño musculoso.",
    marca: "Yamaha",
    modelo: "FZ25",
    categoria: "Street",
    cilindraje: "249 cc",
    año: 2022,
    imagen:
      "https://motosfast.com/cdn/shop/files/FZ-25-204-03_fc3ea8a6-25d6-4f20-9d82-c99892142214.jpg?v=1742866996", // Yamaha FZ25 real
  },
  {
    id: 19,
    nombre: "Honda CB300R",
    tipo: "Naked",
    precio: 12000000,
    descripcion: "Naked ligera con motor monocilíndrico y faros LED.",
    marca: "Honda",
    modelo: "CB300R",
    categoria: "Street",
    cilindraje: "286 cc",
    año: 2023,
    imagen: "https://motosistemahonda.com.pe/images/motos/cb300r-rojo.webp", // Honda CB300R real
  },
  {
    id: 20,
    nombre: "Kawasaki Ninja 300",
    tipo: "Deportiva",
    precio: 11500000,
    descripcion: "Deportiva de entrada con motor bicilíndrico y ABS.",
    marca: "Kawasaki",
    modelo: "Ninja 300",
    categoria: "Sportbike",
    cilindraje: "296 cc",
    año: 2021,
    imagen:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/198009/ninja-300-right-side-view.jpeg?isig=0&q=80", // Kawasaki Ninja 300 real
  },
  {
    id: 21,
    nombre: "Cilindro maestro",
    marca: "Bosch",
    categoria: "Partes del motor",
    subcategoria: "Cilindros",
    imagen: "https://example.com/images/cilindro-maestro.jpg",
    precio: 185000,
    tipo: "Original",
    descripcion: "Cilindro maestro de freno original para sistemas hidráulicos",
  },
  {
    id: 22,
    nombre: "Kit de pistones",
    marca: "Mahle",
    categoria: "Partes del motor",
    subcategoria: "Pistones",
    imagen:
      "https://masterservice.com.co/wp-content/uploads/2022/09/KIT-PISTON-186F-DIESEL-MASTERSERVICE1080X1080.jpg",
    precio: 220000,
    tipo: "Original",
    descripcion: "Juego completo de pistones para motor 4 cilindros",
  },
  {
    id: 23,
    nombre: "Válvula de admisión",
    marca: "Delphi",
    categoria: "Partes del motor",
    subcategoria: "Válvulas",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_844341-MCO49367705389_032022-O.webp",
    precio: 45000,
    tipo: "Generico",
    descripcion: "Válvula estándar para motores 1.6L",
  },
  {
    id: 24,
    nombre: "Junta de culata",
    marca: "Victor Reinz",
    categoria: "Partes del motor",
    subcategoria: "Juntas",
    imagen:
      "https://www.ro-des.com/wp-content/uploads/2014/04/junta-de-culata.jpg",
    precio: 125000,
    tipo: "Original",
    descripcion: "Junta multicapa para motores turbo",
  },
  {
    id: 25,
    nombre: "Cadena de distribución",
    marca: "Dayco",
    categoria: "Transmisión",
    subcategoria: "Cadenas",
    imagen: "https://example.com/images/cadena-distribucion.jpg",
    precio: 198000,
    tipo: "Original",
    descripcion: "Kit completo con tensor y guías",
  },
  {
    id: 26,
    nombre: "Piñón de ataque",
    marca: "Aisin",
    categoria: "Transmisión",
    subcategoria: "Piñones",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELNRUL1G2rQBYNYW3AJV7dP8xE5jjE69Lg&s",
    precio: 175000,
    tipo: "Original",
    descripcion: "Piñón para transmisiones manuales",
  },
  {
    id: 27,
    nombre: "Corona diferencial",
    marca: "Eaton",
    categoria: "Transmisión",
    subcategoria: "Coronas",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_718344-CBT76132351249_052024-O.webp",
    precio: 210000,
    tipo: "Original",
    descripcion: "Corona para diferenciales traseros",
  },
  {
    id: 28,
    nombre: "Kit de embrague",
    marca: "Luk",
    categoria: "Transmisión",
    subcategoria: "Embragues",
    imagen: "https://m.media-amazon.com/images/I/61NhyfeQz5L.jpg",
    precio: 185000,
    tipo: "Original",
    descripcion: "Kit completo con disco, plato y collarín",
  },
  {
    id: 29,
    nombre: "Caja de cambios",
    marca: "ZF",
    categoria: "Transmisión",
    subcategoria: "Caja de cambios",
    imagen:
      "https://mundimotos.com/cdn/shop/articles/cambia-la-caja-de-cambios-de-tu-moto_41048a7f-76d2-4170-884f-241711cc4c10.jpg?v=1621211163",
    precio: 1500000,
    tipo: "Generico",
    descripcion: "Caja automática reconstruida con garantía",
  },
  {
    id: 30,
    nombre: "Pastillas de freno",
    marca: "Brembo",
    categoria: "Sistema de frenos",
    subcategoria: "Pastillas de freno",
    imagen:
      "https://imbrastore.com/cdn/shop/files/P10055-3PASTILLASDEFRENOTRASHONDAXRE300SINABS-CR80-CR125R-CRF230-CR250R-CRM250R-XR250L-XRE300-KAWASAKIKX125_01-08_-KLX250-KLX250S-KX250_1995-2008_-KL_large.png?v=1698187916",
    precio: 85000,
    tipo: "Original",
    descripcion: "Para eje delantero, alto rendimiento",
  },
  {
    id: 31,
    nombre: "Discos de freno",
    marca: "Raybestos",
    categoria: "Sistema de frenos",
    subcategoria: "Discos de freno",
    imagen:
      "https://www.brembo.com/es/PublishingImages/moto/equipaggiamento-originale/prodotti/dischi-freno/Dicso-Scarmbler-2.jpg",
    precio: 135000,
    tipo: "Original",
    descripcion: "Discos ventilados delanteros",
  },
  {
    id: 32,
    nombre: "Bomba de freno",
    marca: "TRW",
    categoria: "Sistema de frenos",
    subcategoria: "Bombas de freno",
    imagen:
      "https://hondamaquina.com/imagenes/partes-de-una-bomba-de-freno.jpg.webp",
    precio: 165000,
    tipo: "Original",
    descripcion: "Bomba master cilindro nueva",
  },
  {
    id: 33,
    nombre: "Líneas de freno",
    marca: "Goodridge",
    categoria: "Sistema de frenos",
    subcategoria: "Líneas de freno",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_740359-MCO73004413894_112023-O.webp",
    precio: 75000,
    tipo: "Generico",
    descripcion: "Juego completo reforzado",
  },
  {
    id: 34,
    nombre: 'Llanta aleación 15"',
    marca: "Ronal",
    categoria: "Ruedas",
    subcategoria: "Llantas",
    imagen:
      "https://image.made-in-china.com/202f0j00NtsofcHZHYrl/15-16-17-18-19-Inch-Aluminum-Alloy-Motorcycle-Spare-Parts-Wheel-Casting-Wheel-Rims.webp",
    precio: 320000,
    tipo: "Original",
    descripcion: "Llanta ligera de aleación 15x6.5",
  },
  {
    id: 35,
    nombre: "Neumatico 195/65R15",
    marca: "Michelin",
    categoria: "Ruedas",
    subcategoria: "Neumaticos",
    imagen:
      "https://interllantas.com/wp-content/uploads/images2/Llanta-TORNEL-TURBO-EX-195-65-R15-89T.jpg",
    precio: 280000,
    tipo: "Original",
    descripcion: "Neumatico todo tiempo con garantía",
  },
  {
    id: 36,
    nombre: "Amortiguador delantero",
    marca: "KYB",
    categoria: "Ruedas",
    subcategoria: "Amortiguadores",
    imagen:
      "https://gxmotor.co/cdn/shop/files/826210_705eea6b-f4ac-4d4d-96fc-00e424b76b64.jpg?v=1715358524",
    precio: 185000,
    tipo: "Original",
    descripcion: "Amortiguador gas para suspensión delantera",
  },
  {
    id: 37,
    nombre: "Buje de suspension",
    marca: "Moog",
    categoria: "Ruedas",
    subcategoria: "Bujes",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_875817-CBT81454102897_122024-O.webp",
    precio: 65000,
    tipo: "Generico",
    descripcion: "Buje inferior para brazo de control",
  },
  {
    id: 38,
    nombre: "Rodamiento de rueda",
    marca: "SKF",
    categoria: "Ruedas",
    subcategoria: "Rodamientos",
    imagen: "https://example.com/images/rodamiento.jpg",
    precio: 95000,
    tipo: "Original",
    descripcion: "Rodamiento sellado para eje delantero",
  },
  {
    id: 39,
    nombre: "Termostato",
    marca: "Wahler",
    categoria: "Partes del motor",
    subcategoria: "Sistema de enfriamiento",
    imagen:
      "https://mundimotos.com/cdn/shop/products/BJL-6012-37_4e1b0afe-7845-4aa4-91d1-f2b0e550d2e5_600x.png?v=1634330439",
    precio: 55000,
    tipo: "Original",
    descripcion: "Termostato para sistema de refrigeración",
  },
  {
    id: 40,
    nombre: "Filtro de aceite",
    marca: "Mann-Filter",
    categoria: "Partes del motor",
    subcategoria: "Filtros",
    imagen: "https://example.com/images/filtro-aceite.jpg",
    precio: 35000,
    tipo: "Original",
    descripcion: "https://gxmotor.co/cdn/shop/files/831127.jpg?v=1718138888",
  },
];

function mostrarOpciones() {
  const tipo = document.getElementById("tipo").value;
  document.getElementById("opcionesMoto").style.display =
    tipo === "moto" ? "block" : "none";
  document.getElementById("opcionesRepuesto").style.display =
    tipo === "repuesto" ? "block" : "none";
}

// Función para validar el término de búsqueda
function validarTerminoBusqueda(termino) {
  if (!isNaN(termino) && parseFloat(termino) < 0) {
    alert("Por favor ingrese texto para la búsqueda, no números negativos");
    return false;
  }

  if (termino.trim().length > 0 && termino.trim().length < 3) {
    alert("Por favor ingrese una palabra que contenga más de dos caracteres");
    return false;
  }

  return true;
}

function buscarProductos(termino = null) {
  let resultados = [];

  // Búsqueda desde la barra principal
  if (termino) {
    const term = termino.toLowerCase().trim();
    resultados = productos.filter(
      (p) =>
        p.nombre.toLowerCase().includes(term) ||
        p.marca.toLowerCase().includes(term) ||
        (p.descripcion && p.descripcion.toLowerCase().includes(term)) ||
        (p.modelo && p.modelo.toLowerCase().includes(term)) ||
        (p.categoria && p.categoria.toLowerCase().includes(term)) ||
        (p.subcategoria && p.subcategoria.toLowerCase().includes(term))
    );
  }
  // Búsqueda desde filtros avanzados
  else {
    const tipo = document.getElementById("tipo").value;

    if (tipo === "moto") {
      const marca = document.getElementById("marcaMoto").value;
      const tipoMoto = document.getElementById("tipoMoto").value;
      const cilindraje = document.getElementById("tipoCilindraje").value;
      const anio = document.getElementById("tipoAños").value;

      resultados = productos.filter(
        (p) =>
          p.tipo === "moto" && // Corregido para coincidir con tus datos
          (!marca || p.marca === marca) &&
          (!tipoMoto || p.categoria === tipoMoto) &&
          (!cilindraje ||
            (p.cilindraje && p.cilindraje.toString() === cilindraje)) &&
          (!anio || (p.año && p.año.toString() === anio))
      );
    } else if (tipo === "repuesto") {
      const marca = document.getElementById("marcaRepuesto").value;
      const categoria = document.getElementById("categoria").value;
      const subcategoria = document.getElementById("subcategoria").value;

      resultados = productos.filter(
        (p) =>
          p.tipo === "repuesto" && // Corregido para coincidir con tus datos
          (!marca || p.marca === marca) &&
          (!categoria ||
            (p.categoria &&
              p.categoria.toLowerCase().includes(categoria.toLowerCase()))) &&
          (!subcategoria ||
            (p.subcategoria &&
              p.subcategoria
                .toLowerCase()
                .includes(subcategoria.toLowerCase())))
      );
    }
  }

  return resultados.length > 0 ? resultados : productos;
}

function mostrarProductos(productosFiltrados) {
  const productGrid = document.querySelector(".product-grid");
  const tituloResultados = document.getElementById("tituloResultados");

  if (!productGrid) return;

  productGrid.innerHTML = "";

  if (productosFiltrados.length === 0) {
    tituloResultados.textContent = "No se encontraron resultados";
    productGrid.innerHTML =
      '<div class="col-12 text-center py-5"><h4>No encontramos productos con esos criterios</h4></div>';
    return;
  }

  tituloResultados.textContent = `Mostrando ${productosFiltrados.length} productos`;

  productosFiltrados.forEach((producto) => {
    const precioFormateado = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(producto.precio);

    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 mb-4";
    card.innerHTML = `
      <div class="product-card">
          <div class="product-image-container">
              <img src="${producto.imagen}" class="product-image" alt="${
      producto.nombre
    }">
          </div>
          <div class="product-info">
              <h3 class="product-title">${producto.nombre}</h3>
              <p class="product-brand">${producto.marca}</p>
              <p class="product-description">${producto.descripcion.substring(
                0,
                80
              )}${producto.descripcion.length > 80 ? "..." : ""}</p>
              <div class="product-price">${precioFormateado}</div>
          </div>
          <button class="product-detail-btn" onclick="mostrarDetalleProducto(${
            producto.id
          })">
              Ver detalles
          </button>
          <div class="modal fade" id="verDetallesModal" tabindex="-1" aria-labelledby="verDetallesModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="verDetallesModalLabel">Detalles especificos</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <!-- Espacio para la imagen -->
                                    <div class="col-md-6 d-flex justify-content-center align-items-center border-end">
                                        <img src="../img/bujia.jpg" alt="Imagen del producto" class="img-fluid" id="productoImagen">
                                    </div>
                                    <!-- Espacio para los detalles del producto -->
                                    <div class="col-md-6">
                                        <h5>Bujia</h5>
                                        <p>Bujia para clima frio</p>
                                        <p><strong>Precio:</strong> 45.000 COP</p>
                                        <p><strong>Tipo de repuesto:</strong> Generico</p>
                                        <p><strong>Cantidad:</strong> 20</p>
                                        <p><strong>Referencia:</strong> CPR8EA-9</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                                <a href="https://wa.me/573123355717?text=Hola,%20quiero%20más%20información" target="_blank">
                                  <button class="btn btn-success" data-bs-dismiss="modal">
                                    Ir a WhatsApp<i class="fa-brands fa-whatsapp fa-1x"></i></button>
                                  </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
      `;
    productGrid.appendChild(card);
  });
}

function mostrarDetalleProducto(id) {
  const producto = productos.find((p) => p.id === id);
  if (producto) {
    // Aquí podrías abrir un modal o redirigir a una página de detalle
    alert(`Detalles de: ${producto.nombre}\nPrecio: ${producto.precio} COP`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Configurar búsqueda principal
  const searchForm = document.querySelector(".navbar .form-inline");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchTerm = this.querySelector('input[type="search"]').value;

      if (!validarTerminoBusqueda(searchTerm)) {
        return;
      }

      const resultados = buscarProductos(searchTerm);
      mostrarProductos(resultados);

      sessionStorage.setItem("searchTerm", searchTerm);

      if (!window.location.pathname.includes("categoria.html")) {
        window.location.href = "categoria.html";
      }
    });
  }

  // Configurar botón de búsqueda avanzada
  const btnBuscar = document.getElementById("btnBuscar");
  if (btnBuscar) {
    btnBuscar.addEventListener("click", function () {
      const resultados = buscarProductos();
      mostrarProductos(resultados);
    });
  }

  // Mostrar resultados al cargar categoría.html
  if (window.location.pathname.includes("categoria.html")) {
    const searchTerm = sessionStorage.getItem("searchTerm");
    if (searchTerm) {
      const resultados = buscarProductos(searchTerm);
      mostrarProductos(resultados);
      sessionStorage.removeItem("searchTerm");
    } else {
      mostrarProductos(productos);
    }
  }

  // Inicializar los selectores
  mostrarOpciones();
});
