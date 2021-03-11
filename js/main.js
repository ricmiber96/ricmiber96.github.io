function getJSONFile(){
    try{

        var requestUrl = './assets/data/data.json'
        var request = new XMLHttpRequest();

        request.open("GET",requestUrl);
        request.responseType = "json";
        request.send();

        request.onload = ()=>{
            var serviceData = request.response;
            console.log(serviceData);
            getData(serviceData);
        }

    }catch(error){

        console.log("Error getting data");

    }

}

function getData(data){
    
    var profiles = data

    let profile = document.getElementById("names");
    let role = document.getElementById("roles");
    let imgProfile = document.getElementById("imgProfile");
    let projectLink = document.getElementById("projects");
    let connects = document.getElementById("connects");
    
    role.innerHTML = profiles.role;
    profile.innerHTML = profiles.name;
    projectLink.setAttribute("href",profiles.links[0].link)
    

    for (var i=0;i<profiles.connects.length;i++){

        var a = document.createElement("a");
        a.setAttribute("class","logo");
        a.setAttribute("target","_blank");
        a.setAttribute("href",profiles.connects[i].link);

        var icon = document.createElement("ion-icon");
        icon.setAttribute("name",profiles.connects[i].iconName);
        icon.setAttribute("size","large");

        a.appendChild(icon);
        connects.appendChild(a);

    }  
}