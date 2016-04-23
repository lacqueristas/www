import {indexBy} from "ramda"
import {prop} from "ramda"

// // [{type, id, attributes: {...}, relationships: {...}, links: {...}}, n]
export default indexBy(prop("type"))
// {[type]: {type, id, attributes: {...}, relationships: {...}, links: {...}}, n]
