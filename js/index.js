fetch('img/wp_index.txt')
  .then((response) => response.text())
  .then((text) => {
    var imglist = text.split(`\n`);
    var selectnum = Math.floor(Math.random() * imglist.length);
    var wp = imglist[selectnum].replace(/ /g, '%20').replace(/\(/g, '\(').replace(/\)/g, '\)');
    console.log(wp);
    document.body.style.backgroundImage = `url(img/wallpapers/${wp})`;
  })
  .catch((err) => console.log(err));