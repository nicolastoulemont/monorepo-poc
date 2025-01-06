import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component167 } from "./Component167"

describe("Component167", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component167 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component167 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
