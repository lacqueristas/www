import {describe, it} from "mocha"
import {expect} from "chai"
import list from "~/client/sdk/activities/list"

describe("client/sdk/activities/list", () => {
  it("returns an object with headers property", () => {
    expect(list()).to.have.property("headers")
  })
})
