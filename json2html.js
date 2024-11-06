// json2html.js

export default function json2html(data) {
  let html = `<table data-user="nellutlapranav13@gmail.com">
    <thead>
      <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>
    <tbody>`;
  
  data.forEach(item => {
    html += <tr><td>${item.Name}</td><td>${item.Age}</td>;
    // If Gender is present, add it, else leave the cell empty
    html += item.Gender ? <td>${item.Gender}</td> : <td></td>;
    html += </tr>;
  });

  html += </tbody></table>;
  return html;
}
