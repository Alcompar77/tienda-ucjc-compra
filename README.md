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

## Cómo se publica (contrato de carga del shell)

Requisito: **Node ≥ 20** (el workflow usa Node 22).

1. `npm ci && npm run build` → genera `dist/remote.js`.
2. Etiquetar y empujar: `git tag v0.2.0 && git push origin v0.2.0`.
3. El workflow `.github/workflows/release.yml` publica `dist/` en la rama `gh-pages` bajo `v0.2.0/`.
4. En el repo: *Settings → Pages* → Source: rama **`gh-pages`**, carpeta **`/`**.
5. URL esperada: `https://<usuario-o-org>.github.io/<repo>/v0.2.0/remote.js`.

Esta pieza exporta `{ nombre, version }` y registra su custom element al importar el módulo.

