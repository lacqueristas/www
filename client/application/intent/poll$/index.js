import {Observable} from "rx"

const INTERVAL = 1000

export default () => Observable.interval(INTERVAL)
