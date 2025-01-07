import "@poc/one/dist/index.css"
import "@poc/two/dist/index.css"
import { ComponentContainer } from "@poc/one"
import { ComponentContainer as ComponentContainer2 } from "@poc/two"

function App() {
  return (
    <div className="min-h-screen w-full">
      <ComponentContainer />
      <ComponentContainer2 />
    </div>
  )
}

export default App
