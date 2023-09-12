const wrapperContacts = document.querySelector(".wrapper-contacts");

openContacts();

wrapperContacts.onclick = e =>{
    if(e.target === wrapperContacts){
        closeContacts();
    }
}

function openContacts(){
    wrapperContacts.classList.add("wrapper-contacts-enable");
}

function closeContacts(){
    wrapperContacts.classList.remove("wrapper-contacts-enable");
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

// const listContacts=[
//     {
//         nameSite:"Facebook",
//         fullUrl: "https://www.facebook.com",
//         profileName:"dimkaTruba"
//     },
//     {
//         nameSite:"Instagram",
//         fullUrl: "https://www.instagram.com",
//         profileName:"@dimkaTruba"
//     },
//     {
//         nameSite:"Twitter",
//         fullUrl: "https://twitter.com",
//         profileName:"@dimkaTruba"
//     },
//     {
//         nameSite:"Github",
//         fullUrl: "https://github.com/StarchenkoDmitry",
//         profileName:"StarchenkoDmitry"
//     },
//     {
//         nameSite:"LinkedIn",
//         fullUrl: "https://www.linkedin.com",
//         profileName:"StarchenkoDmitry"
//     },
// ]


// function createListCont(cont){
//     return `<div class="contacts-item">
//         <span><a href="${cont.fullUrl}">${cont.nameSite}</a> ${cont.profileName}</span>
//         <button onclick="copyToClipboard('${cont.profileName}');">Copy</button>
//     </div>`;
// }

// const elList = document.querySelector(".contacts-list")


// Array.from(listContacts).forEach(e=>{
//     elList.innerHTML+= createListCont(e);
// });