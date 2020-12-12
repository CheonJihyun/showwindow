// 팝업 열기
$(document).on("click", ".btn-open", function (e){
  var target = $(this).attr("href");
  $(target).addClass("show");
  $('.String(target)').css('display', 'block');
});

// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
  var LayerPopup = $(".layer-popup");
  var Content = $(".modal-content");
  if(Content.has(e.target).length === 0){
    LayerPopup.removeClass("show");
  }
});