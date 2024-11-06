export default function json2html(data) {
    // Collect column headers from all objects to ensure all columns are included
    const columns = [...new Set(data.flatMap(Object.keys))];

    // Create the HTML for the table
    let html = `<table data-user="nellutlapranav13@gmail.com">
        <thead>
          <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map(row => `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`).join('')}
        </tbody>
    </table>`;
    
    return html;
}
