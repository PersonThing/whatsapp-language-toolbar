import express from 'express'
import cors from 'cors'
import GoogleTranslate from '@google-cloud/translate'
import dotenv from 'dotenv'
dotenv.config()

const translate = new GoogleTranslate.v2.Translate({
  key: process.env.GOOGLE_TRANSLATE_API_KEY // we expect this to exist in an environment variable - I define it in .env locally
})

const port = 5999
const app = express()
app.use(cors())
app.use(express.json())

// translate something
app.post('/translate', async (request, response) => {
  const options = {
    to: request.body.targetLang
  }

  let res = await translate.translate(request.body.text, options)
  console.log(res)
  response.json(res)
})

app.listen(port, () => {
  console.log('API listening')
})