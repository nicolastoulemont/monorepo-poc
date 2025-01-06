import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component19 } from "./Component19"

describe("Component19", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component19 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component19 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
