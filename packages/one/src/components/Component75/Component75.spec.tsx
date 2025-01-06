import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component75 } from "./Component75"

describe("Component75", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component75 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component75 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
