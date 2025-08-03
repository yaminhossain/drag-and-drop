import React, { useState } from "react";

export default function ImageDropzone() {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    } else {
      alert("Please drop an image file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // 💡 VERY IMPORTANT or drop won't fire!
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`w-96 h-60 border-4 border-dashed rounded-xl flex items-center justify-center transition-colors duration-300 ${
        isDragging ? "border-blue-500 bg-blue-100" : "border-gray-400"
      }`}
    >
      {preview ? (
        <img
          src={preview}
          alt="Dropped preview"
          className="w-full h-full object-cover rounded-xl"
        />
      ) : (
        <p className="text-gray-500 text-center px-4">
          Drag & drop an image here from your desktop
        </p>
      )}
    </div>
  );
}
