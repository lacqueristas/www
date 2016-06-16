import {describe, describe as context, it} from "mocha"
import {expect} from "chai"

import asNative from "./index"

describe("asNative()", () => {
  context("when given an empty request", () => {
    const request = {
      text: null
    }

    it("returns an empty record", () => {
      expect(asNative(request)).to.deep.equal({})
    })
  })

  context("when given a JSON request", () => {
    const request = {
      text: "{\"test\": 1}"
    }

    it("returns the payload", () => {
      expect(asNative(request)).to.deep.equal({test: 1})
    })
  })
})
