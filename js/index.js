
const List = document.querySelector(".works-list");

pets.forEach(e=>{
    const item = document.createElement("div");
    item.classList.add("works__item");

    const item_head = document.createElement("div");
    item_head.classList.add("works__item__head");

    item.appendChild(item_head);

    const name = document.createElement("span");
    name.classList.add("name");
    name.innerText = e.name;
    item_head.appendChild(name);


    const item_right = document.createElement("div");
    item_right.classList.add("right");
    item_head.appendChild(item_right);

    if(e.url){
        const a1 = document.createElement("a");
        a1.classList.add("link");
        a1.target="_blank";
        a1.href = e.url;
        a1.innerText="Site";
        item_right.appendChild(a1);
    }

    if(e.github){
        const a2 = document.createElement("a");
        a2.classList.add("link");
        a2.target="_blank";
        a2.href = e.github;
        a2.innerText="Github";
        item_right.appendChild(a2);
    }

    const body = document.createElement("div");
    body.classList.add("body");
    item.appendChild(body);

    const img = document.createElement("img");
    img.classList.add("img");
    if(e.img){ img.src=e.img; }
    body.appendChild(img);
    
    const footer = document.createElement("div");
    footer.classList.add("footer");
    // footer.innerText ="test footer";
    item.appendChild(footer);

    const maxRenderTags = 3;

    const tags = e.tags.slice(0,maxRenderTags);
    tags.forEach(t=>{
        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.innerText = `#${t}`;
        footer.appendChild(tag);
    });
    const countOthers = e.tags.length - maxRenderTags;
    if(countOthers>0){
        const others = document.createElement("div");
        others.classList.add("others");
        others.innerText = `+${countOthers}`;
        footer.appendChild(others);
    }

    // console.log(tags);

    List.appendChild(item);
});