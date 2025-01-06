import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component189 } from "./Component189"

describe("Component189", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component189 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component189 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
