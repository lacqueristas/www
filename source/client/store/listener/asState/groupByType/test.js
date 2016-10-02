import {describe, it} from "mocha"
import {expect} from "chai"

import groupByType from "../groupByType"

describe("groupByType()", () => {
  const resources = [
    {id: 1, type: "accounts"},
    {id: 2, type: "accounts"},
    {id: 3, type: "activities"}
  ]

  it("groups a list by the type property", () => {
    expect(groupByType(resources)).to.deep.equal({
      accounts: [
        {id: 1, type: "accounts"},
        {id: 2, type: "accounts"}
      ],
      activities: [
        {id: 3, type: "activities"}
      ]
    })
  })
})
