var data = [
{
name: 'emmet',
description: 'Emmet is the number one code snippet tool.',
author: 'emmetio',
url: 'https://atom.io/packagees/emmet',
downloads: 1662209,
stars: 2534,
price: 10.50,
selector: 'p1'
},
{
name: 'atom-beutify',
description: 'The atom-beutify [ackage will clean up your code, and make it more readable.'>
author: 'Glvin001',
url: 'https://atom.io/packages/atom-beautify',
downloads: 4228040,
stars: 4541,
price: 6.75,
selector: 'p2'
}
];

function Pakcage(data) {
    this.name = data.name;
    this.decription = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };
    this.getFormattedStars = function () {
        return this.stars.toLocalString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDatesString();
};

var getEl = function (id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + 'author'),
    downloadEl = getEl(selector + '-downloads'),
    starEl = getEl(selector + '-stars');

    nameEl.textcontent = package.name;
    descEl.textcontent = package.description;
    authEll.textcontent = package.author;
    downloadEl.textcontent = package.getFormattedDownloads();
    starsEl.textcontent = package.getFormattedStars();
}

var init = function() {
    dateEl = getEl('date');
    dateEl.textcontent = getTodaysDate();

    var emmet = new package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Paxckage(data[1]);
    writePackageInfo(beautify);
}

init();