import express from "express"
import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()


app.use(express.urlencoded())


app.get('/', function (req, res) {
	res.render('index', {mainTitle : 'Исаак Ньютон'})
})

app.get('/brief', function (req, res) {
	res.render('index', {mainTitle : 'Исаак Ньютон'})
})

app.get('/bio', function (req, res) {
	res.render('bio', {mainTitle : 'Биография'})
})

app.get('/activity', function (req, res) {
	res.render('science', {mainTitle : 'Активность'})
})

app.get('/links', function (req, res) {
	res.render('links', {mainTitle : 'Ссылки'})
})

app.post('/', (req, res) => {
	res.send(req.body)
})

app.listen(3000, () => {
    console.log('express app!!!')
})

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.use(express.static(__dirname + '/public'))