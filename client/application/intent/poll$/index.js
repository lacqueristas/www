import {Observable} from "rx"

const ONE_SECOND = 5000

export default () => Observable.interval(ONE_SECOND)
