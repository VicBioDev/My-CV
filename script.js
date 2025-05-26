document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-pdf-btn');
    const cvContainer = document.getElementById('cv-container');

    if (!downloadButton) {
        console.error('Download button not found.');
        return;
    }
    if (!cvContainer) {
        console.error('CV container element not found.');
        return;
    }

    downloadButton.addEventListener('click', () => {
        console.log('Download button clicked. Starting PDF generation...');

        const options = {
            margin: [10, 10, 10, 10], // top, left, bottom, right in mm
            filename: '王一帆_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2, // Higher scale for better quality
                useCORS: true, // For external images, if any
                logging: true, // For debugging
                scrollX: 0, // Ensure full width is captured
                scrollY: 0, // Ensure full height is captured
                windowWidth: cvContainer.scrollWidth,
                windowHeight: cvContainer.scrollHeight
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            },
            // To ensure all content is captured, especially with complex layouts or if content overflows
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] } 
        };

        // Temporarily adjust styles for PDF generation if needed
        // For example, ensure the container takes up the full width needed for PDF.
        // This can be tricky as it might affect the live view.
        // It's often better to ensure CSS is PDF-friendly from the start.

        html2pdf().from(cvContainer).set(options).save().then(() => {
            console.log('PDF generated and saved.');
        }).catch(err => {
            console.error('Error generating PDF:', err);
        });
    });
});
