const hash = window.location.hash;
const res = hash.split("#")[1];
console.log("hash: ",res)

const namePet = res ? res : "";

const pet = pets.find(p=>p.nameProject === namePet);

if(pet){
    document.querySelector("#name").innerHTML =pet.name;
    document.querySelector("#img").src = pet.img;
}else{

}