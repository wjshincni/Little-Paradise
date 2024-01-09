//js
function lpg1(){
  setTimeout (function(){
    loadPage1();
  },250);
}
function lpg2(){
  setTimeout (function(){
    loadPage2();
  },250);
}
function lpg3(){
  setTimeout (function(){
    loadPage3();
  },250);
}
function lpg4(){
  setTimeout (function(){
    loadPage4();
  },250);
}
function lpg5(){
  setTimeout (function(){
    loadPage5();
  },250);
}
function lpg6(){
  setTimeout (function(){
    loadPage6();
  },250);
}
function lpg7(){
  setTimeout (function(){
    loadPage7();
  },250);
}
function lpg8(){
  setTimeout (function(){
    loadPage8();
  },250);
}
function lpg9(){
  setTimeout (function(){
    loadPage9();
  },250);
}
function lpg10(){
  setTimeout (function(){
    loadPage10();
  },250);
}
function lpg11(){
  setTimeout (function(){
    loadPage11();
  },250);
}
function loadPage1() {
    // 获取当前页面元素
    var currentPage = document.getElementById("startPage");
    var targetPage = document.getElementById("page1");
    page1.scrollIntoView({ behavior: 'smooth'},{});
    // 移除当前页面的显示类名
    currentPage.classList.remove("show");
    // 等待一定时间后加载目标页面
    setTimeout(function(){
      // 添加显示类名
      targetPage.classList.add("show");
    }, 1000); // 此处的ms可根据需求调整
}
function loadPage2() {
    // 获取当前页面元素
    var currentPage = document.getElementById("page1");
    var targetPage = document.getElementById("page2");
    page2.scrollIntoView({ behavior: 'smooth' });
    // 移除当前页面的显示类名
    currentPage.classList.remove("show");
    // 等待一定时间后加载目标页面
    setTimeout(function(){
      // 添加显示类名
      targetPage.classList.add("show");
    }, 1000); // 此处的ms可根据需求调整
}
function loadPage3() {
    // 获取当前页面元素
    var currentPage = document.getElementById("page2");
    var targetPage = document.getElementById("page3");
    page3.scrollIntoView({ behavior: 'smooth' });
    // 移除当前页面的显示类名
    currentPage.classList.remove("show");
    setTimeout(function(){
      // 获取目标页面元素
      // 添加显示类名
      targetPage.classList.add("show");
    }, 1000); // 此处的500ms可根据需求调整
}
function loadPage4() {
    // 获取当前页面元素
    var currentPage = document.getElementById("page3");
    var targetPage = document.getElementById("page4");
    page4.scrollIntoView({ behavior: 'smooth' });
    // 移除当前页面的显示类名
    currentPage.classList.remove("show");
    setTimeout(function(){
      // 获取目标页面元素
      // 添加显示类名
      targetPage.classList.add("show");
    }, 1000); // 此处的500ms可根据需求调整
}
function loadPage5() {
  // 获取当前页面元素
  var currentPage = document.getElementById("page4");
  var targetPage = document.getElementById("page5");
  page5.scrollIntoView({ behavior: 'smooth'},{});
  // 移除当前页面的显示类名
  currentPage.classList.remove("show");
  // 等待一定时间后加载目标页面
  setTimeout(function(){
    // 添加显示类名
    targetPage.classList.add("show");
  }, 1000); // 此处的ms可根据需求调整
}
function loadPage6() {
  // 获取当前页面元素
  var currentPage = document.getElementById("page5");
  var targetPage = document.getElementById("page6");
  page6.scrollIntoView({ behavior: 'smooth'},{});
  // 移除当前页面的显示类名
  currentPage.classList.remove("show");
  // 等待一定时间后加载目标页面
  setTimeout(function(){
    // 添加显示类名
    targetPage.classList.add("show");
  }, 1000); // 此处的ms可根据需求调整
}
function loadPage7() {
  // 获取当前页面元素
  var currentPage = document.getElementById("page6");
  var targetPage = document.getElementById("page7");
  page7.scrollIntoView({ behavior: 'smooth'},{});
  // 移除当前页面的显示类名
  currentPage.classList.remove("show");
  // 等待一定时间后加载目标页面
  setTimeout(function(){
    // 添加显示类名
    targetPage.classList.add("show");
  }, 1000); // 此处的ms可根据需求调整
}
function loadPage8() {
  // 获取当前页面元素
  var currentPage = document.getElementById("page7");
  var targetPage = document.getElementById("page8");
  page8.scrollIntoView({ behavior: 'smooth'},{});
  // 移除当前页面的显示类名
  currentPage.classList.remove("show");
  // 等待一定时间后加载目标页面
  setTimeout(function(){
    // 添加显示类名
    targetPage.classList.add("show");
  }, 1000); // 此处的ms可根据需求调整
}
function loadPage9() {
  // 获取当前页面元素
  var currentPage = document.getElementById("page8");
  var targetPage = document.getElementById("page9");
  page9.scrollIntoView({ behavior: 'smooth'},{});
  // 移除当前页面的显示类名
  currentPage.classList.remove("show");
  // 等待一定时间后加载目标页面
  setTimeout(function(){
    // 添加显示类名
    targetPage.classList.add("show");
  }, 1000); // 此处的ms可根据需求调整
}
function loadPage10() {
  // 获取当前页面元素
  var currentPage = document.getElementById("page9");
  var targetPage = document.getElementById("page10");
  page10.scrollIntoView({ behavior: 'smooth'},{});
  // 移除当前页面的显示类名
  currentPage.classList.remove("show");
  // 等待一定时间后加载目标页面
  setTimeout(function(){
    // 添加显示类名
    targetPage.classList.add("show");
  }, 1000); // 此处的ms可根据需求调整
}
function loadPage11() {
  // 获取当前页面元素
  var currentPage = document.getElementById("page10");
  var targetPage = document.getElementById("page11");
  page11.scrollIntoView({ behavior: 'smooth'},{});
  // 移除当前页面的显示类名
  currentPage.classList.remove("show");
  // 等待一定时间后加载目标页面
  setTimeout(function(){
    // 添加显示类名
    targetPage.classList.add("show");
  }, 1000); // 此处的ms可根据需求调整
}
