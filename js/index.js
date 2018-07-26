
window.onload = () => {
    initializeContent();
}

function initializeContent() {
    new Vue({
        el: '#content',
        data: function () {
            return {
                input: '',
                isCollapse: true,
                tops:[
                    {
                        name:'前端',
                        subs:[
                            {
                                name:'javascript 通用',
                                subs:[
                                    {
                                        name:'包装对象',
                                        src:'./doc/frontend/javascript/bzdx.md'
                                    },
                                    {
                                        name:'原型链',
                                        src:'./doc/frontend/javascript/prototype.md'
                                    },
                                    {
                                        name:'this',
                                        src:'./doc/frontend/javascript/this.md'
                                    },
                                    {
                                        name:'call | apply | bind',
                                        src:'./doc/frontend/javascript/cab.md'
                                    },
                                    {
                                        name:'javascript 特殊技巧 (待补充)',
                                        src:'./doc/frontend/javascript/spec_tech.md'
                                    },
                                    {
                                        name:'sublime 按照和使用技巧',
                                        src:'./doc/frontend/javascript/sublime.md'
                                    }
                                ]
                            },
                            {
                                name:'WebGL',
                                subs:[
                                    {
                                        name:'[threejs入门-1] hello,Three.js',
                                        src:'./doc/frontend/webgl/hello.md'
                                    },
                                    {
                                        name:'[threejs入门-2] 创造一个世界',
                                        src:'./doc/frontend/webgl/Building_a_world.md'
                                    },
                                    {
                                        name:'[threejs入门-3] 探索和互动',
                                        src:'./doc/frontend/webgl/Exploring_and_Interacting.md'
                                    }
                                ]
                            },
                            {
                                name:'javascript 性能优化',
                                subs:[
                                    {
                                        name:'javascript 高性能（阅读总结）',
                                        src:'./doc/frontend/Performance/HPjavascript.md'
                                    }
                                ]
                            },
                            {
                                name:'html',
                                subs:[
                                    {
                                        name:'test',
                                        src:'./1.md'
                                    }
                                ]
                            },
                            {
                                name:'css',
                                subs:[
                                    {
                                        name:'test',
                                        src:'./1.md'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name:'后端',
                        subs:[
                            {
                                name:'C++',
                                subs:[
                                    {
                                        name:"test",
                                        src:"./1.md"
                                    }
                                ]
                            }
                        ]
                    }
                ]
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
                xhr.open('get', filename, true);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        src = xhr.responseText
                        document.getElementById('mark').innerHTML = marked(src);
                    }
                };
            }
        }
    })
}
