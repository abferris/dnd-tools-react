const initialState = {
  sets: [
    {
      name: "test set",
      dice: [4,6,8,10,12,20],
      mod: 12,
      roll: "roll"
    },
    {
      name: "Longbow sneak",
      dice:[8,6,6,6,6],
      mod: 4,
      roll: "roll"
    }
  ]
}

export default (state = initialState, action) => {
  const { data, type } = action
  switch (type) {
    default:
      return state
  }
}