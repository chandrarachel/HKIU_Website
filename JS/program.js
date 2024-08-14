const promo_msg = [
    "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!", 
    "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!", 
    "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
];

// Random initial promo_msg
window.onload = function() {
    const promo_info = document.getElementById('col1');
    promo_info.textContent =
        promo_msg[Math.floor(Math.random() * promo_msg.length)];
};

// Next promo_msg
function next_msg() {
    const promo_info = document.getElementById('col1');
    const current_msg = promo_info.textContent;
    
    let position = promo_msg.indexOf(current_msg);

    position = (position + 1) % promo_msg.length;
    promo_info.textContent = promo_msg[position];
}

// next_msg();
setInterval(next_msg, 3000);

var current_vid_index = 0;
var vid_container = document.getElementById('vid_container');
var vid_element = document.getElementById('vid_element');

function loop_vid() {
    current_vid_index = (current_vid_index + 1) % 2;
    if (current_vid_index == 0) {
        vid_element.innerHTML = 
            '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4" type="video/mp4">' +
            '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv" type="video/mkv">';
        } else {
        vid_element.innerHTML = 
            '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4" type="video/mp4">' +
            '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv" type="video/mkv">';
        }

    vid_element.load();
    vid_element.play();   
}


vid_element.addEventListener('ended', loop_vid, false);
