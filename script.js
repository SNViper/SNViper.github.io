const sha256 = CryptoJS.SHA256;
let passhash = "7c04837eb356565e28bb14e5a1dedb240a5ac2561f8ed318c54a279fb6a9665e";
        
document.getElementById("btn").onclick = function () {
    let pass = document.getElementById("password").value;
    let hash = sha256(pass);
    if(hash != passhash) document.getElementById("message").style.display = "flex";
}

document.getElementById("hidemsg").onclick = () => document.getElementById("message").style.display = "none";
