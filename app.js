//Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

//Програм холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1.Оруулах өгөгдлийг дэлгэцээс олж авах
    console.log("clicked.....");
    //2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгалана
    //3.Олж авсан өгөгдлөө дэлгэц дээр тохирох газар нь гаргах
    //4.Төсвийг тооцоолно
    //5.Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
})(uiController, financeController);

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) ctrlAddItem();
  else console.log("busad toch");
});
