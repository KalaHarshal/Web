document.addEventListener('DOMContentLoaded', () => {
    const alertsTableBody = document.querySelector('#alerts-table');
    const alertData = [
        { id: 1, location: 'Post Office 1', issue: 'Overflowing Garbage', timestamp: '2024-08-28 10:30 AM', status: 'Unresolved' },
        { id: 2, location: 'Post Office 2', issue: 'Unclean Restroom', timestamp: '2024-08-28 11:15 AM', status: 'Unresolved' },
        // Add more alerts as needed
    ];

    function populateAlertsTable() {
        alertsTableBody.innerHTML = '';
        alertData.forEach((alert) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${alert.location}</td>
                <td>${alert.issue}</td>
                <td>${alert.timestamp}</td>
                <td>${alert.status}</td>
                <td><button class="cta-button" onclick="viewAlertDetails(${alert.id})">View</button></td>
            `;
            alertsTableBody.appendChild(row);
        });
    }

    window.viewAlertDetails = (alertId) => {
        const alert = alertData.find(a => a.id === alertId);
        alert(`Alert Details:\nLocation: ${alert.location}\nIssue: ${alert.issue}\nStatus: ${alert.status}`);
    };

    populateAlertsTable();
});
