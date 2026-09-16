/* ============================================================
   原型风格 · 模块公用左侧目录栏  (admin-sidebar.js)
   ------------------------------------------------------------
   - 全模块共享这一份文件，各页面只做一行 <script> 引用；
   - 自动在页面左侧生成目录栏，并按当前文件名高亮菜单项；
   - 菜单项统一在下方 MENU 中维护（新增/删除只改这里）；
   - 依赖同目录 admin-sidebar.css 的样式。
   ============================================================ */
(function () {
    'use strict';

    /* ↓↓↓ 目录栏标题（展示在目录最上方，可按模块修改）↓↓↓ */
    var SIDEBAR_TITLE = '分销功能目录';

    /* ↓↓↓ 在此维护模块菜单（分组 + 条目，href 相对本文件所在目录）↓↓↓ */
    var MENU = [
        {
            group: '移动端',
            items: [
                /* { name: '首页',         href: '首页.html' }, */
                { name: '我的主页',     href: '我的主页.html' },
                { name: '我的推广',     href: '我的推广.html' },
                { name: '分销中心',     href: '分销.html' },
                { name: '分销记账',     href: '分销记账.html' },
                { name: '分销提现',     href: '分销提现.html' },
                { name: '课程发布',     href: '课程发布.html' },
                { name: '课程详情',     href: '课程详情.html' },
                { name: '课程推广',     href: '课程推广.html' }
            ]
        },
        {
            group: '管理端',
            items: [
                { name: '分销订单管理', href: '分销订单管理.html' },
                { name: '分销提现管理', href: '分销提现管理.html' },
                { name: '分销员管理',   href: '分销员管理.html' },
                { name: '分销员详情',   href: '分销员详情.html' },
                { name: '分销等级管理', href: '分销等级管理.html' },
                { name: 'banner管理',   href: 'banner管理.html' }
            ]
        }
    ];
    /* ↑↑↑ MENU 配置到此为止 ↑↑↑ */

    function currentFile() {
        return decodeURIComponent(location.pathname.split('/').pop() || '').toLowerCase();
    }

    function render() {
        var cur = currentFile();
        var html = '<aside class="admin-sidenav">'
            + '<div class="sn-brand"><span class="sn-dot"></span>' + SIDEBAR_TITLE + '</div>';

        MENU.forEach(function (g) {
            html += '<div class="sn-group"><div class="sn-group-title">' + g.group + '</div>';
            g.items.forEach(function (it) {
                var target = it.href.split('/').pop().toLowerCase();
                var active = (target === cur) ? ' active' : '';
                html += '<a class="sn-item' + active + '" href="' + it.href + '">'
                    + '<span>' + it.name + '</span></a>';
            });
            html += '</div>';
        });
        html += '</aside>';

        document.body.insertAdjacentHTML('afterbegin', html);
        document.body.classList.add('has-sidenav');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
