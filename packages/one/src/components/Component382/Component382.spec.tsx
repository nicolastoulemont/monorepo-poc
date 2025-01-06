import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component382 } from "./Component382"

describe("Component382", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component382 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component382 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
