🎬 CineCali Premium Experience | Sistema Inteligente de Gestión Cinematográfica

Sistema web para la gestión de taquilla, control de funciones, recaudación de ingresos, seguimiento estadístico y administración operativa de un cine.

📌 Descripción del Proyecto
CineCali Premium Experience es una aplicación web desarrollada como parte del proyecto académico de Desarrollo Web. Su propósito es facilitar el control y administración de las operaciones básicas de un cine mediante una plataforma interactiva, moderna y fácil de utilizar.

La aplicación permite gestionar el acceso al sistema, registrar funciones cinematográficas, calcular la recaudación obtenida por la venta de boletas, controlar cambios de asientos con recargos especiales, visualizar estadísticas mediante gráficas dinámicas y capturar evidencia fotográfica del operador.

La plataforma fue desarrollada utilizando tecnologías web modernas para ofrecer una experiencia intuitiva y profesional.

🎯 Objetivo
Desarrollar una solución web que permita organizar, controlar y automatizar el proceso de gestión de taquilla de un cine, optimizando el registro de funciones, el cálculo de ingresos y el seguimiento de la información mediante herramientas digitales.

⚙️ Características Principales
🎬 Gestión de funciones: registro de películas, salas y ventas realizadas.
🔐 Inicio de sesión seguro: control de acceso mediante autenticación de usuarios.
💰 Cálculo de recaudación: cálculo automático de ingresos por venta de boletas.
🔑 Validación de seguridad: confirmación mediante clave de acceso "CINE".
🪑 Cambio de asientos: aplicación automática de recargos según el horario establecido.
📊 Dashboard estadístico: seguimiento de ingresos, boletas vendidas y funciones registradas.
📈 Gráficas dinámicas: representación visual de las recaudaciones generadas.
📸 Captura fotográfica: registro visual del operador mediante la cámara del dispositivo.
🕒 Fecha y hora en tiempo real: actualización automática del reloj del sistema.
🎞️ Funcionalidades del Sistema
🔐 Inicio de Sesión
El sistema valida las siguientes credenciales:

Usuario

Cinecali
Contraseña

Estrenos
Una vez autenticado, el usuario podrá acceder al panel principal del sistema.

🍿 Registro de Funciones
Permite registrar:

Nombre de la película.
Sala asignada.
Cantidad de boletas vendidas.
Precio por boleta.
💰 Cálculo de Recaudación
La recaudación total se obtiene mediante la fórmula:

Recaudación = Cantidad de Boletas × Precio por Boleta
Antes de mostrar el resultado, el sistema presenta un efecto de carga para simular el procesamiento de la información.

🔑 Validación de Seguridad
Después del cálculo se solicita la siguiente clave:

CINE
Si la clave es correcta:

✅ Guarda el registro.

✅ Actualiza las estadísticas.

✅ Limpia el formulario.

Si la clave es incorrecta:

❌ Regresa automáticamente al inicio de sesión.

🪑 Cambio de Asientos
El sistema permite gestionar cambios de ubicación para los espectadores.

Regla de negocio
Entre:

3:00 PM y 6:00 PM
se aplica automáticamente un:

5% de recargo
sobre el valor base de la boleta.

📊 Dashboard Inteligente
El sistema muestra en tiempo real:

💰 Ingresos acumulados.
🎟️ Total de boletas vendidas.
🎬 Número de funciones registradas.
📈 Gráficas Dinámicas
Implementadas mediante Chart.js para visualizar:

Recaudaciones por función.
Comportamiento de ventas.
Evolución de ingresos.
📸 Captura Fotográfica
Permite:

Activar la cámara.
Capturar fotografías.
Visualizar la evidencia tomada.
Registrar visualmente al operador.
🛠️ Tecnologías Utilizadas
Tecnología	Descripción
HTML5	Estructura de la aplicación web.
CSS3	Diseño visual y estilos.
JavaScript	Lógica, interacción y validaciones.
Chart.js	Generación de gráficas dinámicas.
GitHub Pages	Publicación y despliegue del proyecto.
GitHub	Control de versiones y repositorio.
📂 Estructura del Proyecto
CasoaCine
│
├── index.html
├── README.md
│
├── css
│   └── style.css
│
├── js
│   ├── auth.js
│   ├── registro.js
│   ├── grafica.js
│   └── foto.js
│
└── img
🚀 Acceso al Proyecto
Para ejecutar el proyecto localmente:

Descargar o clonar el repositorio.
Abrir la carpeta del proyecto.
Ejecutar el archivo:
index.html
Ingresar las credenciales correspondientes.
Utilizar las funcionalidades disponibles en el sistema.
🌎 Alcance del Proyecto
El proyecto está enfocado en la simulación de la administración básica de un cine, incorporando herramientas de control, monitoreo y análisis que permiten optimizar la gestión de funciones y ventas de taquilla.

🎓 Contexto Académico
Este desarrollo corresponde al Caso de Estudio: Sistema de Cine Básico con Gráficas y Cambio de Asientos, realizado dentro de las actividades académicas de la asignatura de Desarrollo Web.

👩‍💻 Autora
Helen Yessenia Jaramillo Caicedo

Proyecto Académico de Desarrollo Web
🎬 CineCali Premium ExperienceSistema Inteligente de Gestión Cinematográfica
