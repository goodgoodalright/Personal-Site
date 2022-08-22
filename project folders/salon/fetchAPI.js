fetch() //URL
     .then(res => res.json()) // parse response as JSON
     .then(data => {
          console.log(data.message)
          document.querySelector(img).src = data.message // element
     })
     .catch(err => {
          console.log(`error ${err}`)
     })