import React, { useState } from "react";

export default function PDFDropzone() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    } else {
      alert("Please drop a valid PDF file.");
    }
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`w-full h-96 border-4 border-dashed rounded-lg flex items-center justify-center ${
        isDragging ? "border-red-500 bg-red-100" : "border-gray-400"
      }`}
    >
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="PDF Preview"
          className="w-full h-full"
        />
      ) : (
        <p className="text-gray-500 text-center px-4">
          Drop a PDF file here to preview it
        </p>
      )}
    </div>
  );
}
