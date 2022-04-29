/*
 * @Author: ExpLife0011
 * @Date: 2022-04-29 14:58:58
 * @LastEditTime: 2022-04-29 15:04:42
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

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
