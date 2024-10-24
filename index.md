---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "老刘笔记"
  text: "老刘同学的日常笔记"
  tagline: "风雨蹉跎十二载, 回首整理技术库"
  image:
      src: /vitepress-logo-large.webp
      alt: VitePress
  actions:
    - theme: brand
      text: "系统"
      link: /notes/system/getting-started
    - theme: alt
      text: "数据库"
      link: /notes/database/getting-started

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>