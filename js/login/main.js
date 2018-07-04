/*global console */

for (i = 2017; i >= 1900; i--) {
    document.getElementById("ssselect").innerHTML = document.getElementById("ssselect").innerHTML + '<option value="' + i + '">' + i + "</option>";
}
//username
var username = document.getElementById("username"),
    w_username = document.getElementById("w_username"),
    r_username = 0;

username.onkeyup = function () {
    "use strict";
    if (username.value === "") {
        w_username.innerHTML = '<div class="wrong">You Should Enter Your Username !!</div>';
    
    } else {
        r_username = 1;
        w_username.innerHTML = '<div class="right">Good !!</div>';
        
    }
};

//lastname
var lastname = document.getElementById("lastname"),
    w_lastname = document.getElementById("w_lastname"),
    r_lastname = 0;

lastname.onkeyup = function () {
    "use strict";
    if (lastname.value === "") {
        w_lastname.innerHTML = '<div class="wrong">You Should Enter Your Lastname !!</div>';
    
    } else {
        r_lastname = 1;
        w_lastname.innerHTML = '<div class="right">Good !!</div>';
        
    }
};

lastname.onclick = function () {
    "use strict";
    if (username.value === "") {
        w_username.innerHTML = '<div class="wrong">You Should Enter Your Username !!</div>';

    
    }
};



//email
var email = document.getElementById("email"),
    w_email = document.getElementById("w_email"),
    r_email = 0;

email.onkeyup = function () {
    "use strict";
    if (email.value === "") {
        w_email.innerHTML = '<div class="wrong">You Should Enter Your Email !!</div>';
    
    } else {
        var emailval = email.value,
            emailatt = emailval.toString(),
            emailat = emailatt.split("@"),
            indemailat = emailval.indexOf("@"),
            afterat = emailval.slice(indemailat + 2),
            dot = afterat.split("."),
            emailleng = emailatt.length,
            inddot = emailatt.indexOf(".");
        if (emailat.length !== 2 || indemailat == 0 ) {
            w_email.innerHTML = '<div class="wrong">You Should Enter Your Right Email !00!</div>';
        } else if (dot.length != 2) {
            w_email.innerHTML = '<div class="wrong">You Should Enter Your Right Email !00!</div>';
        } else if (emailleng == inddot+1) {
            w_email.innerHTML = '<div class="wrong">You Should Enter Your Right Email !00!</div>';
        } else {
            r_email = 1;
            w_email.innerHTML = '<div class="right">Good !!</div>';
        }
    }
};


email.onclick = function () {
    "use strict";
    if (username.value === "") {
        w_username.innerHTML = '<div class="wrong">You Should Enter Your Username !!</div>';

    }
    if (lastname.value === "") {
        w_lastname.innerHTML = '<div class="wrong">You Should Enter Your Lastname !!</div>';

    }
};

//reemail
var reemail = document.getElementById("reemail"),
    w_reemail = document.getElementById("w_reemail");

reemail.onkeyup = function () {
    "use strict";
    if (reemail.value === "") {
        w_reemail.innerHTML = '<div class="wrong">You Should Enter Your Email again !!</div>';
    
    } else {
        reemail.onchange = function () {
            if (email.value === reemail.value) {
                w_reemail.innerHTML = '<div class="right">Good !!</div>';
            } else {
                w_reemail.innerHTML = '<div class="wrong">You Should Enter The Same Email !!</div>';
            }
        };
        
    }
  
};

reemail.onclick = function () {
    "use strict";
    if (username.value === "") {
        w_username.innerHTML = '<div class="wrong">You Should Enter Your Username !!</div>';

    }
    if (lastname.value === "") {
        w_lastname.innerHTML = '<div class="wrong">You Should Enter Your Lastname !!</div>';

    }
    if (email.value === "") {
        w_email.innerHTML = '<div class="wrong">You Should Enter Your Email !!</div>';

    }
};
//password

