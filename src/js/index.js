import '../css/index.css';
import sidemenu from './sidemenu.json'
import mainmenu from './mainmenu.json'

window.onload = () => {

    initializeContent(sidemenu, mainmenu);

    // 首页动画
    var path = anime.path('path');

    anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        loop: true,
        easing: 'linear',
        duration: 5000
    });
}

function initializeContent(menu, main) {
    var vm = new Vue({
        el: '#content',
        data: function () {
            return {
                input: '', // 搜索框数据
                select: '', // 搜索框前面的选择框
                isCollapse: true, // 是否展开左侧菜单
                tops: menu, // 侧边菜单
                series: main, // 首页跑马灯菜单
                main_menu: null, // 点击左侧菜单后子菜单
                button_types: ["primary", "success", "info", "warning", "danger", ""], // 按钮类型
                isClickSideMenu: 'false', // 是否点击子菜单
                isIndex: 'true', // 是否是首页
                markText: '',// mark 的内容

            }
        },
        computed: {
            button_type: function () {
                // 按钮类型
                return button_types[RandomNum(0, 5)];
            },
            styleMark: function () {
                // 样式
                return {
                    display: this.isClickSideMenu == "false" ? '' : 'none'
                }
            },
            styleMainmenu: function () {
                // 样式
                return {
                    display: this.isClickSideMenu == "true" ? '' : 'none'
                }
            },
            styleIndex: function () {
                // 样式
                return {
                    display: this.isIndex == "true" ? '' : 'none'
                }
            }
        },
        methods: {
            Search: function () {
                // 搜索
                console.log(this.isCollapse);
                this.data = 1;
            },
            Showmenu: function () {
                // 显示侧栏
                this.isCollapse = false;
            },
            Hidemenu: function () {
                // 隐藏侧栏
                this.isCollapse = true;
            },
            Info: function () {
                this.$message('微信：douniwanzai 欢迎单身妹子加我');
            },
            ReadMarkdown: function (filename) {
                // 读取 markdown 文件并且修改内容
                var xhr = new XMLHttpRequest();
                var nowTime = new Date().getTime();//获取当前时间作为随机数
                var url = filename + '?time=' + nowTime;
                var _this = this;

                xhr.open('get', url, true);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var src = xhr.responseText;
                        _this.markText = marked(src);
                        _this.isClickSideMenu = "false";
                        document.getElementsByClassName('el-main')[0].scrollTop = 0;
                    }
                };
            },
            Goto: function (url) {
                // 页面跳转
                if (url == '')
                    window.open('./index.html', '_self');
                else
                    window.open(url, '_self');
            },
            Submenu: function (sub) {
                // 点击左边菜单隐藏中间内容部分，显示中间菜单部分
                this.isClickSideMenu = "true";
                this.isIndex = "false";
                this.markText = '';
                this.main_menu = sub;
                // 动画效果
                this.main_menu.subs = _.shuffle(this.main_menu.subs)
            },
            BackToTop: function () {
                // 回到顶部
                var timer = setInterval(() => {
                    document.getElementsByClassName("el-main")[0].scrollTop -= 100;
                    if (document.getElementsByClassName("el-main")[0].scrollTop == 0)
                        clearInterval(timer);
                }, 40)
            }
        }
    })
}
