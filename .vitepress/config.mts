import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "老刘笔记",
  description: "老刘同学的日常笔记",
  markdown: {
    math: true,
    // lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    base: "/blog_test/"
    logo: '/vitepress-logo-mini.svg',
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} lsne`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航',
      level : "deep"
    },
    editLink: {
      pattern: 'https://github.com/lsne/blog/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local'
    },
    nav: nav(),
    sidebar: {
      '/notes/dba/': { base: '/notes/dba/', items: sidebarDba() },
      '/notes/system/': { base: '/notes/system/', items: sidebarSystem() },
      '/notes/database/': { base: '/notes/database/', items: sidebarDatabase() },
      '/notes/dbup/': { base: '/notes/dbup/', items: sidebarDbup() },
      '/notes/kubernetes/': { base: '/notes/kubernetes/', items: sidebarKubernetes() }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lsne/blog' }
    ]
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'DBA',
      items: [
        {
          text: '快速开始',
          link: '/notes/dba/getting-started'
        },
        {
          text: '使用手册',
          link: '/notes/dba/introduction'
        }
      ]
    },
    {
      text: 'k8s DB',
      items: [
        {
          text: '快速开始',
          link: '/notes/kubernetes/getting-started'
        },
        {
          text: '使用手册',
          link: '/notes/kubernetes/introduction'
        }
      ]
    },
    {
      text: "dbup",
      items: [
        {
          text: '快速开始',
          // link: 'https://ls.cn/pages/viewpage.action?pageId=439152951'
          link: '/notes/dbup/getting-started'
        },
        {
          text: '使用手册',
          link: '/notes/dbup/introduction'
        },
        {
          text: '更新日志',
          link: '/notes/dbup/dbup-v2.0.x'
        }
      ]
    }
  ]
}

function sidebarDba(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'DBA 笔记 简介',
      collapsed: false,
      items: [
        { text: '简介', link: 'introduction' },
        { text: '快速开始', link: 'getting-started' }
      ]
    },
    {
      text: 'MySQL',
      base: '/notes/dba/mysql/',
      collapsed: false,
      items: [
        { text: 'MySQL 常用操作', link: 'mysql-operation' },
        { text: 'MySQL 导入导出', link: 'mysql-dump' },
        { text: 'MySQL 问题处理', link: 'mysql-error' }
      ]
    },{
      text: 'MongoDB',
      base: '/notes/dba/mongodb/',
      collapsed: false,
      items: [
        { text: 'MongoDB 常用操作', link: 'mongodb-operation' },
        { text: 'MongoDB 导入导出', link: 'mongodb-dump' },
        { text: 'MongoDB 问题处理', link: 'mongodb-error' }
      ]
    },{
      text: 'Redis',
      base: '/notes/dba/redis/',
      collapsed: false,
      items: [
        { text: 'Redis 常用操作', link: 'redis-operation' },
        { text: 'Redis 导入导出', link: 'redis-dump' },
        { text: 'Redis 问题处理', link: 'redis-error' }
      ]
    },
    {
      text: '其他',
      collapsed: false,
      items: [
        { text: 'dbup 安装及使用', base: '/notes/dbup/', link: 'getting-started' },
        { text: '数据库在k8s中的应用', base: '/notes/kubernetes/', link: 'getting-started' }
      ]
    }
  ]
}

function sidebarSystem(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '系统',
      collapsed: false,
      items: [
        { text: '简介', link: 'introduction' },
        { text: '快速开始', link: 'getting-started' }
      ]
    }
  ]
}

function sidebarDatabase(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '数据库',
      collapsed: false,
      items: [
        { text: '简介', link: 'introduction' },
        { text: '快速开始', link: 'getting-started' }
      ]
    }
  ]
}

function sidebarKubernetes(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'k8s DB 简介',
      collapsed: false,
      items: [
        { text: '简介', link: 'introduction' },
        { text: '快速开始', link: 'getting-started' }
      ]
    },
    {
      text: 'cloudnative-pg',
      base: '/notes/kubernetes/cloudnative-pg/',
      items: [
        { text: 'cloudnative-pg 使用说明', link: 'cloudnative-pg' },
        { text: 'cloudnative-pg 功能测试', link: 'cloudnative-pg-test' }
      ]
    },
    {
      text: 'zalando/postgres-operator',
      base: '/notes/kubernetes/postgres-operator/',
      items: [
        { text: 'zalando 使用说明', link: 'postgres-operator' },
        { text: 'zalando 功能测试', link: 'postgres-operator-test' }
      ]
    },
    {
      text: 'cloudnative-pg',
      base: '/notes/kubernetes/cloudnative-pg/',
      items: [
        { text: '使用说明', link: 'cloudnative-pg' },
        { text: '功能测试', link: 'cloudnative-pg-test' }
      ]
    },
    {
      text: '其他',
      collapsed: false,
      items: [
        { text: 'dba 笔记', base: '/notes/dba/', link: 'getting-started' },
        { text: 'dbup 安装及使用', base: '/notes/dbup/', link: 'getting-started' }
      ]
    }
  ]
}

function sidebarDbup(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'dbup 简介',
      collapsed: false,
      items: [
        { text: '简介', link: 'introduction' },
        { text: '快速开始', link: 'getting-started' }
      ]
    },
    {
      text: '使用手册',
      items: [
        { text: '安装失败常见问题', link: 'dbup-install-failed' },
        {
          text: 'pgsql',
          base: '/notes/dbup/pgsql/',
          collapsed: false,
          items: [
            { text: 'pgsql 单机实例安装', link: 'dbup-pgsql-install' },
            { text: 'pgsql 主从安装', link: 'dbup-pgsql-replication' },
            { text: 'pgsql 高可用安装', link: 'dbup-pgsql-ha' }
          ]
        },
        {
          text: 'redis',
          base: '/notes/dbup/redis/',
          items: [
            { text: 'pgsql 单机实例安装', link: 'dbup-redis-install' },
            { text: 'redis 主从安装', link: 'dbup-redis-replication' },
            { text: 'redis cluster 安装', link: 'dbup-redis-cluster' },
            { text: 'redis cluster 3节点切主问题', link: 'dbup-redis-failover' },

          ]
        }
      ]
    },{
      text: '更新日志',
      items: [
        { text: 'dbup v2.0.x', link: 'dbup-v2.0.x' },
        { text: 'dbup v1.2.x', link: 'dbup-v1.2.x' },
        { text: 'dbup v1.1.x', link: 'dbup-v1.1.x' }
      ]
    },
    {
      text: '其他',
      collapsed: false,
      items: [
        { text: 'dba 笔记', base: '/notes/dba/', link: 'getting-started' },
        { text: '数据库在k8s中的应用', base: '/notes/kubernetes/', link: 'getting-started' }
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
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
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
