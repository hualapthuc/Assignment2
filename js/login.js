// get usename, password
//  store it into localStorage
//

/**
 * 1. get usename, password
 * 2. get userList from localStorage
 *      2a. if null
 *          alert: no register
 *      2b. if not null
 *          continue step 3
 * 3. loop check:
 *      a. Not match user and pass
 *          alert: no register
 *      b. Match user and pass
 *          alert: success
 *      c. Match user, not match pass:
 *          alert: wrong password 
 *          
 *              
 */
function login() {
    var username = document.getElementById('alias').value;
    var password = document.getElementById('password').value;
    let user_records = new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    for(var i = 0; i < user_records.length; i++) {
        if (user_records[i] == null) {
            alert("User doesn't be existed in the server");
        }
        else if ((username == user_records[i].username) && (password == user_records[i].password)){
            alert("Login successfully");
        }
        else if ((username != user_records[i].username) || (password != user_records[i].password)){
            alert("User name or password is not correct.")
        }
        else {
            alert("There is an error occurring during login section.");
        }
    }
}