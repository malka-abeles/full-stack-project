const advertisement1 = document.createElement('div');

const body = document.getElementById('body');
const advertisement = document.createElement('div');
const flag = sessionStorage.getItem("advertisement");

const timer = () => {

    sessionStorage.setItem("advertisement", 1);
    const divimage=document.createElement('div');
    advertisement.appendChild(divimage);

    const image=document.createElement('img');
    image.src='../../assets/אייקון.png';
    divimage.appendChild(image); 
    image.style.width='50px';
    const image1=document.createElement('img');
    image1.src='../../assets/אייקון.png';
    divimage.appendChild(image1); 
    image1.style.width='50px';
    image1.style.marginLeft='30px';
    image1.style.marginRight='30px';
    const image2=document.createElement('img');
    image2.src='../../assets/אייקון.png';
    divimage.appendChild(image2); 
    image2.style.width='50px';

    const ap = document.createElement('p');
    const al = document.createElement('a');

    body.appendChild(advertisement1);
    advertisement.appendChild(ap);
    advertisement.appendChild(al);

    ap.innerHTML = "מכיר את מנויי הפרחים שלנו? <br>תוכל לקבל פרחים מידי שבוע בזמן קבוע לפי רצונך...";
    al.innerHTML = "ליצירת מנוי";
    ap.classList.add('grin');
    al.classList.add('red');
    al.href = "../flower subscription/FlowerSubscription.html"
    advertisement.classList.add('alert');
    advertisement.classList.add('alert-light');
    // advertisement.style.width = "500px";

    setTimeout(stopTimer, 6000);
}

const stopTimer = () => {
    body.removeChild(advertisement1);
}

if (flag == null)
    setTimeout(timer, 3000);

    // advertisement.id="advertisement";
    advertisement.classList.add('advertisement');
    advertisement1.classList.add('advertisement1');
    advertisement1.appendChild(advertisement);