import fs from "node:fs"
import path from "node:path"

function generateTest(componentName: string): string {
  return `import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<${componentName} />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<${componentName} />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
`
}

function generateComponent(index: number, outputPath: string) {
  const componentName = `Component${index}`
  const componentDir = path.join(outputPath, componentName)

  // Create component directory
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true })
  }

  // Generate component file
  const componentContent = `import { Button } from '@poc/ui';
import { useState } from 'react';

export type ${componentName}Props = {
  defaultCount?: number
}

export const ${componentName} = ({ defaultCount = 0 }: ${componentName}Props) => {
  const [count, setCount] = useState(defaultCount);

  return (
    <div className="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">${componentName}</h3>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Count is: {count}
      </Button>
    </div>
  );
};
`

  // Write component and test files
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.tsx`),
    componentContent,
  )
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.spec.tsx`),
    generateTest(componentName),
  )

  return componentName
}

function generateContainer(components: string[], outputPath: string) {
  const imports = components
    .map((name) => `import { ${name} } from './${name}/${name}';`)
    .join("\n")

  const content = `${imports}

export const ComponentContainer = () => {
  return (
    <div className="mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${components.map((name) => `<${name} />`).join("\n        ")}
      </div>
    </div>
  );
};
`

  fs.writeFileSync(path.join(outputPath, "ComponentContainer.tsx"), content)
}

function generateIndex(components: string[], outputPath: string) {
  const content = `${components
    .map((name) => `export * from './components/${name}/${name}';`)
    .join("\n")
    .concat(`
export { ComponentContainer } from './components/ComponentContainer';
`)}
`

  fs.writeFileSync(path.join(outputPath, "index.ts"), content)
}

function main() {
  const args = process.argv.slice(2)
  if (args.length !== 2) {
    console.error(
      "Usage: node generate-components.js <output-path> <number-of-components>",
    )
    process.exit(1)
  }

  const [outputPath, numComponents] = args
  const componentPath = `${outputPath}/components`
  const count = Number.parseInt(numComponents, 10)

  if (Number.isNaN(count) || count < 1) {
    console.error("Number of components must be a positive integer")
    process.exit(1)
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
  }

  // Generate individual components
  const componentNames: string[] = []
  for (let i = 1; i <= count; i++) {
    const name = generateComponent(i, componentPath)
    componentNames.push(name)
  }

  // Generate container component
  generateContainer(componentNames, componentPath)
  generateIndex(componentNames, outputPath)

  console.log(`Generated ${count} components and container in ${outputPath}`)
}

main()
