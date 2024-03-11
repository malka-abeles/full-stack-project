const div = document.getElementById("flowers");

const drowFlower = (flower) => {
    const flowerDiv = document.createElement('button');
    flowerDiv.innerHTML = `<button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
    <img src="../../assets/תמונות/${flower.image}">
    <p>${flower.flowerName}</p>
    </button>`;




    // const flowerDiv=document.createElement('button');

    // // div.appendChild(flowerDiv);
    // const flowerImg=document.createElement('img');
    // flowerImg.src=`../../assets/תמונות/${flower.image}`;
    // flowerDiv.appendChild(flowerImg);
    // const flowerP=document.createElement('p');
    // flowerP.innerHTML=flower.flowerName;
    // flowerDiv.appendChild(flowerP);

    flowerDiv.onclick = () => {
        sessionStorage.setItem("thisFlower", flower.id);
        // window.location = "../this flower/thisFlower.html";
        // body.innerHTML += `<script src="../../utils/thisFlower.js"></script>`;
        drowthis();
    }

    return flowerDiv;
}

const drawFlowers = (flowers) => {
    flowers.forEach(f => {
        if (f.type == "צמחי גן")
            div.appendChild(drowFlower(f));
    });
}

callflowers(drawFlowers);