const LikeBtn1 = document.getElementById('Like1');
const LikeBtn2 = document.getElementById('Like2');
const LikeBtn3 = document.getElementById('Like3');
const LikeBtn4 = document.getElementById('Like4');
const LikeBtn5 = document.getElementById('Like5');
const DislikeBtn1 = document.getElementById('dislike1');
const DislikeBtn2 = document.getElementById('dislike2');
const DislikeBtn3 = document.getElementById('dislike3');
const DislikeBtn4 = document.getElementById('dislike4');
const DislikeBtn5 = document.getElementById('dislike5');
const Bold1 = document.getElementById('l1');
const Bold2 = document.getElementById('l2');
const Bold3 = document.getElementById('l3');
const Bold4 = document.getElementById('l4');
const Bold5 = document.getElementById('l5');
const Comment_btn = document.getElementById('cmnt');
const Comment_txt = document.getElementById('chat_bx');
const Comment_Output = document.getElementById('current_comment');
const text_of_comment = document.getElementById('Current_cmted');
const BG_cover = document.getElementById('cover');
let Number_of_Comments = document.getElementById('label_number');
const profile1 = document.getElementById('p1')
const profile2 = document.getElementById('p2')
const profile3 = document.getElementById('p3')
const profile4 = document.getElementById('p4')
const profile5 = document.getElementById('p5')
const All_Image = document.getElementById('image-of-dp');
All_Image.draggable = "false"

profile1.addEventListener('click', () => {
    show_DP1.style.display = "flex"
    BG_cover.style.display = "block"
    All_Image.src = "images&icons/profile_pics/road-bg.jpg"
    show_DP1.addEventListener('click', () => {
        show_DP1.style.display = "none"
        BG_cover.style.display = "none"
        All_Image.src = ""
    })
})
profile2.addEventListener('click', () => {
    show_DP1.style.display = "flex"
    BG_cover.style.display = "block"
    All_Image.src = "images&icons/profile_pics/react.png"
    show_DP1.addEventListener('click', () => {
        show_DP1.style.display = "none"
        BG_cover.style.display = "none"
        All_Image.src = ""
    })
})
profile3.addEventListener('click', () => {
    show_DP1.style.display = "flex"
    BG_cover.style.display = "block"
    All_Image.src = "images&icons/profile_pics/image33.jpg"
    show_DP1.addEventListener('click', () => {
        show_DP1.style.display = "none"
        BG_cover.style.display = "none"
        All_Image.src = ""
    })
})
profile4.addEventListener('click', () => {
    show_DP1.style.display = "flex"
    BG_cover.style.display = "block"
    All_Image.src = "images&icons/profile_pics/bg.png"
    show_DP1.addEventListener('click', () => {
        show_DP1.style.display = "none"
        BG_cover.style.display = "none"
        All_Image.src = ""
    })
})
profile5.addEventListener('click', () => {
    show_DP1.style.display = "flex"
    BG_cover.style.display = "block"
    All_Image.src = "images&icons/profile_pics/4th.png"
    show_DP1.addEventListener('click', () => {
        show_DP1.style.display = "none"
        BG_cover.style.display = "none"
        All_Image.src = ""
    })
})


Number_of_Comments.innerText = "5.2K"
Comment_btn.addEventListener('click', () => {
    let error_chat = document.getElementById('error-chat')
    if (Comment_txt.value == "") {
        Comment_Output.style.display = "none"
        text_of_comment.style.display = "none"
        error_chat.innerText = "Enter some words to comment "
    } else if (Comment_txt.value.length > 200) {
        error_chat.innerText = "Comment within 200 letters"
        Comment_Output.style.display = "none"
        text_of_comment.style.display = "none"
    } else {
        Comment_Output.style.display = "block"
        text_of_comment.style.display = "block"
        error_chat.innerText = ""

        text_of_comment.innerHTML = Comment_txt.value;
        Comment_txt.value = ""
        setTimeout(showAlert, 1000);
    }

});

function showAlert() {
    alert_user.style.display = "block";
    BG_cover.style.display = "block";
    alert_Text.innerHTML = "Thank you for your Comment";
    alert_user.style.marginBottom = "10px";
    BG_cover.addEventListener('click', () => {
        BG_cover.style.display = "none";
        alert_user.style.marginBottom = "-80px";
    });
}



