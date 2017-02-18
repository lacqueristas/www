import {describe, it} from "mocha"
import {expect} from "chai"

import groupByType from "../groupByType"

describe("groupByType()", () => {
  const resources = [
    {type: "accounts"},
    {type: "accounts"},
    {type: "activities"},
  ]

  it("groups a list by the type property", () => {
    expect(groupByType(resources)).to.deep.equal({
      accounts: [
        {type: "accounts"},
        {type: "accounts"},
      ],
      activities: [
        {type: "activities"},
      ],
    })
  })
})
