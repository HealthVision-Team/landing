Aquí tienes la guía adaptada en español para el proyecto MedVisionAR:

---

# Guía de Inicio del Proyecto MedVisionAR

```sh
npm create astro@latest -- --template basics
```




## 🚀 Estructura del Proyecto

Dentro del proyecto MedVisionAR, encontrarás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro buscará archivos `.astro` o `.md` en el directorio `src/pages/`. Cada archivo se convierte en una ruta según su nombre.


## 🧞 Comandos

Todos los comandos se ejecutan desde el directorio raíz. Aquí tienes una referencia rápida:

| Comando                    | Acción                                                   |
| :------------------------- | :------------------------------------------------------- |
| `npm install`              | Instala las dependencias                                 |
| `npm run dev`              | Inicia el servidor local en `localhost:4321`             |
| `npm run build`            | Compila el sitio en producción en la carpeta `./dist/`   |
| `npm run preview`          | Previsualiza la compilación de producción localmente     |
| `npm run astro ...`        | Ejecuta comandos de CLI de Astro, como `astro add`       |
| `npm run astro -- --help`  | Muestra todos los comandos disponibles en la CLI de Astro|
