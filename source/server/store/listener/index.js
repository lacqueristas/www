export const initialState = {}

export default function listener (state = initialState, signal) {
  switch (signal.type) {
    default: {
      console.warn({signal})

      return state
    }
  }
}
