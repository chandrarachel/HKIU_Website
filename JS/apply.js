const coe_heading = document.querySelector("#menu_CoE");
const coe_all = document.querySelector("#menu_CoE~#collegeofEngineering");

const cos_heading = document.getElementById("menu_CoS");
const cos_all = document.querySelector("#menu_CoS~#collegeofScience");

const coi_heading = document.getElementById("menu_CoI");
const coi_all = document.querySelector("#menu_CoI~#collegeofInterdisciplinaryStudies");

window.addEventListener("load", function() {
    coe_all.style.display = "block";
    cos_all.style.display = "none";
    coi_all.style.display = "none";
    coe_heading.style.backgroundColor = "white";
    cos_heading.style.backgroundColor = "rgb(221, 221, 221)";
    coi_heading.style.backgroundColor = "rgb(221, 221, 221)";
});

coe_heading.addEventListener("click", function() {
    coe_all.style.display = "block";
    cos_all.style.display = "none";
    coi_all.style.display = "none";
    coe_heading.style.backgroundColor = "white";
    cos_heading.style.backgroundColor = "rgb(221, 221, 221)";
    coi_heading.style.backgroundColor = "rgb(221, 221, 221)";
});

cos_heading.addEventListener("click", function() {
    coe_all.style.display = "none";
    cos_all.style.display = "block";
    coi_all.style.display = "none";
    coe_heading.style.backgroundColor = "rgb(221, 221, 221)";
    cos_heading.style.backgroundColor = "white";
    coi_heading.style.backgroundColor = "rgb(221, 221, 221)";
});

coi_heading.addEventListener("click", function() {
    coe_all.style.display = "none";
    cos_all.style.display = "none";
    coi_all.style.display = "block";
    coe_heading.style.backgroundColor = "rgb(221, 221, 221)";
    cos_heading.style.backgroundColor = "rgb(221, 221, 221)";
    coi_heading.style.backgroundColor = "white";
});




// CoE
const coe1 = document.getElementById("CoE1");
function coe1_hover() {
    coe1.style.backgroundColor = "rgb(221, 221, 221)";
};
function coe1_leave() {
    coe1.style.backgroundColor = "white";
};

const coe2 = document.getElementById("CoE2");
coe2.onmouseenter = function() {
    coe2.style.backgroundColor = "rgb(221, 221, 221)";
};
coe2.onmouseleave = function() {
    coe2.style.backgroundColor = "white";
};

const coe3 = document.getElementById("CoE3");
coe3.addEventListener("mouseenter", function() {
    coe3.style.backgroundColor = "rgb(221, 221, 221)";
});
coe3.addEventListener("mouseleave", function() {
    coe3.style.backgroundColor = "white";
});

const coe4 = document.getElementById("CoE4");
coe4.addEventListener("mouseenter", function() {
    coe4.style.backgroundColor = "rgb(221, 221, 221)";
});
coe4.addEventListener("mouseleave", function() {
    coe4.style.backgroundColor = "white";
});

const coe5 = document.getElementById("CoE5");
coe5.addEventListener("mouseenter", function() {
    coe5.style.backgroundColor = "rgb(221, 221, 221)";
});
coe5.addEventListener("mouseleave", function() {
    coe5.style.backgroundColor = "white";
});


// CoS
const cos1 = document.getElementById("CoS1");
cos1.addEventListener("mouseenter", function() {
    cos1.style.backgroundColor = "rgb(221, 221, 221)";
});
cos1.addEventListener("mouseleave", function() {
    cos1.style.backgroundColor = "white";
});

const cos2 = document.getElementById("CoS2");
cos2.addEventListener("mouseenter", function() {
    cos2.style.backgroundColor = "rgb(221, 221, 221)";
});
cos2.addEventListener("mouseleave", function() {
    cos2.style.backgroundColor = "white";
});

const cos3 = document.getElementById("CoS3");
cos3.addEventListener("mouseenter", function() {
    cos3.style.backgroundColor = "rgb(221, 221, 221)";
});
cos3.addEventListener("mouseleave", function() {
    cos3.style.backgroundColor = "white";
});


// CoI
const coi1 = document.getElementById("CoI1");
coi1.addEventListener("mouseenter", function() {
    coi1.style.backgroundColor = "rgb(221, 221, 221)";
});
coi1.addEventListener("mouseleave", function() {
    coi1.style.backgroundColor = "white";
});

const coi2 = document.getElementById("CoI2");
coi2.addEventListener("mouseenter", function() {
    coi2.style.backgroundColor = "rgb(221, 221, 221)";
});
coi2.addEventListener("mouseleave", function() {
    coi2.style.backgroundColor = "white";
});

const coi3 = document.getElementById("CoI3");
coi3.addEventListener("mouseenter", function() {
    coi3.style.backgroundColor = "rgb(221, 221, 221)";
});
coi3.addEventListener("mouseleave", function() {
    coi3.style.backgroundColor = "white";
});

var major_count = 0;
var major_list = [];
var rank_list = [];


