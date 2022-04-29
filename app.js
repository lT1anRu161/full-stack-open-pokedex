/*
 * @Author: ExpLife0011
 * @Date: 2022-04-29 14:58:58
 * @LastEditTime: 2022-04-29 17:50:12
 * @LastEditors: ExpLife0011
 * @Description:
 * @FilePath: /full-stack-open-pokedex/app.js
 * MIT License
 */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send(1)
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
