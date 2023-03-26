import React, { useState } from 'react';

const DraggableItem = ({ id, text }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', id);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {text}
    </div>
  );
};

const DroppableArea = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [droppedItem, setDroppedItem] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsHovering(true);
  };

  const handleDragLeave = () => {
    setIsHovering(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsHovering(false);
    const itemId = event.dataTransfer.getData('text/plain');
    setDroppedItem(itemId);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ border: isHovering ? '2px dashed black' : 'none' }}
    >
      {droppedItem && <p>You dropped item {droppedItem} here!</p>}
    </div>
  );
};

const Panel = () => {
  const items = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ];

  return (
    <div>
      {items.map((item) => (
        <DraggableItem key={item.id} id={item.id} text={item.text} />
      ))}
      <DroppableArea />
    </div>
  );
};

export default Panel;