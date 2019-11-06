import "./css/index.css";
import sidemenu from "./menu/sidemenu.json";
import mainmenu from "./menu/mainmenu.json";

window.onload = () => {
  initializeContent(sidemenu, mainmenu);

  // 首页动画
  var path = anime.path("path");

  anime({
    targets: "path",
    strokeDashoffset: [anime.setDashoffset, 0],
    loop: true,
    easing: "linear",
    duration: 5000
  });
};

function initializeContent(menu, main) {
  var vm = new Vue({
    el: "#content",
    data: function() {
      return {
        input: "", // 搜索框数据
        select: "", // 搜索框前面的选择框
        isCollapse: true, // 是否展开左侧菜单
        tops: menu, // 侧边菜单
        series: main, // 首页跑马灯菜单
        main_menu: null, // 点击左侧菜单后子菜单
        button_types: ["primary", "success", "info", "warning", "danger", ""], // 按钮类型
        isClickSideMenu: "false", // 是否点击左侧菜单
        isIndex: "true", // 是否是首页
        isClickSubMenu: "false", // 是否点击了子菜单
        markText: "", // mark 的内容
        toptitle: "", // 顶级标题
        subtitle: "", // 次级标题
        title: "", // 最低级标题
        breadcrumb_sub: "", // 面包屑标签参数
        breadcrumb_index: "" // 面包屑标签参数
      };
    },
    computed: {
      button_type: function() {
        // 按钮类型
        return button_types[RandomNum(0, 5)];
      },
      styleMark: function() {
        // 样式
        return {
          display: this.isClickSideMenu == "false" ? "" : "none"
        };
      },
      styleMainmenu: function() {
        // 样式
        return {
          display: this.isClickSideMenu == "true" ? "" : "none"
        };
      },
      styleIndex: function() {
        // 样式
        return {
          display: this.isIndex == "true" ? "" : "none"
        };
      },
      styleTitle: function() {
        // 样式
        return {
          display: this.isClickSubMenu == "true" ? "" : "none"
        };
      }
    },
    methods: {
      Search: function() {
        // 搜索
        console.log(this.isCollapse);
        this.data = 1;
      },
      Showmenu: function() {
        // 显示侧栏
        this.isCollapse = false;
      },
      Hidemenu: function() {
        // 隐藏侧栏
        this.isCollapse = true;
      },
      Info: function() {
        this.$message("微信：douniwanzai 欢迎单身妹子加我");
      },
      ReadMarkdown: function(filename, title) {
        // 读取 markdown 文件并且修改内容
        var xhr = new XMLHttpRequest();
        var nowTime = new Date().getTime(); //获取当前时间作为随机数
        var url = filename + "?time=" + nowTime;
        var _this = this;
        this.title = title;
        xhr.open("get", url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var src = xhr.responseText;
            _this.markText = marked(src);
            _this.isClickSideMenu = "false";
            _this.isClickSubMenu = "true";
            document.getElementsByClassName("el-main")[0].scrollTop = 0;
          }
        };
      },
      Goto: function(url) {
        // 页面跳转
        if (url == "") window.open("./index.html", "_self");
        else window.open(url, "_self");
      },
      Submenu: function(sub, index) {
        // 点击左边菜单隐藏中间内容部分，显示中间菜单部分
        sub = sub === "" ? this.breadcrumb_sub : sub;
        index = index === "" ? this.breadcrumb_index : index;
        this.breadcrumb_sub = sub;
        this.breadcrumb_index = index;
        this.isClickSideMenu = "true";
        this.isClickSubMenu = "false";
        this.isIndex = "false";
        this.markText = "";
        this.toptitle = this.tops[index].name;
        this.subtitle = sub.name;
        this.main_menu = sub;
        // 动画效果
        this.main_menu.subs = _.shuffle(this.main_menu.subs);
      },
      BackToTop: function() {
        // 回到顶部
        var timer = setInterval(() => {
          document.getElementsByClassName("el-main")[0].scrollTop -= 100;
          if (document.getElementsByClassName("el-main")[0].scrollTop == 0)
            clearInterval(timer);
        }, 40);
      }
    }
  });
}
