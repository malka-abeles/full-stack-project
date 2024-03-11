const conectForm = document.getElementById('conectForm');

const text=document.createElement('p');
text.innerHTML='קל ופשוט להתחבר לפלורוז!'
conectForm.appendChild(text);
text.classList.add("grin");
text.id="text_titel"

const buttons=document.createElement('div');
conectForm.appendChild(buttons);


const drowForm = () => {
    const newUser = document.createElement('button');
    const oldUser = document.createElement('button');
    buttons.appendChild(newUser);
    buttons.appendChild(oldUser);
    newUser.innerHTML = "משתמש חדש";
    oldUser.innerHTML = "משתמש ישן";


    const form=document.createElement('form');
    form.id="form";
    conectForm.appendChild(form);

    newUser.onclick = () => {
        // newUser.disabled = true;
        // oldUser.disabled = true;

        const form2=document.getElementById("form");
        form2.remove();

        const form = document.createElement('form');
        form.id="form";
        conectForm.appendChild(form);
        form.action="../home/home.html";

        const iname = document.createElement('input');
        iname.type = "Text";
        iname.placeholder = "שם לקוח"
        iname.pattern = "[א-תA-Za-z ]*$";
        iname.maxLength = "15";
        form.appendChild(iname);


        const iaddress = document.createElement('input');
        iaddress.type = "Text";
        iaddress.placeholder = "כתובת";
        iaddress.pattern = "[א-תA-Za-z0-9 ']*$";
        iaddress.maxLength = "25";
        iaddress.required = true;
        form.appendChild(iaddress);

        const iemail = document.createElement('input');
        iemail.type = "Email";
        iemail.placeholder = "מייל"
        iemail.required = true;
        form.appendChild(iemail);

        // const icode = document.createElement('input');
        // icode.type = "Password";
        // icode.placeholder = "סיסמא"
        // icode.required = true;
        // form1.appendChild(icode);

        const isubmit = document.createElement('input');
        isubmit.type = "Submit";
        isubmit.value = "להתחברות";
        form.appendChild(isubmit);

        form.onsubmit = () => {
            if (localStorage.getItem(iemail.value) != null)
                alert('מייל זה כבר מופיע במערכת,אינך צריך להרשם שוב.');
            else {
                const user = {
                    name: iname.value,
                    address: iaddress.value,
                    email: iemail.value
                    // code: icode.value
                }

                localStorage.setItem(iemail.value, JSON.stringify(user));
                sessionStorage.setItem("thisUser", iemail.value);

                

                const basket = []
                localStorage.setItem("basket " + iemail.value, JSON.stringify(basket));
            }
        }


    }

    oldUser.onclick = () => {
        const form2 = document.getElementById("form");
        form2.remove();

        const form = document.createElement('form');
        form.id="form";
        conectForm.appendChild(form);
        form.action="../home/home.html";

        const iemail = document.createElement('input');
        iemail.type = "Email";
        iemail.placeholder = "מייל";
        iemail.required = true;
        form.appendChild(iemail);

        // const icode = document.createElement('input');
        // icode.type = "Password";
        // icode.placeholder = "סיסמא"
        // icode.required = true;
        // form2.appendChild(icode);

        const isubmit = document.createElement('input');
        isubmit.type = "Submit";
        isubmit.value = "להתחברות";
        form.appendChild(isubmit);

        form.onsubmit = () => {
            if (localStorage.getItem(iemail.value) == null)
                alert('מייל זה אינו מופיע במערכת,גש להרשם.');
            else {
                sessionStorage.setItem("thisUser", iemail.value);
                const aaaa=document.getElementById('usernav');
                aaaa.innerHTML=JSON.parse(localStorage.getItem(sessionStorage.getItem('thisUser'))).name;
            }
        }

        // newUser.disabled = true;
        // oldUser.disabled = true;
    }

    // const logo=document.createElement('img');
    // logo.src='../../assets/לוגו.png';
    // conectForm.appendChild('logo');
}

drowForm();

// התנתקות נמצא בעמוד של הניווט