const div = document.getElementById("flowers");
let price = 0;
const allPrice = document.createElement('p');
allPrice.id = "allPrice";

const drowFlower = (flower, b) => {
    const flowerDiv = document.createElement('div');
    // div.appendChild(flowerDiv);
    const flowerImg = document.createElement('img');
    flowerImg.src = `../../assets/תמונות/${flower.image}`;
    flowerDiv.appendChild(flowerImg);

    const text = document.createElement('div');
    flowerDiv.appendChild(text);
    text.id = 'malka';

    const flowerP = document.createElement('p');
    flowerP.innerHTML = "<span>מוצר: </span>" + flower.flowerName;
    text.appendChild(flowerP);

    const fprice = document.createElement('p');
    fprice.innerHTML = "<span>מחיר: </span>" + flower.price + " שקלים ";
    text.appendChild(fprice);

    const fcount = document.createElement('div');
    const count2 = document.createElement('p');
    count2.innerHTML = 'כמות: '
    count2.classList.add("bold");
    const count = document.createElement('input');
    count.value = b.count;
    count.type = "Number";
    count.min = 1;
    fcount.appendChild(count2);
    fcount.appendChild(count);
    text.appendChild(fcount);

    count.onchange = () => {
        const basket = JSON.parse(localStorage.getItem('basket ' + sessionStorage.getItem('thisUser')));

        basket.forEach(f => {
            if (f.flower == flower.id) {
                price -= flower.price * f.count;
                f.count = Number(count.value);
                price += flower.price * f.count;
                allPrice.innerHTML = "סך הכל לתשלום:" + price + "שקלים";
                localStorage.setItem("basket " + sessionStorage.getItem('thisUser'), JSON.stringify(basket));
            }
        });
        if (price == 0) {
            // alert('mmm');
            toPay.parentNode.removeChild();
        }
    }

    const toDelete = document.createElement('button');
    toDelete.innerHTML = 'מחק מהסל';
    flowerDiv.appendChild(toDelete);

    toDelete.onclick = () => {
        price -= flower.price * b.count;
        console.log(price);
        allPrice.innerHTML = "סך הכל לתשלום:" + price;

        const basket = JSON.parse(localStorage.getItem('basket ' + sessionStorage.getItem('thisUser')));
        const basket2 = [];

        basket.forEach(f => {
            if (f.flower != flower.id) {
                basket2.push({ flower: f.flower, count: f.count });
            }
        });

        localStorage.setItem("basket " + sessionStorage.getItem('thisUser'), JSON.stringify(basket2));

        div.removeChild(flowerDiv);

         if (price == 0) {
            // alert('mmm');
            toPay.parentNode.removeChild([0]);}
    }

    return flowerDiv;
}

const drawFlowers = (flowers) => {

    flowers.forEach(f => {
        const basket = JSON.parse(localStorage.getItem('basket ' + sessionStorage.getItem('thisUser')));
        basket.forEach(b => {
            if (f.id == b.flower) {
                div.appendChild(drowFlower(f, b));
                price += f.price * b.count;
                console.log(price);
            }
        });
    }
    );

    allPrice.innerHTML = "סך הכל לתשלום:" + price + " שקלים ";
    div.parentNode.appendChild(allPrice);

    const toPay = document.getElementById('topaydiv');
    toPay.parentNode.appendChild(toPay);
    div.parentNode.appendChild(toPay);

    // div.appendChild(toPay);

    // if (price == 0) {
    //     // alert('mmm');
    //     toPay.disabled = true;
    // }

    toPay.onclick = () => {
        // toPay.disabled = true;
        paying();
    }

}


if (sessionStorage.getItem('thisUser') == null) {
    alert('עדיין לא התחברת...');
    // window.location = "../home/home.html";
} else
    callflowers(drawFlowers);

    if (price == 0) {
        // alert('mmm');
        toPay.parentNode.removeChild[10];}

// --------------חלון תשלום---------------

const body = document.getElementById('modal-body-basket');

const paying = () => {

    if (body.childNodes[3] != null)
        body.removeChild(body.childNodes[3]);

    const payPage = document.createElement('form');
    payPage.id = 'payPage';
    // payPage.classList.add('modal');
    // payPage.tabindex="-1";
    // payPage.classList.add('fade');
    // payPage.id="exampleModalToggle";

    const p1 = document.getElementById('finalPrice');
    p1.innerHTML = "סך הכל לתשלום:" + price + "שח";
    p1.classList.add('grin');
    const p2 = document.createElement('p');
    p2.innerHTML = "הכנס את פרטי כרטיס האשראי שלך:";
    const cardNum = document.createElement('input');
    cardNum.type = "Text";
    cardNum.maxLength = 20;
    cardNum.placeholder = "מס' כרטיס אשראי";
    cardNum.required = true;
    cardNum.pattern = "[0-9]*$";
    const dateCard = document.createElement('input');
    dateCard.type = "Text";
    dateCard.placeholder = "תוקף הכרטיס ב-4 ספרות";
    dateCard.required = true;
    dateCard.pattern = "[0-9]{4}";
    const threeDigits = document.createElement('input');
    threeDigits.type = "Text";
    threeDigits.placeholder = "3 ספרות בגב הכרטיס";
    threeDigits.required = true;
    threeDigits.pattern = "[0-9]{3}";
    const p3 = document.createElement('p');
    p3.innerHTML = "מס' תשלומים(עד 3)";
    const numPay = document.createElement('input');
    numPay.type = "Number";
    numPay.value = 1;
    numPay.min = 1;
    numPay.max = 3;
    const p4 = document.createElement('p');
    p4.innerHTML = "כתובת למשלוח:";
    const addres = document.createElement('input');
    addres.type = "Text";
    addres.placeholder = "עיר/רחוב/מס' בנין/מס' דירה";
    addres.value = JSON.parse(localStorage.getItem(sessionStorage.getItem('thisUser'))).address;
    const p5 = document.createElement('p');
    p5.innerHTML = "למתי תרצה את הזמנתך?";
    const toDate = document.createElement('input');
    toDate.type = "Date";
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + (today.getDate())).slice(-2);
    toDate.value = `${year}-${month}-${day}`
    const finish = document.createElement('input');
    finish.type = "Submit"
    finish.value = "סיום הזמנה";

    if(price==0)
    finish.disabled=true;


    // body.appendChild(div1);
    // div1.appendChild(payPage);
    body.appendChild(payPage);
    // header.appendChild(p1);
    payPage.appendChild(p2);
    payPage.appendChild(cardNum);
    payPage.appendChild(dateCard);
    payPage.appendChild(threeDigits);
    payPage.appendChild(p3);
    payPage.appendChild(numPay);
    payPage.appendChild(p4);
    payPage.appendChild(addres);
    payPage.appendChild(p5);
    payPage.appendChild(toDate);
    payPage.appendChild(finish);

    p2.innerHTML = "הכנס את פרטי כרטיס האשראי שלך:";

    payPage.action = "../finish/finish.html";
    payPage.onsubmit = () => {
        const newbasket = [];
        localStorage.setItem("basket " + sessionStorage.getItem('thisUser'), JSON.stringify(newbasket));
    }
    // const finish = document.getElementById('finish');
    // finish.onclick = () => {
    //     window.location = "../finish/finish.html";
    //     const newbasket = [];
    //     localStorage.setItem("basket " + sessionStorage.getItem('thisUser'), JSON.stringify(newbasket));
    // }

    // payPage.classList.add('modal');
    // payPage.classList.add('fade');



}