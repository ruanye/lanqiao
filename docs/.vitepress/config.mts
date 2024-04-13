import { defineConfig } from "vitepress";
// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: "zh-cn",
  title: "蓝桥杯",
  description: "蓝桥杯",
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true, //开始 mark 代码行号显示
  },
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "80KNYBZ3Q2",
        apiKey: "78a894d2e9939477194040467425bf45",
        indexName: "lanqiaoweb",
        placeholder: "请输入关键词",
   
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            },       
            footer: {
              searchByText:'搜索提供者',
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        },
      },
    },
    logo: "/logo.svg",
    siteTitle: false,
    socialLinks: [{ icon: "github", link: "https://github.com/ruanye" }],
    lastUpdatedText: "最后更新时间",
    nav: [
      {
        text: "第十五届蓝桥杯",
        items: [
          { text: "蓝桥杯", link: "/base/01" },
          { text: "线上峰会", link: "/base/02" },
        ],
      },
      { text: "课件",link: "/profile/03" },
    ],
    footer: {
      message: "蓝桥云课",
      copyright: "Copyright © 2024-国信蓝桥",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      level: [2, 4],
      label: "页面导航",
    },
  },
});
