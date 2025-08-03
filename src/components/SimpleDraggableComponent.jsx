
import { useState } from "react";

const SimpleDraggableComponent = () => {
  const [items, setItems] = useState([
    { id: 1, text: "🧠 Learn React" },
    { id: 2, text: "🎨 Build UI" },
    { id: 3, text: "🚀 Deploy" },
  ]);

  const [targetBox, setTargetBox] = useState([]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleDrop = () => {
    if (draggedItem) {
      setTargetBox([...targetBox, draggedItem]);
      setItems(items.filter((i) => i.id !== draggedItem.id));
      setDraggedItem(null);
    }
  };

  const handleReturn = (item) => {
    setItems([...items, item]);
    setTargetBox(targetBox.filter((i) => i.id !== item.id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">🚚 React Drag & Drop</h1>
      <div className="flex gap-8 w-full max-w-4xl">
        {/* Source Box */}
        <div
          className="bg-indigo-200 p-4 rounded-lg shadow-md w-1/2"
          onDragOver={handleDragOver}
        >
          <h2 className="text-xl font-semibold mb-4">📦 Items</h2>
          {items.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-blue-100 rounded mb-2 cursor-grab"
              draggable
              onDragStart={() => handleDragStart(item)}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Target Box */}
        <div
          className="bg-white p-4 rounded-lg shadow-md w-1/2 min-h-[200px]"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <h2 className="text-xl font-semibold mb-4">🎯 Dropped Here</h2>
          {targetBox.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-green-100 rounded mb-2 cursor-pointer"
              onClick={() => handleReturn(item)}
              title="Click to move back"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleDraggableComponent;
