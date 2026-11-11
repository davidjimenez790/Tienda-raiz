// ---------- Menú para celular ----------
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("abierto");
});

// Al elegir una opción del menú, se cierra
menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => menu.classList.remove("abierto"));
});

// ---------- Aviso emergente ----------
const aviso = document.getElementById("aviso");
let temporizador;

function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.classList.add("visible");
  clearTimeout(temporizador);
  temporizador = setTimeout(() => aviso.classList.remove("visible"), 2000);
}

// ---------- Filtros de productos ----------
const filtros = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

filtros.forEach((boton) => {
  boton.addEventListener("click", () => {
    filtros.forEach((f) => f.classList.remove("activo"));
    boton.classList.add("activo");

    const categoria = boton.dataset.filtro;
    productos.forEach((p) => {
      if (categoria === "todos" || p.dataset.categoria === categoria) {
        p.classList.remove("oculto");
      } else {
        p.classList.add("oculto");
      }
    });
  });
});

// ---------- Carrito ----------
// Cada producto del carrito es un objeto: { nombre, precio, cantidad }
// Se guarda en localStorage para que no se pierda al recargar la página
let carrito = JSON.parse(localStorage.getItem("carritoRaiz")) || [];

const lista = document.getElementById("lista");
const vacio = document.getElementById("vacio");
const cantidadSpan = document.getElementById("cantidad");
const totalSpan = document.getElementById("total");
const panel = document.getElementById("panel");
const fondo = document.getElementById("fondo");
const panelPie = document.querySelector(".panel-pie");

function formatear(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

function guardar() {
  localStorage.setItem("carritoRaiz", JSON.stringify(carrito));
}

function agregar(nombre, precio) {
  const existente = carrito.find((p) => p.nombre === nombre);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
  }
  guardar();
  mostrarCarrito();
  mostrarAviso(nombre + " agregado al carrito");
}

function cambiarCantidad(posicion, cambio) {
  carrito[posicion].cantidad += cambio;
  if (carrito[posicion].cantidad <= 0) {
    carrito.splice(posicion, 1);
  }
  guardar();
  mostrarCarrito();
}

function eliminar(posicion) {
  const nombre = carrito[posicion].nombre;
  carrito.splice(posicion, 1);
  guardar();
  mostrarCarrito();
  mostrarAviso(nombre + " eliminado");
}

function mostrarCarrito() {
  lista.innerHTML = "";
  let total = 0;
  let unidades = 0;

  carrito.forEach((p, i) => {
    total += p.precio * p.cantidad;
    unidades += p.cantidad;

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="item-nombre">${p.nombre}</div>
      <div class="item-fila">
        <div class="cantidad-control">
          <button onclick="cambiarCantidad(${i}, -1)">-</button>
          <span>${p.cantidad}</span>
          <button onclick="cambiarCantidad(${i}, 1)">+</button>
        </div>
        <strong>${formatear(p.precio * p.cantidad)}</strong>
      </div>
      <button class="eliminar" onclick="eliminar(${i})">Eliminar</button>
    `;
    lista.appendChild(li);
  });

  cantidadSpan.textContent = unidades;
  totalSpan.textContent = formatear(total);

  // Si no hay productos, se muestra el mensaje y se esconden los botones
  const hayProductos = carrito.length > 0;
  vacio.style.display = hayProductos ? "none" : "block";
  panelPie.style.display = hayProductos ? "flex" : "none";
}

function abrirCarrito() {
  panel.classList.add("abierto");
  fondo.classList.add("visible");
}

function cerrarCarrito() {
  panel.classList.remove("abierto");
  fondo.classList.remove("visible");
}

// Botones "Agregar"
document.querySelectorAll(".agregar").forEach((boton) => {
  boton.addEventListener("click", () => {
    agregar(boton.dataset.nombre, Number(boton.dataset.precio));
  });
});

document.getElementById("btnCarrito").addEventListener("click", abrirCarrito);
document.getElementById("btnCerrar").addEventListener("click", cerrarCarrito);
fondo.addEventListener("click", cerrarCarrito);

document.getElementById("btnVaciar").addEventListener("click", () => {
  carrito = [];
  guardar();
  mostrarCarrito();
});

document.getElementById("btnComprar").addEventListener("click", () => {
  carrito = [];
  guardar();
  mostrarCarrito();
  cerrarCarrito();
  mostrarAviso("¡Gracias por tu compra!");
});

mostrarCarrito();

// ---------- Formulario de contacto ----------
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");
  let valido = true;

  // Se limpian los errores anteriores
  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorMensaje").textContent = "";

  if (nombre.value.trim() === "") {
    document.getElementById("errorNombre").textContent = "Escribe tu nombre.";
    valido = false;
  }
  if (!correo.value.includes("@") || !correo.value.includes(".")) {
    document.getElementById("errorCorreo").textContent = "Escribe un correo válido.";
    valido = false;
  }
  if (mensaje.value.trim().length < 10) {
    document.getElementById("errorMensaje").textContent = "El mensaje debe tener al menos 10 caracteres.";
    valido = false;
  }

  const respuesta = document.getElementById("respuesta");
  if (valido) {
    respuesta.textContent = "Mensaje enviado. Gracias, " + nombre.value + ".";
    respuesta.style.color = "green";
    formulario.reset();
  } else {
    respuesta.textContent = "";
  }
});
