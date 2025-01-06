import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component158 } from "./Component158"

describe("Component158", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component158 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component158 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
