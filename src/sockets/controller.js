import { TicketControl } from "../models/ticket-control.js"

const ticketControl = new TicketControl()

export const socketController = (socket) => {

  socket.emit('last-ticket', `Ticket #${ticketControl.last}`)

  socket.on('next-ticket', (_, callback) => {
    const next = ticketControl.nextTicket()

    callback(next)

    // TODO: Handle new ticket to serve
  })
}
