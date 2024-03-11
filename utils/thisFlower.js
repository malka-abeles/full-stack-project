const divThisFlower = document.getElementById('divThisFlower');
// const basket=[];

const drowFlower2 = (flower) => {
    const flowerDiv = document.createElement('div');
    flowerDiv.id='flowerDiv';
    // div.appendChild(flowerDiv);

    const topdiv=document.createElement('div');
    flowerDiv.appendChild(topdiv);
    topdiv.id='topdiv';

    const flowerImg = document.createElement('img');
    flowerImg.src = `../../assets/תמונות/${flower.image}`;
    topdiv.appendChild(flowerImg);

    const leftdiv=document.createElement('div');
    topdiv.appendChild(leftdiv);
    leftdiv.id='leftdiv';

    const flowerP = document.createElement('p');
    flowerP.innerHTML = '<span>שם מוצר: </span>'+'<br>'+flower.flowerName;
    leftdiv.appendChild(flowerP);

    const description = document.createElement('p');
    description.innerHTML = '<span>תאור: </span>'+'<br>'+flower.description;
    leftdiv.appendChild(description);

    const price = document.createElement('p');
    price.innerHTML = '<span>מחיר: </span>'+'<br>'+flower.price+'שקלים ';
    leftdiv.appendChild(price);


    // const dateP=document.createElement('p');
    // dateP.innerHTML="תאריך להזמנה:";
    // flowerDiv.appendChild(dateP);


    // const date=document.createElement('input');
    // date.type="Date";

    // // // date.innerHTML="03/03/2020";
    // const d=new Date();
    // // // date.value=new "Date";
    // date.innerHTML=d.getDay+d.getMonth+d.getFullYear;
    // date.value.getDay=d.getDay
    // flowerDiv.appendChild(date);

    const cntP = document.createElement('p');
    cntP.innerHTML = "כמה פריטים תרצה להזמין:";
    flowerDiv.appendChild(cntP);
    cntP.style.fontWeight='bold';

    const cnt = document.createElement('input');
    cnt.type = "Number";
    cnt.value = 1;
    cnt.min = 1;
    cnt.style.width='60px';
    flowerDiv.appendChild(cnt);

    const addToBasket = document.createElement('button');
    addToBasket.innerHTML = "להוספה לסל";
    flowerDiv.appendChild(addToBasket);

    addToBasket.onclick = () => {
        if ((sessionStorage.getItem('thisUser')) == 'null')
            alert('עדיין לא התחברת...');
        else {
            const basket = JSON.parse(localStorage.getItem('basket ' + sessionStorage.getItem('thisUser')));
            let flag = 0;
            let i = 0,
                i2;
            basket.forEach(e => {
                if (e.flower == flower.id) {
                    flag = 1;
                    i2 = i;
                }
                i++;
            });

            if (flag == 1) {
                basket[i2].count = Number(basket[i2].count) + Number(cnt.value);
                console.log(basket);
                localStorage.setItem("basket " + sessionStorage.getItem('thisUser'), JSON.stringify(basket));
            } else {
                basket.push({ flower: flower.id, count: Number(cnt.value) });
                console.log(basket);
                localStorage.setItem("basket " + sessionStorage.getItem('thisUser'), JSON.stringify(basket));
            }
            addToBasket.innerHTML = "פריט זה נוסף לסל";
            addToBasket.disabled = true;
            addToBasket.style.background='#598960';
            addToBasket.style.color='#000000';
        }
    }

    return flowerDiv;
}

const drawFlowers2 = (flowers) => {
    flowers.forEach(f => {
        if (f.id == sessionStorage.getItem('thisFlower'))
            divThisFlower.appendChild(drowFlower2(f));
    });
}

const drowthis = () => {
    if (divThisFlower.childNodes[0] != null)
        divThisFlower.removeChild(divThisFlower.childNodes[0]);
    callflowers(drawFlowers2);
}