const client = require("./elastic-client");
const fs = require('fs');

const bulkIndex = function bulkIndex(index, type, data) {
    let bulkBody = [];
  
    data.forEach(item => {
      bulkBody.push({
        index: {
          _index: index,
          _type: type
        }
      });
      bulkBody.push(item);
    });
  
client.bulk({body: bulkBody})
    .then(response => {
      let errorCount = 0;
      response.items.forEach(item => {
        if (item.index && item.index.error) {
          console.log(++errorCount, item.index.error);
        }
      });
      console.log(
        `Successfully indexed ${data.length - errorCount}
         out of ${data.length} items`
      );
    })
    .catch(console.err);
  };

async function indexData() {
    const articlesRaw = fs.readFileSync('./mockData.json');
    const articles = JSON.parse(articlesRaw);
    console.log(`${articles.length} items parsed from data file`);
    bulkIndex('vue-elastic-products', 'products_list', articles);
  }

indexData();

