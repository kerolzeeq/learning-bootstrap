
var pics = ["https://assets.manutd.com/AssetPicker/images/0/0/14/69/935177/Edinson-Cavani-Landingpage-11602512695369.jpg",
"https://assets.manutd.com/AssetPicker/images/0/0/14/2/918244/Treated_Player_Profile_Thumbnail_Martial_11596553617703.jpg",
"https://assets.manutd.com/AssetPicker/images/0/0/14/2/918260/Treated_Player_Profile_Thumbnail_Rashford-11596553175194_large.jpg"
];

var playername = ["CAVANI 7","MARTIAL 9","RASHFORD 10"];
function random(){
    var x = Math.floor((Math.random() * 3));
    document.getElementById("diz").src = pics[x];
    document.getElementById("cavani").innerHTML = playername[x];
}