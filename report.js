function generateReport() {
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;
    const area = document.getElementById('area').value;
    const postoffice = document.getElementById('postoffice').value;
    const startDate = document.getElementById('startdate').value;
    const endDate = document.getElementById('enddate').value;

    const reportContent = `
        <html>
        <head>
            <title>Report - Swachhta & LiFE Monitoring</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; background-color: #f2f8f2; color: #4d4d4d; }
                h1 { color: #6a994e; }
                p { margin-bottom: 10px; }
                .report-section { margin-bottom: 20px; }
                .report-section h2 { color: #4d4d4d; border-bottom: 2px solid #6a994e; padding-bottom: 5px; }
                .download-button {
                    display: block;
                    margin-top: 30px;
                    padding: 10px 20px;
                    background-color: #a2d9a1;
                    color: #333;
                    text-decoration: none;
                    text-align: center;
                    border-radius: 5px;
                }
                .download-button:hover {
                    background-color: #8ccf8c;
                }
            </style>
        </head>
        <body>
            <h1>Swachhta & LiFE Monitoring Report</h1>
            <div class="report-section">
                <h2>Report Details</h2>
                <p><strong>State:</strong> ${state}</p>
                <p><strong>District:</strong> ${district}</p>
                <p><strong>Area:</strong> ${area}</p>
                <p><strong>Post Office:</strong> ${postoffice}</p>
                <p><strong>Timeline:</strong> ${startDate} to ${endDate}</p>
            </div>
            <div class="report-section">
                <h2>Report Data and Analysis</h2>
                <p>Data and analysis results will be displayed here.</p>
            </div>
            <a href="#" class="download-button" onclick="downloadReport()">Download Report</a>
        </body>
        <script>
            function downloadReport() {
                const element = document.createElement('a');
                const file = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
                element.href = URL.createObjectURL(file);
                element.download = 'Swachhta_LiFE_Monitoring_Report.html';
                document.body.appendChild(element);
                element.click();
            }
        </script>
        </html>
    `;

    const reportWindow = window.open('', '_blank');
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

     function updateDateTime() {
            const now = new Date();
    
            // Get day, month, and year
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const year = now.getFullYear();
    
            // Format date as DD/MM/YYYY
            const dateString = `${day}/${month}/${year}`;
    
            // Format time as HH:MM AM/PM
            const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
            let timeString = now.toLocaleTimeString(undefined, timeOptions);
    
            // Convert AM/PM to uppercase
            timeString = timeString.toUpperCase();
    
            // Combine date and time with a line break
            const dateTimeString = `${dateString}<br>${timeString}`;
    
            // Update the innerHTML of the element with id 'date-time'
            document.getElementById('date-time').innerHTML = dateTimeString;
        }
        
        setInterval(updateDateTime, 1000);
        updateDateTime(); // Initial call

