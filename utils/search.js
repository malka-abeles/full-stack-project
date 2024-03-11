const search=document.getElementById('search');
search.onchange=function () {
    sessionStorage.setItem("search", search.value);
    window.location="../../pages/search reasult/searchReasult.html";
}
