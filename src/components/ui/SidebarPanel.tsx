import { FC, useRef } from 'react';
import { useDiagramIO } from '../../hooks/useDiagramIO';
import { useDiagramActions, useDiagramState } from '../../hooks/useDiagramStore';

export const presetColors = [
  '#4F46E5',
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#3B82F6',
  '#A855F7',
  '#EC4899',
  '#F97316',
  '#22D3EE',
  '#14B8A6',
];

const SidebarPanel: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { exportToJson, importFromJson } = useDiagramIO();
  const { globalBlockColor } = useDiagramState();
  const { setGlobalBlockColor } = useDiagramActions();

  return (
    <div className="flex flex-col space-y-3 w-full">
      <button
        onClick={exportToJson}
        className="w-full px-4 py-2 text-white border border-blue-600 rounded bg-blue-700 hover:bg-blue-800 transition-colors duration-200"
      >
        Export JSON
      </button>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded bg-white hover:bg-blue-100 transition-colors duration-200"
      >
        Import JSON
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) importFromJson(file);
        }}
      />

      {/* Colors pallete*/}
      <div className="w-full p-3 border border-gray-300 rounded bg-white">
        <label className="text-sm block text-gray-700 mb-2">Block colors:</label>
        <div className="flex flex-wrap gap-2">
          {presetColors.map((color, index) => (
            <button
              key={`color-${index}`}
              onClick={() => setGlobalBlockColor(color)}
              className="relative w-6 h-6 rounded-full border-none outline-none cursor-pointer hover:opacity-70 transition-opacity"
              style={{ backgroundColor: color }}
            >
              {globalBlockColor === color && (
                <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold pointer-events-none">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarPanel;
