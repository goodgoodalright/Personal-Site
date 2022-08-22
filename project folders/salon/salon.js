fetch() //URL
     .then(res => res.json()) // parse response as JSON
     .then(data => {
          console.log(data.message)
          document.querySelector() // element
     })
     .catch(err => {
          console.log(`error ${err}`)
     })