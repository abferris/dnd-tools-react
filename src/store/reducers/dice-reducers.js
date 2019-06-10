const initialState = {dice: [4,6,8,10,12,20]}

export default (state = initialState, action) => {
  const { data, type } = action
  switch (type) {
    case 'Roll':
      return data
    default:
      return state
  }
}