import { useState } from 'react';
import CanvasEditor from './components/CanvasEditor';
import SidebarPanel, { presetColors } from './components/ui/SidebarPanel';

function App() {
  const [blockColor, setBlockColor] = useState(presetColors[0]);

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-[30%] p-4 border-r border-gray-200">
        <SidebarPanel onColorChange={setBlockColor} selectedColor={blockColor} />
      </div>

      <div className="w-[70%] bg-gray-100 h-screen relative">
        <CanvasEditor />
      </div>
    </div>
  );
}

export default App;
