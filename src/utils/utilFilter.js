export default function utilFilter(filter, tickets) {
  let checkedFilter = filter.filter((el) => el.checked);
  checkedFilter = checkedFilter.map((el) => el.filterNum);
  let newState;
  if (checkedFilter.length === 0) {
    newState = [];
  } else {
    newState = tickets.map((el) => {
      const inside = el.segments[0].stops.length;
      let newEl;
      if (checkedFilter.includes(inside)) {
        newEl = el;
        return newEl;
      }
      return newEl;
    });
    newState = newState.filter((item) => item !== undefined);
  }
  return { newState, checkedFilter };
}
