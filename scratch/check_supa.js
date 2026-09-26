const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'config.js'), 'utf8');
const u = (src.match(/url:\s*"([^"]+)"/) || [])[1];
const a = (src.match(/anon:\s*"([^"]+)"/) || [])[1];

fetch(u + '/rest/v1/produtos?select=id,dados', { headers: { apikey: a, Authorization: 'Bearer ' + a } })
  .then(r => r.json())
  .then(rows => {
    console.log('Total rows in Supabase:', rows.length);
    const jansnoRow = rows.find(r => r.id === 'ww-2032209' || (r.dados && r.dados.nome && r.dados.nome.includes('JANSNO X60')));
    if (jansnoRow) {
      console.log('Jansno in Supabase data:\n', JSON.stringify(jansnoRow.dados, null, 2));
    }
    const sampleOther = rows.find(r => r.id !== 'ww-2032209');
    if (sampleOther) {
      console.log('Sample other product:\n', JSON.stringify(sampleOther.dados, null, 2));
    }
  }).catch(e => console.error(e));
