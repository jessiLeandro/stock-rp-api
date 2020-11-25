require("dotenv").config()
require("./helpers/loadenv")
const Express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const logger = require("morgan")
const databaseHelper = require("./helpers/database")
const errorFormatter = require("./helpers/errors/formatter")
const loginRoute = require("./routes/login")
const protectRoute = require("./routes/protect")
const { auth } = require("./middlewares/authentic")

const app = Express()

/** MIDDLEWARES */
app.use(logger("dev"))
app.use(
  cors({
    origin: process.env.ORIGIN || "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
)
app.use(Express.static("public"))
app.use(bodyParser.json())

app.use("/oapi", loginRoute)
app.use("/api", auth, protectRoute)

app.use((err, req, res) => {
  console.error(err.stack || err)
  console.error(JSON.stringify(err))
  const formattedError = errorFormatter(err)

  // console.log("err", err);
  // console.log(formattedError);

  console.log(formattedError.status)
  res.status(formattedError.status || 500)
  res.json(formattedError)
})

databaseHelper.isDatabaseConnected().then(() => {
  const { PORT } = process.env

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
  })
})
