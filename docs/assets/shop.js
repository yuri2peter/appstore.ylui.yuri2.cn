var urlStore = 'https://appstore.ylui.yuri2.cn';
// var urlStore = 'http://127.0.0.1:8080';
function getAppDataTemplate () {
  return {
    "addressBar": false,
    "autoRun": 0,
    "background": false,
    "badge": 0,
    "desc": '',
    "icon": {
      "type": "fa",
      "content": "wpforms",
      "bg": 'green'
    },
    "openMode": "normal",
    "plugin": false,
    "position": {
      "autoOffset": true,
      "left": true,
      "top": true,
      "x": "x*0.05",
      "y": "y*0.05"
    },
    "version":"1.0.0",
    "poweredBy": "",
    "resizable": true,
    "single": false,
    "size": {
      "height": "y*0.8-80",
      "width": "x*0.8"
    },
    "title": "",
    "url": "",
    "customTile": "",
    "urlRandomToken": true
  };
}
YLApp.onReady(function () {
  var apps = {
    '/apps/calculator' : {
      title: '科学计算器',
      desc: '这是一款jquery实现简单计算器代码。该jquery计算器使用 Bootstrap 4进行布局，并结合math.js数学库，实现简单的加减乘除和平方，开方等数学计算。',
      open: _.merge(getAppDataTemplate(), {
        title: '科学计算器',
        url: urlStore + '/apps/calculator/index.html',
        "icon": {
          "type": "fa",
          "content": "calculator",
          "bg": "#375980"
        },
        "size": {
          "height": "496",
          "width": "324"
        },
      }),
      setup: {
        apps: {
          'ylui-apps-calculator' : _.merge(getAppDataTemplate(), {
            title: '科学计算器',
            url: urlStore + '/apps/calculator/index.html',
            "icon": {
              "type": "fa",
              "content": "calculator",
              "bg": "#375980"
            },
            "size": {
              "height": "496",
              "width": "324"
            },
            "desc": "这是一款jquery实现简单计算器代码。该jquery计算器使用 Bootstrap 4进行布局，并结合math.js数学库，实现简单的加减乘除和平方，开方等数学计算。",
            "poweredBy": "素材来源于网络",
          }),
        },
        shortcuts: ['ylui-apps-calculator'],
      }
    },
    '/apps/qrcode' : {
      title: '二维码生成器',
      desc: '这是一款可自定义logo的jQuery生成二维码插件。该插件可以实现二维码的生成，定义在二维码上显示的logo，以及logo的位置，文字颜色、字体等多种属性，非常实用。',
      open: _.merge(getAppDataTemplate(), {
        title: '二维码生成器',
        url: urlStore + '/apps/qrcode/index.html',
        "icon": {
          "type": "fa",
          "content": "qrcode",
          "bg": "#adadad"
        },
      }),
      setup: {
        apps: {
          'ylui-apps-qrcode' : _.merge(getAppDataTemplate(), {
            title: '二维码生成器',
            url: urlStore + '/apps/qrcode/index.html',
            "desc": "这是一款可自定义logo的jQuery生成二维码插件。该插件可以实现二维码的生成，定义在二维码上显示的logo，以及logo的位置，文字颜色、字体等多种属性，非常实用。",
            "poweredBy": "素材来源于网络",
            "icon": {
              "type": "fa",
              "content": "qrcode",
              "bg": "#adadad"
            },
          }),
        },
        shortcuts: ['ylui-apps-qrcode'],
      }
    },
    '/apps/gen-password' : {
      title: '随机字符串生成器',
      desc: '一款自定义规则生成密码/随机字符串的小工具',
      open: _.merge(getAppDataTemplate(), {
        title: '随机字符串生成器',
        url: urlStore + '/apps/gen-password/index.html',
        "icon": {
          "type": "fa",
          "content": "qrcode",
          "bg": "#adadad"
        },
      }),
      setup: {
        apps: {
          'ylui-apps-gen-password' : _.merge(getAppDataTemplate(), {
            title: '随机字符串生成器',
            url: urlStore + '/apps/gen-password/index.html',
            "desc": "一款自定义规则生成密码/随机字符串的小工具。",
            "poweredBy": "素材来自小影的工具箱 http://tool.c7sky.com/",
            "icon": {
              "type": "fa",
              "content": "gg-circle",
              "bg": "#3af0f0"
            },
          }),
        },
        shortcuts: ['ylui-apps-gen-password'],
      }
    },
  };
  var eShop = $('.page-shop');
  for(var path in apps) {
    (function () {
      var appData = apps[path];
      var app = $('<div class="app">');
      var cover = $('<img class="cover">');
      var title = $('<div class="title">');
      var desc = $('<div class="desc">');
      var btns = $('<div class="btn-group">\n' +
        '        <div class="open">打开</div>\n' +
        '        <div class="setup">安装</div>\n' +
        '      </div>');
      cover.attr('src', path + '/cover.png');
      title.text(appData.title);
      desc.text(appData.desc);
      app.append(cover, title, desc, btns);
      app.find('.open').click(function () {
        YLApp.eval('open', appData.open)
      });
      app.find('.setup').click(function () {
        YLApp.eval('setup', appData.setup)
      });
      eShop.append(app);
    }())
  }
});
