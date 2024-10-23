function login(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if(!name || !password ){
        alert("FIll all the fields!");
    }
    else{
        alert("Form Submitted Sucessfully!");
    }
}