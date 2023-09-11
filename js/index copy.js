const Elem_contacts = document.getElementById("block-contacts");

// openContacts();

Elem_contacts.onclick = e =>{
    if(e.target === Elem_contacts){
        closeContacts();
    }
}

function openContacts(){
    Elem_contacts.classList.remove("block-contacts-dis");
    Elem_contacts.classList.add("block-contacts");
}

function closeContacts(){
    Elem_contacts.classList.remove("block-contacts");
    Elem_contacts.classList.add("block-contacts-dis");
}

function copyToClipboard(str){
    navigator.clipboard.writeText(str).
    then(() => {
        //Получилось!
    })
    .catch(err => {
        console.log('Something went wrong', err);
    });
}

const listContacts=[
    {
        nameSite:"Facebook",
        fullUrl: "https://www.facebook.com",
        profileName:"dimkaTruba"
    },
    {
        nameSite:"Instagram",
        fullUrl: "https://www.instagram.com",
        profileName:"@dimkaTruba"
    },
    {
        nameSite:"Twitter",
        fullUrl: "https://twitter.com",
        profileName:"@dimkaTruba"
    },
    {
        nameSite:"Github",
        fullUrl: "https://github.com/StarchenkoDmitry",
        profileName:"StarchenkoDmitry"
    },
    {
        nameSite:"LinkedIn",
        fullUrl: "https://www.linkedin.com",
        profileName:"StarchenkoDmitry"
    },
]


function createListCont(cont){
    return `<div class="contacts-item">
        <span><a href="${cont.fullUrl}">${cont.nameSite}</a> ${cont.profileName}</span>
        <button onclick="copyToClipboard('${cont.profileName}');">Copy</button>
    </div>`;
}

const elList = document.querySelector(".contacts-list")


Array.from(listContacts).forEach(e=>{
    elList.innerHTML+= createListCont(e);
});