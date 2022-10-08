import React from 'react'
import axios from 'axios'

async function Thoughts({loggedIn}) {
  //  if(loggedIn) {
    
    const fetch_url = 'https://zenquotes.io/api/quotes'
    const response = await axios.get(fetch_url)
    const data = await response.json()

  console.log(data)

    const relevantData = data.map((item) => {
    return `<div class="card">
    <div class="card-body">
      "${item.q}"
      --${item.a}
    </div>
  </div>`
    })
  // }
    return (
      <div>
      {relevantData}
      </div>
    )

    }



export default Thoughts;