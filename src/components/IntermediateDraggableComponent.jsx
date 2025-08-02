
import  { useState } from "react";

const initialData = {
  todo: [
    { id: 1, text: "🚀 Build the rocket" },
    { id: 2, text: "🧪 Test fuel" },
  ],
  doing: [{ id: 3, text: "👨‍🚀 Fly to Mars" }],
  done: [{ id: 4, text: "🏁 Plant the flag" }],
};

const IntermediateDraggableComponent = () => {
  const [columns, setColumns] = useState(initialData);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item, fromColumn) => {
    setDraggedItem({ ...item, fromColumn });
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (toColumn) => {
    if (!draggedItem) return;

    const { fromColumn, id } = draggedItem;

    if (fromColumn === toColumn) return;

    const newFrom = columns[fromColumn].filter((item) => item.id !== id);
    const newTo = [...columns[toColumn], { id, text: draggedItem.text }];

    setColumns({
      ...columns,
      [fromColumn]: newFrom,
      [toColumn]: newTo,
    });

    setDraggedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">🧩 React Trello Board</h1>
      <div className="flex gap-6 w-full max-w-6xl justify-center">
        {Object.keys(columns).map((columnKey) => (
          <div
            key={columnKey}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(columnKey)}
            className="bg-white rounded-lg shadow-lg p-4 w-1/3 min-h-[300px] flex flex-col"
          >
            <h2 className="text-2xl font-semibold capitalize text-center mb-4">
              {columnKey}
            </h2>
            <div className="flex flex-col gap-2">
              {columns[columnKey].map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item, columnKey)}
                  className="bg-blue-100 p-3 rounded cursor-grab shadow-sm hover:bg-blue-200 transition-all"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntermediateDraggableComponent;
