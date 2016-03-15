export default (database) => database
  .local
  .getItem("store")
  .startWith("{}")
  .distinctUntilChanged()
