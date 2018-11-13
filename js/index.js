
window.onload = () => {
    var menu = [
        {
            name: '前端',
            subs: [
                {
                    name: '开发工具',
                    subs: [
                        {
                            name: 'sublime 安装和使用技巧',
                            src: './doc/frontend/javascript/sublime.md'
                        }
                    ]
                },
                {
                    name: 'javascript 知识点',
                    subs: [
                        {
                            name: '包装对象',
                            src: './doc/frontend/javascript/bzdx.md'
                        },
                        {
                            name: '原型链',
                            src: './doc/frontend/javascript/prototype.md'
                        },
                        {
                            name: 'this',
                            src: './doc/frontend/javascript/this.md'
                        },
                        {
                            name: 'call | apply | bind',
                            src: './doc/frontend/javascript/cab.md'
                        },
                        {
                            name: 'javascript 特殊技巧 (待补充)',
                            src: './doc/frontend/javascript/spec_tech.md'
                        },
                        {
                            name: 'json 和 jsonp',
                            src: './doc/frontend/javascript/2018_08_16_1.md'
                        },
                        {
                            name: '闭包',
                            src: './doc/frontend/javascript/闭包.md'
                        },
                        {
                            name: 'javascript 作用域、上下文、执行环境、作用域链',
                            src: './doc/frontend/javascript/javascript作用域.md'
                        },
                        {
                            name: 'javascript 模块化',
                            src: './doc/frontend/javascript/javascript模块化.md'
                        },
                        {
                            name: 'javascript 内存管理（堆和栈）',
                            src: './doc/frontend/javascript/javascript内存管理（堆和栈）.md'
                        },
                        {
                            name: 'javascript深拷贝和浅拷贝',
                            src: './doc/frontend/javascript/javascript深拷贝和浅拷贝.md'
                        }
                    ]
                },
                {
                    name: 'WebGL',
                    subs: [
                        {
                            name: '[threejs入门-1] hello,Three.js',
                            src: './doc/frontend/webgl/hello.md'
                        },
                        {
                            name: '[threejs入门-2] 创造一个世界',
                            src: './doc/frontend/webgl/Building_a_world.md'
                        },
                        {
                            name: '[threejs入门-3] 探索和互动',
                            src: './doc/frontend/webgl/Exploring_and_Interacting.md'
                        }
                    ]
                },
                {
                    name: '性能优化',
                    subs: [
                        {
                            name: 'javascript 高性能（阅读总结）',
                            src: './doc/frontend/Performance/HPjavascript.md'
                        }
                    ]
                },
                {
                    name: 'JQuery',
                    subs: [
                        {
                            name: '一步步实现jQuery',
                            src: './doc/frontend/jquery/xilijquery.md'
                        }
                    ]
                },
                {
                    name: 'html',
                    subs: [
                        {
                            name: 'test',
                            src: './1.md'
                        }
                    ]
                },
                {
                    name: 'css',
                    subs: [
                        {
                            name: 'test',
                            src: './1.md'
                        }
                    ]
                }
            ]
        },
        {
            name: '代码规范',
            subs: [
                {
                    name: '通用',
                    subs: [
                        {
                            name: "什么时候要写注释如何写好注释",
                            src: "./doc/frontend/CodeF/zs.md"
                        },
                        {
                            name: "代码的格式",
                            src: "./doc/frontend/CodeF/dmgs.md"
                        },
                        {
                            name: "代码整洁之道",
                            src: "./doc/frontend/CodeF/dmzj.md"
                        },
                        {
                            name: "如何写好对象和数据结构",
                            src: "./doc/frontend/CodeF/sjjg.md"
                        },
                        {
                            name: "如何写好函数",
                            src: "./doc/frontend/CodeF/2018_7_27_1.md"
                        }
                    ]
                }
            ]
        },
        {
            name: '后端',
            subs: [
                {
                    name: 'C++',
                    subs: [
                        {
                            name: "test",
                            src: "./1.md"
                        }
                    ]
                },
                {
                    name: 'ASP.NET MVC4 开发指南（阅读总结）',
                    subs: [
                        {
                            name: "MVC 基本概念",
                            src: "./doc/backend/CSharp_kfzn/MVC.md"
                        },
                        {
                            name: "网址路由和 MVC 基本流程",
                            src: "./doc/backend/CSharp_kfzn/route.md"
                        },
                        {
                            name: "Model 相关技术",
                            src: "./doc/backend/CSharp_kfzn/model.md"
                        },
                        {
                            name: "Controller 相关技术",
                            src: "./doc/backend/CSharp_kfzn/controller.md"
                        }
                    ]
                }
            ]
        }
    ];

    var main = [
        {
            name: 'anime',
            src: './img/anime_title.png',
            url: 'https://github.com/ArcherGrey/anime'
        },
        {
            name: 'electron',
            src: './img/electron_title.png',
            url: 'https://github.com/ArcherGrey/electron_index'
        }
    ];
    initializeContent(menu, main);

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
                debugger
                // 读取 markdown 文件并且修改内容
                var xhr = new XMLHttpRequest();
                var nowTime = new Date().getTime();//获取当前时间作为随机数
                var url = filename + '?time=' + nowTime;
                xhr.open('get', url, true);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        src = xhr.responseText;
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
