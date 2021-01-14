(()=>{
    function SearchBtn(){
        const city = document.getElementById("geolocation").value;
    
        if(city.trim()=="")
            return alert("Please Insert Location");

        const currentURL = window.location.href;
        const lastIndex = currentURL.lastIndexOf("?");
        const URL = currentURL.substring(0,lastIndex);
        window.location.replace(`${URL}?search=${city.trim()}`);
    }
    
    const button = document.getElementById('SearchBtn');
    button.addEventListener('click', SearchBtn);    
})();