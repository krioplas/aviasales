export default function utilSort(buttons, tickets) {
  buttons.map((el) => {
    if (el.id === 1 && el.active) {
      tickets.sort((a, b) => a.price - b.price);
    }
    if (el.id === 2 && el.active) {
      tickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    }
    return tickets;
  });
  return tickets;
}
