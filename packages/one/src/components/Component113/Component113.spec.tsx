import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component113 } from "./Component113"

describe("Component113", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component113 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component113 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
