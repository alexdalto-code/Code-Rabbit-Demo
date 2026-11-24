# Guía de la demostración

Este repositorio es un laboratorio educativo aislado.

## Escenas sugeridas

1. Mostrar la estructura: frontend, API, rutas, middleware y datos simulados.
2. Explicar que el frontend es la pantalla y el backend procesa las solicitudes.
3. Ejecutar CodeRabbit Secure Deep Scan desde el panel del repositorio.
4. Revisar únicamente hallazgos que CodeRabbit realmente reporte; no afirmar resultados antes del análisis.
5. Abrir un hallazgo y mostrar su evidencia, ruta de código, severidad y recomendación.
6. Si aparece Fix with AI para ese hallazgo, solicitar el parche y revisar el Pull Request generado.
7. No fusionar cambios sin revisar el diff y ejecutar pruebas.

## Limitaciones

- Los datos son volátiles: se reinician al reiniciar Node.
- No hay persistencia real, recuperación de contraseña ni registro.
- La autenticación es deliberadamente débil.
- No publicar esta aplicación en Internet.
