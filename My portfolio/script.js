// Select the button element
const downloadBtn = document.getElementById('downloadBtn');

// Add a click event listener to the button
downloadBtn.addEventListener('click', () => {
    // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
    const cvPath = 'https://getyourcv.net/wp-content/uploads/2023/05/CV-EN-1.docx';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvPath;

    // Set the download attribute with your desired file name
    link.download = 'Resume';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger the click event of the anchor element
    link.click();

    // Clean up
    document.body.removeChild(link);
});

