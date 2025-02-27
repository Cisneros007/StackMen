import express from "express"
import morgan from "morgan";
import { engine } from "express-handlebars";
import {join, dirname} from 'path'
import { fileURLToPath } from "url"

import clientesRoutes from './routes/clientes.routes.js'

// Inicialización
const app=express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuración
app.set('port',process.env.PORT || 3000);
                       // Configurando carpeta para las vistas
app.set('views', join(__dirname, "views"));
                       // Configurando motor de plantilla
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
                        // Utilizaremos express para trabajar con interfaces y formularios
                        // Utiliza express para trabajar con archivos tipo Json
app.use(express.urlencoded({extended: false}));                    
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.render('index')
})

app.use(clientesRoutes)
// Public Files
                        // funcion Join, public los usuarios pueden utilizr lo que hay en la carpeta public
app.use(express.static(join(__dirname, 'public')));

// Run Server
app.listen(app.get('port'), ()=>
console.log('cargando el puerto',app.get('port'))
);