var password = document.getElementById("password"),
    w_password = document.getElementById("w_password"),
    r_password = 0,
    showpass = document.getElementById("showpass"),
    hidepass = document.getElementById("hidepass"),
    fillpass = document.getElementById("fillpass");
hidepass.onclick = function () {
    "use strict";
    password.type = "text";
    fillpass.innerHTML = '<style>#showpass{opacity: 1}#hidepass{opacity: .2}</style>';
};

showpass.onclick = function () {
    "use strict";
    password.type = "password";
    fillpass.innerHTML = '<style>#showpass{opacity: .2}#hidepass{opacity: 1}</style>';
};

password.onkeyup = function () {
    "use strict";
    if (password.value === "") {
        w_password.innerHTML = '<div class="wrong">You Should Enter Your Password !!</div>';
    
    } else {
        var pst = 0,
            psv = password.value,
            pss = psv.toString(),
            psat = pss.split("@"),
            pahash = pss.split("#"),
            psand = pss.split("&"),
            psper = pss.split("%"),
            psdot = pss.split(".");
        
        if (pss.length > 6) {
            pst = pst + 2;
        }
        
        if (pss.length > 8) {
            pst = pst + 1;
        }
        
        if (pss.length > 10) {
            pst = pst + 1;
        }
        
        if (psat.length >= 2) {
            pst = pst + 1;
        }
        
        if (pahash.length >= 2) {
            pst = pst + 1;
        }
        
        if (psper.length >= 2) {
            pst = pst + 1;
        }
        
        if (psand.length >= 2) {
            pst = pst + 1;
        }
        
        if (psdot.length >= 2) {
            pst = pst + 2;
        }
        
        if (pst < 4) {
            w_password.innerHTML = '<div class="wr-ri-p"><div class="pass1"></div></div>';
        } else if (pst  == 5) {
            w_password.innerHTML = '<div class="wr-ri-p"><div class="pass2"></div></div>';
        } else if (pst  > 5) {
            w_password.innerHTML = '<div class="wr-ri-p"><div class="pass3"></div></div>';
        }
        r_password = 1;
        
    }
};

password.onclick = function () {
    "use strict";
    if (username.value === "") {
        w_username.innerHTML = '<div class="wrong">You Should Enter Your Username !!</div>';

    }
    if (lastname.value === "") {
        w_lastname.innerHTML = '<div class="wrong">You Should Enter Your Lastname !!</div>';

    }
    if (email.value === "") {
        w_email.innerHTML = '<div class="wrong">You Should Enter Your Email !!</div>';

    }
    if (reemail.value === "") {
        w_reemail.innerHTML = '<div class="wrong">You Should Enter Your Email again !!</div>';

    }
};
//day
var day = document.getElementById("day"),
    w_day = document.getElementById("w_day"),
    r_day = 0;

day.onkeyup = function () {
    "use strict";
    if (day.value === "") {
        w_day.innerHTML = '<div class="wrong">You Should Enter The Day of Your Birh Date!!</div>';
    
    } else if (day.value > 31 || day.value == 0) {
        w_day.innerHTML = '<div class="wrong">You Should Enter The Right Day of Your Birh Date !!</div>';
    } else if (isNaN(day.value)) {
        w_day.innerHTML = '<div class="wrong">You Should Enter The Right Day of Your Birh Date !!</div>';
    } else {
        r_day = 1;
        w_day.innerHTML = '<div class="right">Good !!</div>';
        
    }
};

//button
var gentle = document.getElementById("gentle"),
    ssselect = document.getElementById("ssselect"),
    sselect = document.getElementById("sselect");
window.onmouseover = function () {
    "use strict";
    if (r_username === 1 && r_lastname === 1 && r_email === 1 && r_password === 1 && gentle.value != 0 && ssselect.value != 0 && sselect.value != 0 && r_day === 1) {
        
        document.getElementById("button").innerHTML = "<button>Sign UP</button>";


    }
};





