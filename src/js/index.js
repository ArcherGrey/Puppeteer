import '../css/index.css';
import sidemenu from './sidemenu.json'
import mainmenu from './mainmenu.json'
import printMe from '../print.js'

printMe();

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
    new Vue({
        el: '#content',
        data: function () {
            return {
                input: '',
                select: '',
                isCollapse: true,
                tops: menu,
                series: main,
                main_menu: null,
                button_types: ["primary", "success", "info", "warning", "danger", ""]
            }
        },
        computed: {
            button_type: function () {
                return button_types[RandomNum(0, 5)];
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
                xhr.open('get', url, true);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var src = xhr.responseText;
                        // 点击具体文章，显示中间内容部分，隐藏中间菜单部分
                        document.getElementById('mark').style.display = '';
                        document.getElementById('main_menu').style.display = 'none';
                        document.getElementById('mark').innerHTML = marked(src);
                        document.getElementsByClassName('el-main')[0].scrollTop = 0;
                    }
                };
            },
            Goto: function (url) {
                // 页面跳转
                debugger
                if (url == '')
                    window.open('./index.html', '_self');
                else
                    window.open(url, '_self');
            },
            Submenu: function (sub) {
                this.main_menu = sub;
                // 动画效果
                this.main_menu.subs = _.shuffle(this.main_menu.subs)
                // 点击左边菜单隐藏中间内容部分，显示中间菜单部分
                if (document.getElementById('main_menu'))
                    document.getElementById('main_menu').style.display = '';
                document.getElementById('mark').style.display = 'none';
            }
        }
    })
}
