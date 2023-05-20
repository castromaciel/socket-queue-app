const ticket1Label = document.querySelector('#ticket1Label')
const desktop1Label = document.querySelector('#desktop1Label')

const ticket2Label = document.querySelector('#ticket2Label')
const desktop2Label = document.querySelector('#desktop2Label')

const ticket3Label = document.querySelector('#ticket3Label')
const desktop3Label = document.querySelector('#desktop3Label')

const ticket4Label = document.querySelector('#ticket4Label')
const desktop4Label = document.querySelector('#desktop4Label')

const socket = io()

socket.on('status', (payload) => {
  const [ ticket1, ticket2, ticket3, ticket4 ] = payload
  
  if (ticket1) {
    ticket1Label.innerText = `Ticket ${ticket1.number}`
    desktop1Label.innerText = ticket1.desktop
  }
  
  if (ticket2) {
    ticket2Label.innerText = `Ticket ${ticket2.number}`
    desktop2Label.innerText = ticket2.desktop
  }

  if (ticket3) {
    ticket3Label.innerText = `Ticket ${ticket3.number}`
    desktop3Label.innerText = ticket3.desktop
  }

  if (ticket4) {
    ticket4Label.innerText = `Ticket ${ticket4.number}`
    desktop4Label.innerText = ticket4.desktop
  }
})