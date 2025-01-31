```javascript
const query = { name: /John/i };

db.collection('users').find(query).forEach((doc) => {
  console.log(doc); // Processes each document individually
}, (err) => {
  if (err) throw err;
  console.log('Done processing documents.');
});
```