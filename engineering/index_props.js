import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "TypeScript 入门教程",
        "sidebar": [
            "README.md",
            {
                "link": "introduction/README.md",
                "children": [
                    "introduction/what-is-typescript.md",
                    "introduction/get-typescript.md",
                    "introduction/hello-typescript.md"
                ]
            },
            {
                "link": "basics/README.md",
                "children": [
                    "basics/primitive-data-types.md",
                    "basics/any.md",
                    "basics/type-inference.md",
                    "basics/union-types.md",
                    "basics/type-of-object-interfaces.md",
                    "basics/type-of-array.md",
                    "basics/type-of-function.md",
                    "basics/type-assertion.md",
                    "basics/declaration-files.md",
                    "basics/built-in-objects.md"
                ]
            },
            {
                "link": "advanced/README.md",
                "children": [
                    "advanced/type-aliases.md",
                    "advanced/string-literal-types.md",
                    "advanced/tuple.md",
                    "advanced/enum.md",
                    "advanced/class.md",
                    "advanced/class-and-interfaces.md",
                    "advanced/generics.md",
                    "advanced/declaration-merging.md",
                    "advanced/further-reading.md"
                ]
            },
            {
                "link": "engineering/README.md",
                "children": [
                    "engineering/lint.md",
                    "engineering/compiler-options.md"
                ]
            },
            "thanks/README.md"
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "赞助作者",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "本网站使用 Pagic 构建",
                "link": "https://github.com/xcatliu/pagic"
            }
        ],
        "gitalk": {
            "clientID": "29aa4941759fc887ed4f",
            "clientSecret": "33e355efdf3a1959624506a5d88311145208471b",
            "repo": "typescript-tutorial",
            "owner": "xcatliu",
            "admin": [
                "xcatliu"
            ]
        },
        "ga": {
            "id": "UA-45256157-14"
        }
    },
    'pagePath': "engineering/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "engineering/index.html",
    'title': "工程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E5%B7%A5%E7%A8%8B">工程 <a class="header-anchor" href="#%E5%B7%A5%E7%A8%8B">§</a></h1>\n<p>掌握了 TypeScript 的语法就像学会了砌墙的工艺。</p>\n<p>我们学习 TypeScript 的目的不是为了造一间小茅屋，而是为了造高楼大厦，这也正是 TypeScript 的类型系统带来的优势。</p>\n<p>那么一项大工程应该如何开展呢？本部分的内容就会介绍 TypeScript 工程化的最佳实践，具体内容包括：</p>\n<ul>\n<li><a href="lint.html">代码检查</a></li>\n<li><a href="compiler-options.html">编译选项</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="../advanced/further-reading.html">上一章：扩展阅读</a></li>\n<li><a href="lint.html">下一章：代码检查</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'sidebar': [
        {
            "text": "TypeScript 入门教程",
            "link": "index.html"
        },
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html"
                }
            ],
            "text": "简介"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html"
                }
            ],
            "text": "基础"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html"
                }
            ],
            "text": "进阶"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html"
                }
            ],
            "text": "工程"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "engineering/index.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u5DE5\u7A0B" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};