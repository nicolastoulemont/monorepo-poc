import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component71 } from "./Component71"

describe("Component71", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component71 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component71 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
