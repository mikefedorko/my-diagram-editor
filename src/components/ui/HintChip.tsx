import { FC } from 'react';

const HintChip: FC = () => {
  return (
    <div className="absolute bottom-4 left-4 text-sm text-gray-800 bg-white border border-gray-300 px-3 py-1 rounded shadow-md pointer-events-none select-none">
      Press <kbd className="font-mono text-xs bg-gray-100 border px-1 rounded">Delete</kbd> or{' '}
      <kbd className="font-mono text-xs bg-gray-100 border px-1 rounded">Backspace</kbd> to remove a
      block
    </div>
  );
};

export default HintChip;
