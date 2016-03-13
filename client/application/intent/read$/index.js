export default (database) => database
  .local
  .getItem("store")
  .startWith("{}")
  .distinctUntilChanged()
  .do((x) => console.log("intent/read$", x))
