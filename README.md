# HTML CV for 王一帆

This project contains an HTML and CSS based CV for 王一帆, with functionality to download a PDF version.

## How to View

1.  Clone or download the repository.
2.  Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Safari, Edge).

## How to Download PDF

1.  Once `index.html` is open in your browser, you will see a "下载 PDF" (Download PDF) button at the top of the page.
2.  Click this button.
3.  The PDF generation process will start, and a file named "王一帆_CV.pdf" will be automatically downloaded by your browser.

## Files

*   `index.html`: The main HTML file containing the CV content and structure.
*   `style.css`: The CSS file for styling the CV.
*   `script.js`: The JavaScript file that handles the PDF generation using the html2pdf.js library.
*   `README.md`: This file.

## Notes

*   The PDF generation is handled by the [html2pdf.js](https://github.com/eKoopmans/html2pdf.js/) library, which is included via a CDN link in `index.html`. An internet connection may be required for it to load if not cached.
*   The CV is styled to be responsive and should display well on different screen sizes.
*   Print-specific styles are included in `style.css` to optimize the appearance if printed directly from the browser (though the PDF download is the recommended method for a clean document).
