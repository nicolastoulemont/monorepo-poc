import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component441 } from "./Component441"

describe("Component441", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component441 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component441 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
