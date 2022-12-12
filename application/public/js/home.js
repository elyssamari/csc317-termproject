var length = 50;

function fadeOut() {
    var fade = document.querySelector('[id^="photo-"]');
    var fade_effect = setInterval(function () {
        
        if (!fade.style.opacity) {
            fade.style.opacity = 1;
        }
        else if (fade.style.opacity > 0) {
            fade.style.opacity = fade.style.opacity - 0.2;
        } else {
            clearInterval(fade_effect);
            fade.remove();
            document.getElementById("items-count").innerHTML = `There are ${length= length-1} photo(s) being shown`;
        }
    }, 50);
}


function createPhotoCard(data, containerDiv){
    var containerDiv = document.createElement("div"); 
    var img = document.createElement("img"); 
    var title = document.createElement("h1"); 
  
    img.width = 350;
    img.height = 350;

    img.setAttribute("src", data["url"]);
    containerDiv.id = "photo-" + data["id"]; 
    containerDiv.innerHTML = data["title"];
  
    document.getElementById("container").appendChild(containerDiv);
    containerDiv.appendChild(img);
    containerDiv.appendChild(title);

    containerDiv.addEventListener("click", fadeOut);
}

let mainDiv = document.getElementById("container");
if(mainDiv){
    let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos"
    fetch(fetchURL)
    .then((data) => data.json())
    .then((photos) =>  {
        let innerHTML = "";
        photos.forEach((photo) => {
            createPhotoCard(photo, mainDiv);
        });
        document.getElementById('items-count').innerHTML = `There are ${photos.length} photo(s) being shown`;
    })
}