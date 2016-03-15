export default (database) => database
  .local
  .getItem("store")
  .distinctUntilChanged()
