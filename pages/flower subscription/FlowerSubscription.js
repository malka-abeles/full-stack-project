toPay.onclick = () => {
    // toPay.disabled = true;
    if (sessionStorage.getItem('thisUser') == null) {
        // alert('עדיין לא התחברת...');
        // window.location = "../home/home.html";
    }
    paying();
}

const body=document.getElementById('modal-body-basket');

const paying = () => {

    if (body.childNodes[3] != null)
        body.removeChild(body.childNodes[3]);

    const payPage = document.createElement('form');
    // payPage.classList.add('modal');
    // payPage.tabindex="-1";
    // payPage.classList.add('fade');
    // payPage.id="exampleModalToggle";

    const p2 = document.createElement('p');
    p2.innerHTML = "הכנס את פרטי כרטיס האשראי שלך:";
    const cardNum = document.createElement('input');
    cardNum.type = "Text";
    cardNum.maxLength=20;
    cardNum.placeholder = "מס' כרטיס אשראי";
    cardNum.required=true;
    cardNum.pattern = "[0-9]*$";
    const dateCard = document.createElement('input');
    dateCard.type = "Text";
    dateCard.placeholder = "תוקף הכרטיס ב-4 ספרות";
    dateCard.required=true;
    dateCard.pattern = "[0-9]{4}";
    const threeDigits = document.createElement('input');
    threeDigits.type = "Text";
    threeDigits.placeholder = "3 ספרות בגב הכרטיס";
    threeDigits.required=true;
    threeDigits.pattern = "[0-9]{3}";
    const p4 = document.createElement('p');
    p4.innerHTML = "כתובת למשלוח:";
    const addres = document.createElement('input');
    addres.type = "Text";
    addres.required=true;
    addres.placeholder = "עיר/רחוב/מס' בנין/מס' דירה";
    if(JSON.parse(localStorage.getItem(sessionStorage.getItem('thisUser'))))
        addres.value=JSON.parse(localStorage.getItem(sessionStorage.getItem('thisUser'))).address;
        const finish = document.createElement('input');
        finish.type = "Submit"
        finish.value = "סיום הזמנה";


    // body.appendChild(div1);
    // div1.appendChild(payPage);
    body.appendChild(payPage);
    // header.appendChild(p1);
    payPage.appendChild(p2);
    payPage.appendChild(cardNum);
    payPage.appendChild(dateCard);
    payPage.appendChild(threeDigits);
    payPage.appendChild(p4);
    payPage.appendChild(addres);
    payPage.appendChild(finish);
    
    payPage.id='payPage';

    // p2.innerHTML = "הכנס את פרטי כרטיס האשראי שלך:";

    payPage.action="../finish/finish.html";
    payPage.onsubmit=()=>{
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