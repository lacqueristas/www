export default (database: Object): any => database
  .local
  .getItem("store")
  .distinctUntilChanged()
  .share()
