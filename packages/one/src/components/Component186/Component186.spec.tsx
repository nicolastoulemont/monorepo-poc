import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component186 } from "./Component186"

describe("Component186", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component186 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component186 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
