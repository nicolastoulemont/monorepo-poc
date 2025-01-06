import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component303 } from "./Component303"

describe("Component303", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component303 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component303 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
