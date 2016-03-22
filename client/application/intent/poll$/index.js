import {Observable} from "rx"

const INTERVAL: number = 1000

export default (): any => Observable.interval(INTERVAL)
