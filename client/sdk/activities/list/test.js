import {describe, it} from "mocha"
import {expect} from "chai"
import list from "../list"

describe("client/sdk/activities/list", () => {
  it("returns an object with headers property", () => {
    expect(list()).to.have.property("headers")
  })

  it("returns an object with url property", () => {
    expect(list()).to.have.property("url")
  })
})
