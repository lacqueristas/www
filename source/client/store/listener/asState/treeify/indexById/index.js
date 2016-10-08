import {indexBy} from "ramda"
import {prop} from "ramda"

// // [{type, id, attributes: {...}, relationships: {...}, links: {...}}, n]
export default indexBy(prop("id"))
// {[id]: {type, id, attributes: {...}, relationships: {...}, links: {...}}, n]
