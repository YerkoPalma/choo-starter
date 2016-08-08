const choo = require('choo')
const app = choo()

app.model(require('./models/app'))

app.router((route) => [
  route('/', require('./views/home'))
])

const tree = app.start()

document.body.appendChild(tree)
