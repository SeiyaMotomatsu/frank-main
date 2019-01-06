$(function() {
  //***********************************
  //▼コーディングに合わせてidを変更してください

  //01.slideのdivのidを設定
  var slide = "#slideArea";

  //***********************************

  //変数iの初期値を設定
  var i = 0;

  //ページ読み込み時、スライドの1枚目を表示
  $(slide)
    .find("li")
    .eq(0)
    .show();

  //スライドの枚数を調べて変数totalに格納
  var total = $(slide)
    .find("li")
    .index();

  //処理を繰り返す
  setInterval(function() {
    if (i < total) {
      //====▼iがtotalより小さい時の処理====
      //表示されているスライドをフェードアウト
      $(slide)
        .find("li")
        .fadeOut(800);

      //iの値に+1する（次のスライドを表示する）
      i++;
      setTimeout(function() {
        //フェードアウトが終わったらフェードイン表示
        $(slide)
          .find("li")
          .eq(i)
          .fadeIn(800);
      }, 800);
      //=====================================
    } else if (i == total) {
      //====▼iがtotalと同じ値になった時の処理====

      //表示されているスライドをフェードアウト
      $(slide)
        .find("li")
        .fadeOut(800);

      //iの値を0（一番初めのスライド）に戻す
      i = 0;
      setTimeout(function() {
        //フェードアウトが終わったらフェードイン表示
        $(slide)
          .find("li")
          .eq(i)
          .fadeIn(800);
      }, 800);
      //=====================================
    }
  }, 6000);
});
