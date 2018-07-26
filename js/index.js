
window.onload = () => {
    // markdown 文件
    // var src;

    // 读取 markdown 文件并且修改内容
    // function readMarkdown(filename) {
    //   debugger
    //   var xhr = new XMLHttpRequest();
    //   xhr.open('get', filename, true);
    //   xhr.send();
    //   xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //       src = xhr.responseText
    //       document.getElementById('mark').innerHTML = marked(src);
    //     }
    //   };
    // }

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
                                name:'javascript',
                                subs:[
                                    {
                                        name:'javascript 特殊技巧',
                                        src:'./test/2.md'
                                    },
                                    {
                                        name:'test',
                                        src:'./1.md'
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
