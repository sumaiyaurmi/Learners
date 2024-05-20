import React, { useState } from 'react';

const Test = () => {

    const [currentPdfLink, setCurrentPdfLink] = useState(null);

    const assignments = [
        {
          id: 1,
          title: "Science Project",
          pdfLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        },
        {
          id: 2,
          title: "History Essay",
          pdfLink: "http://www.pdf995.com/samples/pdf.pdf",
        },
        {
          id: 3,
          title: "Literature Review",
          pdfLink: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
        },
      ];
    
      const openPdf = (pdfLink) => {
        setCurrentPdfLink(pdfLink);
      };

    return (
        <div>
      <h2>Submitted Assignments</h2>
      <div>
        {assignments.map((assignment) => (
          <div key={assignment.id} style={{ marginBottom: '20px' }}>
            <h3>{assignment.title}</h3>
            <button
              onClick={() => openPdf(assignment.pdfLink)}
            //   style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
                Open preview
              {/* <FaFilePdf size={30} color="red" /> */}
            </button>
          </div>
        ))}
      </div>
      {currentPdfLink && (
        <div style={{ marginTop: '20px' }}>
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(currentPdfLink)}&embedded=true`}
            title="PDF Preview"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      )}
    </div>
    );
};

export default Test;