import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component229 } from "./Component229"

describe("Component229", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component229 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component229 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
