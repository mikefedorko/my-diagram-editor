import { useDiagramState, useDiagramActions } from '../hooks/useDiagramStore';

export const useDiagramIO = () => {
  const { blocks, connections } = useDiagramState();
  const { setDiagram } = useDiagramActions();

  const exportToJson = () => {
    const data = {
      elements: blocks.map((b) => ({
        ...b,
        color: b.color || '#ffffff',
      })),
      connections,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'diagram.json';
    link.click();

    URL.revokeObjectURL(url);
  };

  const importFromJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);

        if (!Array.isArray(json.elements) || !Array.isArray(json.connections)) {
          alert('Wrong JSON structure');
          return;
        }

        setDiagram({
          elements: json.elements,
          connections: json.connections,
        });
      } catch (err) {
        alert('Error while reading JSON');
      }
    };
    reader.readAsText(file);
  };

  return { exportToJson, importFromJson };
};
