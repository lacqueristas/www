import {Observable} from "rx"

const FIVE_SECONDS = 1000

export default () => Observable.interval(FIVE_SECONDS)
