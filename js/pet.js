const hash = window.location.hash;
const res = hash.split("#")[1];
console.log("hash: ",res)

const namePet = res ? res : "";

const pet = pets.find(p=>p.nameProject === namePet);

if(pet){
    document.querySelector("#name").innerText =pet.name;
    document.querySelector("#img").src = pet.img;

    const right = document.querySelector(".right");
    
    if(pet.url){
        const a1 = document.createElement("a");
        a1.classList.add("link");
        a1.target="_blank";
        a1.href = pet.url;
        a1.innerText="Site";
        right.appendChild(a1);
    }

    if(pet.github){
        const a2 = document.createElement("a");
        a2.classList.add("link");
        a2.target="_blank";
        a2.href = pet.github;
        a2.innerText="Github";
        right.appendChild(a2);
    }

    pet.tags.forEach(t=>{
        const tag = document.createElement("div");
        tag.innerText = t;
        document.querySelector(".stack").
        appendChild(tag);
    })

    document.querySelector(".description").innerHTML =
        pet.description;

}else{

}

