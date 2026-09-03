/* ============================================================
   后台风格 · 管理后台公用侧边目录栏  (admin-sidebar.js)
   ------------------------------------------------------------
   - 自动在页面左侧生成目录栏，并按当前文件名高亮菜单项；
   - 菜单项统一在下方 MENU 中维护（新增/删除只改这里）；
   - 依赖同目录 admin-sidebar.css 的样式。
   ============================================================ */
(function () {
    'use strict';

    /* ↓↓↓ 在此维护管理后台菜单（分组 + 条目），href 为相对本 admin 目录的路径 ↓↓↓ */
    var MENU = [
        {
            group: '内容管理',
            items: [
                { name: '课程管理',     href: '课程管理_v2.html' },
                { name: '课程发布',     href: '课程发布.html' },
                { name: '研学手记配置', href: '研学手记配置_v5.html' },
                { name: '社区管理',     href: '社区管理.html' }
            ]
        },
        {
            group: 'AI 创作销售',
            items: [
                { name: 'AI 创作销售配置', href: 'AI创作销售配置_v3.html' }
            ]
        },
        {
            group: '订单管理',
            items: [
                { name: '拼团订单管理', href: '拼团订单管理.html' },
                { name: '用户订单管理', href: '用户订单管理.html' }
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
            + '<div class="sn-brand"><span class="sn-dot"></span>管理后台目录</div>';

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
