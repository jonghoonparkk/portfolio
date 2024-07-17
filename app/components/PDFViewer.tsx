import React from 'react';

interface PDFViewerProps {
  src: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src }) => {
  return (
    <iframe
      src={src}
      width="100%"
      height="600px"
      style={{ border: 'none' }}
      title="PDF Viewer"
    ></iframe>
  );
};

export default PDFViewer;
