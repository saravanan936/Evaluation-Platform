/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { addFile } from '../feature/coursework/courseworkSlice';
import { FaFilePdf } from 'react-icons/fa'; // Importing Font Awesome icon

function FileUpload() {
  const dispatch = useDispatch();
  const [error, setError] = useState(''); 
  const [selectedFile, setSelectedFile] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxSize: 25 * 1024 * 1024, // 25 MB
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach(file => {
        dispatch(addFile({ file, metadata: { name: file.name, size: file.size } }));
      });
    },
    onDropRejected: (rejectedFiles) => {
      rejectedFiles.forEach(file => {
        if (file.errors[0].code === 'file-too-large') {
          setError('File size exceeds 25 MB.');
        } else if (file.errors[0].code === 'file-invalid-type') {
          setError('Please select a PDF file.');
        }
      });
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'application/pdf' && file.size <= 25 * 1024 * 1024) {
        setSelectedFile(file);
        dispatch(addFile({ file, metadata: { name: file.name, size: file.size } }));
        setError('');
      } else if (file.size > 25 * 1024 * 1024) {
        setError('File size exceeds 25 MB.');
      } else {
        setError('Please select a PDF file.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50"
      {...getRootProps({ className: 'dropzone' })} 
      style={{
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#e0e0e0' : '#f9f9f9',
        width: "450px",
        height: "200px",
        marginleft:"20px",
        marginright: "20px",
        marginTop: "20px"
      }}
    >
      <input {...getInputProps()} />
      <FaFilePdf className="text-gray-400 text-4xl mb-2" /> {/* Icon centered and color changed to gray */}
      <p className="text-gray-500 text-lg">{isDragActive ? 'Drop the files here...' : 'Drag and drop a PDF'}</p>
      <p className="text-sm text-gray-500 mt-2">*Limit 25 MB per file</p>
      
      {/* Hidden default file input */}
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />

      {/* Custom file upload button */}
      <label 
        htmlFor="file-upload" 
        className="inline-block mt-4 py-2 px-4 bg-purple-700 text-white text-sm font-semibold rounded-full cursor-pointer hover:bg-purple-600"
      >
        Upload your file
      </label>
    </div>
  );
}

export default FileUpload;
