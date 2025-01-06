import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component45 } from "./Component45"

describe("Component45", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component45 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component45 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
