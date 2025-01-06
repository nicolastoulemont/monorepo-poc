import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component326 } from "./Component326"

describe("Component326", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component326 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component326 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
