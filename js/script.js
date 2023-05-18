fetch('https://jsonplaceholder.typicode.com/photos')
   .then((response) => response.json())
   .then(data => reload(data));
function reload(arr) {
   let doc = document
   let body = doc.body;
   for (let i of arr) {
      let item = doc.createElement('div');
      let img = doc.createElement('img');
      let title = doc.createElement('div');
      item.classList.add('item');
      img.classList.add('item__img');
      title.classList.add('item__title');
      img.src = i.url;
      title.innerText = i.title;
      item.append(img, title);
      body.append(item)
   }
}