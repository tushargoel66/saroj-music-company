var firebaseConfig = {
  apiKey: "AIzaSyAwNuvdhmAR5VTcVHa4s-4l3JFkaKifsxk",
    authDomain: "saroj-music-company.firebaseapp.com",
    databaseURL: "https://saroj-music-company.firebaseio.com",
    projectId: "saroj-music-company",
    storageBucket: "saroj-music-company.appspot.com",
    messagingSenderId: "863719802366",
    appId: "1:863719802366:web:c6fe68e5ff0b42c54d6caf",
    measurementId: "G-04L9ZH6NWX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var storageRef = storage.ref();
var listRef = storageRef.child('vid');
listRef.listAll().then(function(res) {
    res.prefixes.forEach(function(folderRef) {
        
    });
    res.items.forEach(function(itemRef) {
      itemRef.getDownloadURL().then(function(url) {
       
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        $("#content").append(`<div class="w3-third">
          <video id="video" src="`+url+`" controls></video><p>`+itemRef.name.split('.')[0]+`</p></div>`); 
        // Or inserted into an <img> element:
        var img = document.getElementById('s');
        img.src = url;
        console.log(url)
      }).catch(function(error) {
        // Handle any errors
      });
    });
}).catch(function(error) {
    console.log(error)
});