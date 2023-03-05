const Elem_contacts = document.getElementById("block-contacts");

openContacts();

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

// window.onresize = e =>{
// }
// // c();
// function c(){
//     Elem_contacts.classList.remove("mod-blur");
//     setTimeout(v,500);
// }
// function v(){
//     Elem_contacts.classList.add("mod-blur");
//     setTimeout(c,500);
// }
//style="display: none;"     style="display: none;"


function copyEmail(){
    const str_email = "starchenkodmitrypavlovich@gmail.com";
    navigator.clipboard.writeText(str_email).
    then(() => {
        //Получилось!
    })
    .catch(err => {
        console.log('Something went wrong', err);
    });
}
function copyPhone(){
    const str_phone = "+38097654321";
    navigator.clipboard.writeText(str_phone).
    then(() => {
        //Получилось!
    })
    .catch(err => {
        console.log('Something went wrong', err);
    });
}