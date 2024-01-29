document.addEventListener('DOMContentLoaded', function () {
    const buttonForm = document.getElementById('buttonForm');
    const customButtonContainer = document.getElementById('customButtonContainer');
    const cssCodeTextarea = document.getElementById('cssCode');
    const generateCssBtn = document.getElementById('generateCssBtn');

    const button = document.createElement('button');
    customButtonContainer.appendChild(button);  // Append the button to the container immediately

    // Function to update button style
    function updateButtonStyle() {
        const btnText = document.getElementById('btnText').value;
        const btnColor = document.getElementById('btnColor').value;
        const btnFontSize = document.getElementById('btnFontSize').value;
        const borderRadius = document.getElementById('btnBorderRadius').value;
        const shadowX = document.getElementById('shadowX').value;
        const shadowY = document.getElementById('shadowY').value;
        const shadowBlur = document.getElementById('shadowBlur').value;
        const shadowSpread = document.getElementById('shadowSpread').value;

        // Set button text and styles
        button.textContent = btnText ? btnText : 'Button';
        button.style.backgroundColor = btnColor ? btnColor : '#007bff';
        button.style.color = 'white';
        button.style.fontSize = btnFontSize ? `${btnFontSize}px` : '14px';
        button.style.borderRadius = `${borderRadius}px`;
        button.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(0, 0, 0, 0.3)`;
        button.style.padding = '10px 20px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
    }

    // Event listener for the form inputs
    buttonForm.addEventListener('input', function () {
        updateButtonStyle();
    });

    // Event listener for the "Generate CSS" button
    generateCssBtn.addEventListener('click', function () {
        const btnColor = document.getElementById('btnColor').value;
        const btnFontSize = document.getElementById('btnFontSize').value;
        const borderRadius = document.getElementById('btnBorderRadius').value;
        const shadowX = document.getElementById('shadowX').value;
        const shadowY = document.getElementById('shadowY').value;
        const shadowBlur = document.getElementById('shadowBlur').value;
        const shadowSpread = document.getElementById('shadowSpread').value;

        // Generate and display the CSS code
        const cssCode = `
button {
    background-color: ${btnColor ? btnColor : '#007bff'};
    color: white;
    font-size: ${btnFontSize ? `${btnFontSize}px` : '14px'};
    padding: 10px 20px;
    border: none;
    border-radius: ${borderRadius}px;
    box-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}`;
        cssCodeTextarea.value = cssCode.trim();
    });

    // Initialize the button style
    updateButtonStyle();
});
