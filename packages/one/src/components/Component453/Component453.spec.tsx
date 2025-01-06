import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component453 } from "./Component453"

describe("Component453", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component453 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component453 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
