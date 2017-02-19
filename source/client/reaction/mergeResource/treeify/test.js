import {describe, it} from "mocha"
import {expect} from "chai"

import treeify from "../treeify"

describe("treeify()", () => {
  const resources = [
    {
      id: 1,
      type: "accounts",
    },
    {
      id: 2,
      type: "accounts",
    },
    {
      id: 3,
      type: "activities",
    },
  ]

  it("groups a list by the type property", () => {
    expect(treeify(resources)).to.deep.equal({
      accounts: {
        1: {
          id: 1,
          type: "accounts",
        },
        2: {
          id: 2,
          type: "accounts",
        },
      },
      activities: {
        3: {
          id: 3,
          type: "activities",
        },
      },
    })
  })
})
