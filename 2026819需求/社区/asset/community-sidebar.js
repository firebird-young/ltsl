/* ============================================================
   社区 · 公用左侧目录栏 (community-sidebar.js)
   ------------------------------------------------------------
   - 自动在页面左侧生成目录栏，并按当前文件名高亮菜单项；
   - 菜单项统一在下方 MENU_ITEMS 中维护（新增/删除只改这里）；
   - 样式复用 admin 目录的 admin-sidebar.css：
       页面需引入 <link rel="stylesheet" href="../admin/asset/admin-sidebar.css">
   ============================================================ */
(function () {
    'use strict';

    /* ↓↓↓ 侧栏标题（展示在目录最上方） ↓↓↓ */
    var SIDEBAR_TITLE = '社区';

    /* ↓↓↓ 在此维护社区模块菜单（href 为相对本社区目录的路径） ↓↓↓ */
    var MENU_ITEMS = [
        { name: '🌐 社区',         href: '社区.html' },
        { name: '🎬 视频详情',     href: '视频详情.html' },
        { name: '📤 我的视频详情', href: '视频详情_自己.html' },
        { name: '🎨 我的作品',     href: '我的作品.html' },
        { name: '👤 我的',         href: '我的.html' },
        { name: '🗂 社区管理',     href: '社区管理.html' }
    ];
    /* ↑↑↑ MENU 配置到此为止 ↑↑↑ */

    function currentFile() {
        return decodeURIComponent(location.pathname.split('/').pop() || '').toLowerCase();
    }

    function render() {
        var cur = currentFile();
        var html = '<aside class="admin-sidenav">'
            + '<div class="sn-brand"><span class="sn-dot"></span>' + SIDEBAR_TITLE + '</div>'
            + '<div class="sn-group">';

        MENU_ITEMS.forEach(function (it) {
            var target = it.href.split('/').pop().toLowerCase();
            var active = (target === cur) ? ' active' : '';
            html += '<a class="sn-item' + active + '" href="' + it.href + '">'
                + '<span>' + it.name + '</span></a>';
        });

        html += '</div></aside>';

        document.body.insertAdjacentHTML('afterbegin', html);
        document.body.classList.add('has-sidenav');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
