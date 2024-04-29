# Usa la imagen oficial de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY src ./src

# Instala las dependencias de desarrollo y de producción
RUN npm install

# Instala TypeScript globalmente para ts-node
RUN npm install -g typescript

# Comando para ejecutar la aplicación con ts-node
CMD ["npm", "start"]
