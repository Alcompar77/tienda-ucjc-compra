# tienda-ucjc-compra

| | |
|---|---|
| **Pieza que posee el equipo** | Compra: carrito y checkout |
| **Custom element** | `<ucjc-compra>` |
| **Repositorio** | `tienda-ucjc-compra` |
| **Responsable de equipo** | Adrián Pingarrón |

### Integrantes

- Adrián Pingarrón
- Jaime Quezada
- Rodrigo Caminero
- Juan Paez
- Alessa Comparini

### Eventos que consumimos

| Evento | Origen | Datos |
|---|---|---|
| `ucjc:descubrimiento:anadir-al-carrito:v1` | Descubrimiento | `productoId`, `nombre`, `precio`, `cantidad` |
| `ucjc:identidad:sesion-cambiada:v1` | Identidad | `autenticado` (boolean), `usuarioId`, `nombre` |

### Eventos que emitimos

| Evento | Destino | Datos|
|---|---|---|
| `ucjc:compra:pedido-confirmado:v1` | Datos | `pedidoId`, `usuarioId`, `lineas` (lista de `productoId`, `nombre`, `precio`, `cantidad`), `total`, `fecha` (ISO 8601) |
| `ucjc:compra:carrito-actualizado:v1` _(opcional)_ | Quien quiera mostrar un contador | `totalArticulos`, `total` |
