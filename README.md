
# tienda-ucjc-compra

|                               |                            |
| ----------------------------- | -------------------------- |
| **Pieza que posee el equipo** | Compra: carrito y checkout |
| **Custom element**            | `<ucjc-compra>`            |
| **Repositorio**               | `tienda-ucjc-compra`       |
| **Responsable de equipo**     | Adrián Pingarrón           |

### Integrantes

- Adrián Pingarrón
- Jaime Quezada
- Rodrigo Caminero
- Juan Paez
- Alessa Comparini

### Eventos que consumimos

| **Evento** | **Origen** | **Datos** |
| ---------- | ---------- | --------- |
| `ucjc:descubrimiento:anadir-al-carrito@1` | Descubrimiento | `productoId`, `nombre`, `precio`, `cantidad` |
| `ucjc:identidad:sesion-cambiada@1` | Identidad | `autenticado` (boolean), `usuario` (objeto con `id`) |

### Eventos que emitimos

| **Evento** | **Destino** | **Datos** |
| ---------- | ----------- | --------- |
| `ucjc:compra:pedido-confirmado@1` | Datos | `pedidoId`, `usuarioId`, `creadoEn` (ISO 8601), `total`, `lineas` (lista de `productoId`, `nombre`, `precio`, `cantidad`) |

Compra genera el `pedidoId` al confirmar el pedido.
