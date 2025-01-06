import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component209 } from "./Component209"

describe("Component209", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component209 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component209 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
