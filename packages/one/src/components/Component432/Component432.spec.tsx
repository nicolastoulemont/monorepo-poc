import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component432 } from "./Component432"

describe("Component432", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component432 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component432 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
