// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: '忽如寄的技术 blog'
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Sairin`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/huruji",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/greywind20",
      },
    ],
  },
} as SairinConfig;
