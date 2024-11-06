// json2html.js
export default function json2html(data) {
  // Extract column headers from the keys of the first object, then union with other keys
  const headers = [...new Set(data.flatMap(Object.keys))];

  // Create the table with the data-user attribute
  let html = '<table data-user="nellutlapranav13@gmail.com">';

  // Add headers to the HTML
  html += '<thead><tr>';
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead>';

  // Add rows of data
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    headers.forEach(header => {
      html += `<td>${row[header] ?? ''}</td>`; // Display empty cell if key is missing
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}
