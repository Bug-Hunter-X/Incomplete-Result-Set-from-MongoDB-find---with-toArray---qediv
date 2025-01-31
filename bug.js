```javascript
const query = { name: /John/i }; // Case-insensitive search

db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result); // This may not contain all documents if there are many
});
```