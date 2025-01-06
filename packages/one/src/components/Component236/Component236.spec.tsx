import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component236 } from "./Component236"

describe("Component236", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component236 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component236 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
