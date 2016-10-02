import {groupBy} from "ramda"
import {prop} from "ramda"

// // [{type, id, attributes: {...}, relationships: {...}, links: {...}}, n]
export default groupBy(prop("type"))
// {[type]: {type, id, attributes: {...}, relationships: {...}, links: {...}}, n]
