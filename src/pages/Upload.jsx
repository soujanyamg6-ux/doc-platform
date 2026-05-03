import { useDropzone } from "react-dropzone";
import { useState } from "react";
import Button from "../components/Button";

export default function Upload() {
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map(file => ({
        file,
        progress: 0
      }));

      setFiles(newFiles);
      setUploaded(false);

      newFiles.forEach((f, index) => {
        let progress = 0;

        const interval = setInterval(() => {
          progress += 10;

          setFiles(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, progress } : item
            )
          );

          if (progress >= 100) clearInterval(interval);
        }, 120);
      });
    }
  });

  // 🔥 Upload button action
  const handleUpload = () => {
    setUploaded(true);
  };

  // 🧹 Clear files
  const handleClear = () => {
    setFiles([]);
    setUploaded(false);
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Upload Files</h1>
      </div>

      {/* DROPZONE */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-blue-400 p-10 text-center rounded-xl bg-white dark:bg-gray-800"
      >
        <input {...getInputProps()} />
        Drag & drop files here
      </div>

      {/* 🔥 BUTTONS (THIS IS WHAT WAS MISSING) */}
      <div className="flex gap-4 mt-4">
        <Button onClick={handleUpload}>
          Upload Files
        </Button>

        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear
        </button>
      </div>

      {/* SUCCESS MESSAGE */}
      {uploaded && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
          Files uploaded successfully ✔
        </div>
      )}

      {/* FILE LIST */}
      <div className="mt-6 space-y-4">

        {files.length === 0 && (
          <p className="text-gray-400 text-center">
            No files selected
          </p>
        )}

        {files.map((f, i) => (
          <div
            key={i}
            className="p-4 bg-white dark:bg-gray-800 rounded shadow"
          >

            <p>📄 {f.file.name}</p>

            <div className="w-full bg-gray-300 h-2 rounded mt-2">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${f.progress}%` }}
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}