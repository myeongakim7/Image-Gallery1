// main.js

// ****** gallery1 *******
let num = 1; // 이미지 번호

// 방향: 이전 = 0, 다음 = 1
function gallery(방향) {
  if (방향 == 1) {
    num++;
    if (num >= 3) {
      num = 3;
    }
  } else {
    num--;
    if (num <= 0) {
      num = 1;
    }
  }
  console.log(num);

  //이미지 변경
  var imgTag = document.getElementById("photo");

  // setAttribute('속성명','변경할 값');
  imgTag.setAttribute("src", `images/pic${num}.jpg`);
}

// ****** gallery2 *******
//썸네일 이미지를 클릭하면 해당 이미지가 메인이미지에 표시됨
// attr() 메소드 활용
$(function () {
  let src1 = $(".img-thumb img").eq(0).attr("src");
  let src2 = $(".img-thumb img").eq(1).attr("src");
  let src3 = $(".img-thumb img").eq(2).attr("src");
  console.log(src1);

  $(".img-thumb img")
    .eq(0)
    .click(function () {
      $(".main-img img").attr("src", src1);
    });
  $(".img-thumb img")
    .eq(1)
    .click(function () {
      $(".main-img img").attr("src", src2);
    });
  $(".img-thumb img")
    .eq(2)
    .click(function () {
      $(".main-img img").attr("src", src3);
    });
});

// ****** gallery3 *******

//  이미지 번호
let imgNum = 0;

function nextFadeImg() {
  imgNum++;
  if (imgNum == 4) {
    imgNum = 0;
  }
  // 나머지 이미지 비표시
  $("#gallery .sliders img").removeClass("show");
  // 현재 이미지만 표시
  $("#gallery .sliders img").eq(imgNum).addClass("show");
  console.log(imgNum);
}

function prevFadeImg() {
  imgNum--;
  if (imgNum == -1) {
    imgNum = 3;
  }
  // 나머지 이미지 비표시
  $("#gallery .sliders img").removeClass("show");
  // 현재 이미지만 표시
  $("#gallery .sliders img").eq(imgNum).addClass("show");
  console.log(imgNum);
}
