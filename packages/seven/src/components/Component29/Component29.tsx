import { Button } from '@poc/ui';
import { useState } from 'react';

export type Component29Props = {
  defaultCount?: number
}

export const Component29 = ({ defaultCount = 0 }: Component29Props) => {
  const [count, setCount] = useState(defaultCount);

  return (
    <div className="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Component29</h3>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Count is: {count}
      </Button>
    </div>
  );
};
