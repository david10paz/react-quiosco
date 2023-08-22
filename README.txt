npm create vite@latest -> Seleccionas React y JavaScript

¡¡¡ Te situas dentro de react-quiosco y le tiras npm run dev -> Te establece un puerto para abrirlo (http://localhost:5173/) !!!

npm install -D tailwindcss postcss autoprefixer -> Para instalar TailwindCSS
npx tailwindcss init -p -> Nos crea 2 archivos (tailwind.config.js, el cual configuramos los archivos en los cuales queremos aplicar tailwind)
Añadimos al src/assets/index.css 3 directivas de tailwind para que funcione correctamente
Instalamos npm i react-router-dom -> Con ello podemos hacer rutas dentro del proyecto de React dentro del router.jsx -> Lo establecemos en el main.jsx también

(Cuando quieres crear un componente de react dentro de un jsx, escribe rfc y con un plugin ya instalado de React te lo autogenera)

Hemos creado parte de la vista general filtrando por categorias con todos los productos. Se encuentra dividido el Layout en 3 componentes (Sidebar, Inicip y Resumen).
Se ha creado QuioscoProvider, dentro de la carpeta context, para pasar categorias, categoria actual, cuando cambias de categoria... a cada componente creado, como al de Categoria o Productos en este caso, 
en ellos utilizamos un hook creado (useQuiosco) para comunicar el provider. 
Este QuioscoProvider se encuentra englobando como podemos ver en el main.jsx a todas las rutas del proyecto, al RouterProvider.
