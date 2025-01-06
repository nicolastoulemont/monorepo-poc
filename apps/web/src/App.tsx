import { useState } from "react"
import { Button } from "@poc/ui"
import { ComponentContainer } from "@poc/one"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <ComponentContainer />
    </div>
  )
}

export default App