function getRank(i, event) {
    event.preventDefault();


    const rankID = btn_all[i].id + '-inp';
    const rankINP = document.getElementById(rankID).value.trim();
    const int_rankINP = parseInt(rankINP);

    console.log(typeof rankINP);
    if (Number.isInteger(Number(rankINP)) === false) {
        alert("Please enter the rank of chosen major");
        return;
    }

    if (int_rankINP < 1 || int_rankINP > 10) {
        alert("Please enter the rank of chosen major between 1 and 10");
        return;
    }

    if (major_list.includes(rankID) || rank_list.includes(int_rankINP)) {
        alert("You have already chosen this major");
        return;
    }

    var getCollege = document.getElementById('c'+int_rankINP);
    if (i < 5) {
        getCollege.textContent = "College of Engineering";
    } else if (i < 8) {
        getCollege.textContent = "College of Science";
    } else {
        getCollege.textContent = "College of Interdisciplinary Studies";
    }

    var getMajor = document.getElementById('m'+int_rankINP);
    const major = document.getElementById(btn_all[i].id + '-major').alt;
    getMajor.textContent = major;

    major_list.push(rankID);
    rank_list.push(int_rankINP);
    console.log("rank_list: " + rank_list);
    major_count++;

    if (int_rankINP == 1) {
        ending = 'st';
    } else if (int_rankINP == 2) {
        ending = 'nd';
    } else if (int_rankINP == 3) {
        ending = 'rd';
    } else {
        ending = 'th';
    }

    setTimeout(() => {
    const major = document.getElementById(btn_all[i].id + '-major').alt;
    // const new_major_count = major_count + ending; 
    alert(`You have chosen ${major} as your ${int_rankINP + ending} chosen major in ${getCollege.textContent} successfully`);
    }, 100);

    document.getElementById('last-change').innerHTML = `Last change time: ${updateTable(new Date())}`;
}

function updateTable(date) {
    const total_majors = document.getElementById("total_majors");
    total_majors.innerText = `Total number of completed choices: ${major_count}`;

    const year = date.getFullYear();
    const month = date.getMonth().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    const sec = date.getSeconds().toString().padStart(2, '0');


    return `${year}/${month}/${day} ${hour}:${min}:${sec}`;
}


const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    const rank_error = document.querySelector("#rank_error p");
    
    console.log("ranks" + rank_list);

    if (rank_list.length === 0) {
        console.log("0");
        rank_error.innerText = "You have not chosen any major";
        rank_error.style.color = "red";
        rank_error.style.textAlign = "center";
        return;
    } else {
        rank_error.innerText = "";
    }

    const rankChecker = [];
    const maxRank = Math.max(...rank_list);
    for (let i=1; i<=maxRank; i++) {
        rankChecker.push(i);
    }

    const empty_list = [];
    for (const j of rankChecker) {
        if (!rank_list.includes(j)) {
            empty_list.push(j);
        }
    }

    
    if (empty_list.length !== 0) {
        
        function ending(num) {
            if (num == 1) {
                return 'st';
            } else if (num == 2) {
                return 'nd';
            } else if (num == 3) {
                return 'rd';
            } else {
                return 'th';
            }
        }

        function nextMsg(remaining) {
            const len = remaining.length;
            var words = ``;

            for (let i=1; i<len-1; i++) {
                words = words + `, ${remaining[i]}${ending(remaining[i])}`;
            }
            words = words + `, and ${remaining[len-1]}${ending(remaining[len-1])} chosen major`;

            return words;
        }

        rank_error.style.color = "red";
        rank_error.style.textAlign = "center";
        
        if (empty_list.length > 1) {
            rank_error.innerText = `You have not chosen your ${empty_list[0]}${ending(empty_list[0])}${nextMsg(empty_list)}, you can not leave any gap between your chosen majors`;
        } else if (empty_list.length === 1) {
            rank_error.innerText = `You have not chosen your ${empty_list[0]}${ending(empty_list[0])} chosen major, you can not leave any gap between your chosen majors`;
        }
        
        return;
    }

rank_error.innerText = `You have successfully submitted your application at time ${updateTable(new Date())}`;
rank_error.style.color = "red";
rank_error.style.textAlign = "center";
});


const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("new rank list: " + rank_list);
    console.log("new major list: " + major_list);
    for (let i=1; i<Math.max(...rank_list)+1; i++) {
        const clear_getCollege = document.getElementById('c'+i);
        clear_getCollege.innerHTML = "";

        const clear_getMajor = document.getElementById('m'+i);
        clear_getMajor.innerHTML = "";
    }
    major_list = [];
    rank_list = [];
    major_count = 0;
    total_majors.innerText = `Total number of completed choices: ${major_count}`;

    

    document.getElementById('last-change').innerHTML = `Last change time: ${updateTable(new Date())}`;
});


const btn_all = document.querySelectorAll(".btn");
for (let i=0; i<btn_all.length; i++) {
    btn_all[i].addEventListener("click", (event) => getRank(i, event));
}




