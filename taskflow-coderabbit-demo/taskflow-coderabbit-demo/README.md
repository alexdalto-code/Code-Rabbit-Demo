# TaskFlow — CodeRabbit Secure demo

Aplicación educativa para demostrar análisis de seguridad de CodeRabbit Secure.

## Importante

Este proyecto contiene vulnerabilidades intencionales para un entorno de demostración.
**No usar en producción, no desplegar públicamente y no introducir datos reales.**
Las cuentas, contraseñas y datos son ficticios. La base de datos vive en memoria y se reinicia al apagar el servidor.

## Estructura

- `public/`: interfaz web (frontend).
- `src/routes/`: endpoints de la API.
- `src/middleware/`: autenticación.
- `src/db.js`: base de datos simulada.
- `server.js`: servidor Express.

## Ejecutar localmente

Requiere Node.js 18 o superior.

```bash
npm install
npm start
```

Abrir http://localhost:3000

## Cuentas ficticias

- Usuario: `bruno@taskflow.test` / `user123`
- Administrador: `admin@taskflow.test` / `admin123`

## Funcionalidades

- Inicio de sesión con token.
- Listado y creación de tareas.
- Endpoint administrativo de usuarios.
- API REST sencilla.

## Alcance de seguridad de la demo

Se dejaron debilidades intencionales para que herramientas de revisión puedan investigarlas:
- Renderizado inseguro de contenido en el navegador.
- Falta de comprobación de propiedad de tareas.
- Falta de autorización por rol en la ruta administrativa.
- Secreto de firma JWT hardcodeado.
- Contraseñas de demostración en texto plano y ausencia de limitación de intentos.

No intentes explotar estos problemas contra sistemas ajenos. Todo el código está diseñado para pruebas locales y análisis defensivo.
