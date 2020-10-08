//Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  DOMString = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMString.inputType).value,
        description: document.querySelector(DOMString.inputDescription).value,
        value: document.querySelector(DOMString.inputValue).value,
      };
    },
    getDOMString: function () {
      return DOMString;
    },
  };
})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {
  //Construction functions
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //Private data
  var data = {
    items: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItem: function (type, desc, val) {
      var item, id;

      if (data.items[type].length === 0) {
        id = 1;
      } else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);
      console.log("Item added ...");
    },
    seeData: function () {
      return data;
    },
  };
})();

//Програм холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1.Оруулах өгөгдлийг дэлгэцээс олж авах
    var input = uiController.getInput();
    //2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгалана
    financeController.addItem(input.type, input.description, input.value);
    console.log(financeController.seeData());
    //3.Олж авсан өгөгдлөө дэлгэц дээр тохирох газар нь гаргах
    //4.Төсвийг тооцоолно
    //5.Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
  };

  var setupActionListener = function () {
    var DOM = uiController.getDOMString();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) ctrlAddItem();
    });
  };

  return {
    init: function () {
      console.log("Application started.....");
      setupActionListener();
    },
  };
})(uiController, financeController);

appController.init();
