const nav = document.getElementById("nav");
const bloktop = document.createElement('div');
const blokbottom = document.createElement('div');

const createNav = (nav) => {

    nav.appendChild(bloktop);
    nav.appendChild(blokbottom);
    bloktop.id = 'bloktop';
    blokbottom.id = 'blokbottom';

    const logo = document.createElement('img');
    logo.src = "../../assets/לוגו.png";
    logo.classList.add("logo");
    const div0 = document.createElement('div');
    div0.appendChild(logo);

    const a = document.createElement('a');
    a.href = "../home/home.html";
    bloktop.appendChild(a);
    a.appendChild(div0);
    a.classList.add("aa");

    const search = document.createElement('input');
    search.type = search;
    bloktop.appendChild(search);
    search.id = "search";
    search.placeholder='איזה מוצר תרצה לחפש?';

    const hello_user = document.createElement('div');
    bloktop.appendChild(hello_user);
    hello_user.id='hello_user';

    const hello = document.createElement('p');
    hello_user.appendChild(hello);
    hello.innerHTML="שלום";
    hello.classList.add('grin');

    const user = document.createElement('p');
    hello_user.appendChild(user);
    if(JSON.parse(localStorage.getItem(sessionStorage.getItem('thisUser'))))
    user.innerHTML= JSON.parse(localStorage.getItem(sessionStorage.getItem('thisUser'))).name ;
    else
    user.innerHTML='משתמש'
    user.id='usernav';
    user.classList.add('grin');

    const basket = document.createElement('i');
    basket.classList.add("fas");
    basket.classList.add("fa-cart-plus");
    const a7 = document.createElement('a');
    a7.href = "../basket/basket.html";
    bloktop.appendChild(a7);
    a7.appendChild(basket);
    a7.id='basket';
    basket.classList.add("grin");

    const list = ["פרחים", "צמחי בית", "צמחי גן", "מנויי הפרחים", "<a id=bbbbb>להתחברות</a>","<a id=aaaaa>/להתנתקות</a>"];
    const list2 = ["../flowers/flowers.html", "../house plants/housePlants.html", "../Garden plants/GardenPlants.html", "../flower subscription/FlowerSubscription.html", "../conect/conect.html","../home/home.html"];

    for (let i = 1; i < 7; i++) {
        const a = document.createElement('a');
        a.classList.add("grin");
        const div = document.createElement('div');
        div.classList.add('divNav');
        const p = document.createElement('p');
        blokbottom.appendChild(a);
        a.appendChild(div);
        a.href = list2[i - 1];

        const i1 = document.createElement('i');
        // i1.classList.add("fas");
        // i1.classList.add("fa-signature");
        // div.appendChild(i1);
        div.appendChild(p);
        p.innerHTML = list[i - 1]
    }
    const div_content_out=document.createElement('div');
    div_content_out.appendChild(bbbbb);

    div_content_out.appendChild(aaaaa);
    blokbottom.appendChild(div_content_out);
    aaaaa.href="../home/home.html";
    bbbbb.href="../conect/conect.html";
    

    // blokbottom.lastChild
}

createNav(nav);

search.onchange = function() {
    sessionStorage.setItem("search", search.value);
    window.location = "../../pages/search reasult/searchReasult.html";
}


// להתנתקות מהמשתמש
const out=document.getElementById('aaaaa');

out.onclick=()=>{
    sessionStorage.setItem('thisUser',null);
    alert('האם אתה רוצה להתנתק מהמשתמש?');
    window.location="../pages/home/home.html";
}

const conectform=document.getElementById('conectform');
conectform.onsubmit=()=>{
    alert('פנייתך נשלחה בהצלחה!');
}