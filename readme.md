# DISCORD BOT

## Estructura de Carpetas
La aplicación se estructura con la siguiente jerarquía de carpetas, siguiendo un patrón modular:

```
DISCORD_BOT
|--📂 .github
|--📂 dist
|--📂 node_modules
|--📂 src
|   |--📂 api
|   |   |--📄 devfapi.ts
|   |--📂 bot
|   |   |--📄 createMessage.ts
|   |   |--📄 index.ts
|   |--📂 config
|   |   |--📄 index.ts
|   |--📂 controllers
|   |   |--📄 circleBot.ts
|   |   |--📄 index.ts
|   |--📂 interfaces
|   |   |--📄 index.ts
|   |--📂 lib
|   |   |--📂 logger.ts
|   |--📂 services
|   |   |--📄 campusServices.ts
|   |   |--📄 index.ts
|   |--📄 main.ts
|--📄 .env
|--📄 .gitignore
|--📄 Dockerfile
|--📄 package-lock.json
|--📄 package.json
|--📄 tsconfig.json
```

--- 
### Descripción de Carpetas y Archivos

- **src**: Directorio fuente.
  - **api**: Contiene las definiciones de los puntos de acceso para la API.
  - **bot**: Lógica del bot de Discord.
  - **config**: Configuraciones, incluyendo variables de entorno.
  - **controllers**: Controladores que manejan la lógica de negocio.
  - **interfaces**: Definiciones de las interfaces TypeScript.
  - **lib**: Bibliotecas y herramientas auxiliares.
  - **services**: Servicios para manejar operaciones específicas, como `campusServices`.
  - **.env**: Archivo para variables de entorno.

--- 

## Arquitectura basada en Capas:

1. **Capa de Presentación** (`src/bot`):
   - **Manejo de Mensajes**: Interactúa directamente con la API de Discord para recibir y enviar mensajes.
   - **Comandos**: Los comandos que los usuarios pueden invocar.

2. **Capa de Lógica de Negocio** (`src/controllers`, `src/services`):
   - **Controllers (`circleBot.ts`)**: Aquí se procesan las interacciones con el bot y se invoca la lógica de negocio subyacente.
   - **Services (`campusServices.ts`)**: Contiene servicios que encapsulan la lógica de negocio, como la comunicación con APIs externas.

3. **Capa de Acceso a Datos** (`src/api`):
   - **Integración API (`devapi.ts`)**: Maneja las solicitudes HTTP a servicios externos, encapsulando las operaciones de la API.

4. **Capa de Configuración** (`src/config`):
   - **Carga de Configuración (`index.ts`)**: Centraliza la configuración del bot y otras partes del sistema, utilizando variables de entorno para manejar las credenciales y configuraciones sensibles.

5. **Capa de Infraestructura / Utilidades** (`src/lib`):
   - **Logging (`logger.ts`)**: Provee herramientas de logging a través del uso de la librería `winston`, permitiendo un seguimiento detallado de la actividad y errores.

### Principios de Diseño:

- **Separación de preocupaciones**: Claramente separa la lógica de negocio, la configuración y la interfaz de usuario.
- **Modularidad**: Cada módulo o carpeta tiene una responsabilidad única, facilitando la comprensión y el mantenimiento.
- **Reutilización**: Los módulos y servicios son diseñados para ser reutilizables, evitando la duplicidad de código.
- **Escalabilidad**: La estructura modular permite añadir fácilmente más funcionalidades o servicios.

### Uso de TypeScript:

- **Seguridad de Tipos**: Proporciona una capa adicional de seguridad mediante la verificación de tipos en tiempo de compilación.
- **Mejoras en el tiempo de desarrollo**: Facilita el desarrollo con características como la autocompletación y la detección de errores en tiempo de diseño.
- **Mantenibilidad**: Hace que el código sea más legible y mantenible, especialmente útil a medida que la base de código crece y el proyecto evoluciona.

### Herramientas y Frameworks Utilizados:

- **Node.js y npm**: Como entorno de ejecución y gestor de paquetes.
- **TypeScript**: Para añadir tipado estático al lenguaje de JavaScript.
- **Discord.js**: Una biblioteca para interactuar con la API de Discord.
- **Axios**: Para realizar solicitudes HTTP.
- **dotenv**: Para gestionar las variables de entorno.
- **Winston**: Para los registros (logs).
