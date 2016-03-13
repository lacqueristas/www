import {Observable} from "rx"

const FIVE_SECONDS = 5000

export default () => Observable.interval(FIVE_SECONDS)