close_alert.addEventListener('click', () => {
    BG_cover.style.display = "none";
    alert_user.style.marginBottom = "-80px";


});

let bold1_Value = Math.floor(Math.random() * 1000)
let bold2_Value = Math.floor(Math.random() * 1000)
let bold3_Value = Math.floor(Math.random() * 1000)
let bold4_Value = Math.floor(Math.random() * 1000)
let bold5_Value = Math.floor(Math.random() * 1000)
Bold1.innerHTML = bold1_Value
Bold2.innerHTML = bold2_Value
Bold3.innerHTML = bold3_Value
Bold4.innerHTML = bold4_Value
Bold5.innerHTML = bold5_Value

// comment 1
LikeBtn1.addEventListener('click', () => {
    LikeBtn1.style.color = "blue";
    DislikeBtn1.style.color = "rgb(212, 181, 181)";
    let newval1 = Bold1.innerHTML = bold1_Value + 1;

    DislikeBtn1.addEventListener('click', () => {
        LikeBtn1.style.color = "rgb(212, 181, 181)";
        DislikeBtn1.style.color = "blue";
        Bold1.innerHTML = newval1 - 1;
    });

});
DislikeBtn1.addEventListener('click', () => {
    LikeBtn1.style.color = "rgb(212, 181, 181)";
    DislikeBtn1.style.color = "blue";
});

// Comment2
LikeBtn2.addEventListener('click', () => {
    LikeBtn2.style.color = "blue";
    DislikeBtn2.style.color = "rgb(212, 181, 181)";
    let new_Val2 = Bold2.innerHTML = bold2_Value + 1;

    DislikeBtn2.addEventListener('click', () => {
        LikeBtn2.style.color = "rgb(212, 181, 181)";
        DislikeBtn2.style.color = "blue";
        Bold2.innerHTML = new_Val2 - 1;
    });

});
DislikeBtn2.addEventListener('click', () => {
    LikeBtn2.style.color = "rgb(212, 181, 181)";
    DislikeBtn2.style.color = "blue";

});
// Comment 3 
LikeBtn3.addEventListener('click', () => {
    LikeBtn3.style.color = "blue";
    DislikeBtn3.style.color = "rgb(212, 181, 181)";
    let Val3 = Bold3.innerHTML = bold3_Value + 1;

    DislikeBtn3.addEventListener('click', () => {
        LikeBtn3.style.color = "rgb(212, 181, 181)";
        DislikeBtn3.style.color = "blue";
        Bold3.innerHTML = Val3 - 1;
    });
});
DislikeBtn3.addEventListener('click', () => {
    LikeBtn3.style.color = "rgb(212, 181, 181)";
    DislikeBtn3.style.color = "blue";
});
// Comment 4

LikeBtn4.addEventListener('click', () => {
    LikeBtn4.style.color = "blue";
    DislikeBtn4.style.color = "rgb(212, 181, 181)";
    let Val4 = Bold4.innerHTML = bold4_Value + 1;

    DislikeBtn4.addEventListener('click', () => {
        LikeBtn4.style.color = "rgb(212, 181, 181)";
        DislikeBtn4.style.color = "blue";
        Bold4.innerHTML = Val4 - 1;
    });
});
DislikeBtn4.addEventListener('click', () => {
    LikeBtn4.style.color = "rgb(212, 181, 181)";
    DislikeBtn4.style.color = "blue";
});
// Comment 5
LikeBtn5.addEventListener('click', () => {
    LikeBtn5.style.color = "blue";
    DislikeBtn5.style.color = "rgb(212, 181, 181)";
    let Val5 = Bold5.innerHTML = bold5_Value + 1;

    DislikeBtn5.addEventListener('click', () => {
        LikeBtn5.style.color = "rgb(212, 181, 181)";
        DislikeBtn5.style.color = "blue";
        Bold5.innerHTML = Val5 - 1;
    });
});
DislikeBtn5.addEventListener('click', () => {
    LikeBtn5.style.color = "rgb(212, 181, 181)";
    DislikeBtn5.style.color = "blue";
});