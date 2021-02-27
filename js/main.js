$(function () {
  const realtimeFilter = () => {
    // 変数・定数の定義
    const numOfImg = $(".imgList__li").length;
    let i;
    let keywordForFilter;
    let identifier;
    const textInForm = $("#inputForm").val();

    // 処理
    if (textInForm !== "") {
      for (i = 0; i < numOfImg; i++) {
        keywordForFilter = $(".imgList__li p").eq(i).text();
        identifier = keywordForFilter.indexOf(textInForm);
        console.log(identifier);
        $(".imgList__li").eq(i).addClass("onDisplay");
        if (identifier === -1) {
          $(".imgList__li").eq(i).removeClass("onDisplay");
        }
      }
    } else {
      $(".imgList__li").addClass("onDisplay");
    }
  };
  $("#inputForm").on("input", realtimeFilter);
});
