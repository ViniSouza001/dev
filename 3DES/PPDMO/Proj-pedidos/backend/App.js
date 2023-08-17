// carregando módulos
const express = require('express')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express()
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')
const cors = require('cors')
const usuariosRouter = require('./src/routes/usuarios.routes')
const pedidosRouter = require('./src/routes/pedidos.routes');
const motoboyRouter = require('./src/routes/motoboy.routes')
const passport = require('passport');
require('./src/config/auth')(passport)
require('./src/models/Cardapio')
require('./src/models/Motoboy')

// configs
// sessão
app.use(session({
    resave: true,
    secret: "cursoNode",
    saveUninitialized: true
}))
app.use((req, res, next) => {
    if (!req.session) {
        return next(new Error("There was an internal error"))
    }
    next()
})

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
// middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash("error")
    res.locals.user = req.user || null
    next()
})

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors());

// handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static("images"))

// mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://0.0.0.0:/Restaurante", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('conectado ao MongoDB');
}).catch(err => {
    console.log("erro ao conectar ao MongoDB: " + err)
})

// public
app.use(express.static(path.join(__dirname, "src")))

// routes
app.use(usuariosRouter)
app.use(pedidosRouter)
app.use(motoboyRouter)

const PORT = 8081
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})