var imglist;
fetch('img/wp_index.txt')
  .then((response) => response.text())
  .then((text) => {
    imglist = text.split(`\n`);
    var selectnum = Math.floor(Math.random() * imglist.length);
    document.body.style.backgroundImage = `url(img/wallpapers/${imglist[selectnum]})`;
  })
  .catch((err) => console.log(err));