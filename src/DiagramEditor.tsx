import CanvasEditor from './components/CanvasEditor';
import SidebarPanel from './components/ui/SidebarPanel';

const DiagramEditor = () => (
  <div className="w-full h-screen flex overflow-hidden">
    <div className="w-[30%] p-4 border-r border-gray-200">
      <SidebarPanel />
    </div>

    <div className="w-[70%] bg-gray-100 h-screen relative">
      <CanvasEditor />
    </div>
  </div>
);

export default DiagramEditor;
