const click$ = (event$) => event$.events("click")

const down$ = (element$) => element$.select(".down")
const up$ = (element$) => element$.select(".up")

const downClick$ = (source) => click$(down$(source))
const upClick$ = (source) => click$(up$(source))

export {
  downClick$,
  upClick$
}
