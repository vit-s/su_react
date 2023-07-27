// action creators

export const Type = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CHANGE_STEP: 'CHANGE_STEP',
}

export const increment = value => ({type: Type.INCREMENT, payload: value})
export const decrement = value => ({type: Type.DECREMENT, payload: value})
export const change_step = value => ({type: Type.CHANGE_STEP, payload: value})


// const action = {
//   type: 'ADD_ARTICLE',
//   payload: {
//     text: 'Redux is owesome',
//   },
// }

