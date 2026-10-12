export const siteConfig: {
  readonly siteName: string;
  readonly siteUrl: string;
  readonly siteDefaultDescription: string;
  readonly siteDefaultOGImagePath: string;
} = {
  siteName: 'だてんしのプロフィール',
  siteUrl: 'https://datenn.si/',
  siteDefaultDescription: 'だてんし (@datenn-si) のプロフィール。',
  siteDefaultOGImagePath: '/og-image.png',
};

export const socialLinks: {
  readonly name: string;
  readonly url: string;
  readonly iconClass: string;
  readonly hexClass?: string;
}[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/datenn-si',
    iconClass: 'icon-[simple-icons--github]',
    hexClass: 'text-black',
  },
  {
    name: 'X',
    url: 'https://x.com/datenn_si',
    iconClass: 'icon-[simple-icons--x]',
    hexClass: 'text-black',
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/datenn.si',
    iconClass: 'icon-[simple-icons--bluesky]',
    hexClass: 'text-[#037efa]',
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co/datenn-si',
    iconClass: 'icon-[logos--hugging-face-icon]',
  },
  {
    name: 'note',
    url: 'https://note.com/datenn_si',
    iconClass: 'icon-[simple-icons--note]',
    hexClass: 'text-[#000000]',
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/datenn-si',
    iconClass: 'icon-[simple-icons--qiita]',
    hexClass: 'text-[#55c500]',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/datenn_si',
    iconClass: 'icon-[simple-icons--zenn]',
    hexClass: 'text-[#3ea8ff]',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@datenn-si',
    iconClass: 'icon-[simple-icons--youtube]',
    hexClass: 'text-[#ff0033]',
  },
  {
    name: 'pixiv',
    url: 'https://pixiv.me/datenn-si',
    iconClass: 'icon-[simple-icons--pixiv]',
    hexClass: 'text-[#0090f6]',
  }
];

type LangMeta = {
  readonly [key: string]: {
    readonly name: string;
    readonly color: string;
  };
};

export const langMeta: LangMeta = {
  javascript: {
    name: 'JavaScript',
    color: '#f1e05a',
  },
  astrojs: {
    name: 'Astro.js',
    color: '#ff5a03',
  },
};


export const projects: {
  readonly name: string;
  readonly description?: string;
  readonly hpUrl?: string;
  readonly repoUrl?: string;
  readonly mainLang?: LangMeta[keyof LangMeta];
}[] = [
  {
    name: 'profile-site',
    description: 'このサイトです。',
    hpUrl: 'https://datenn.si/',
    repoUrl: 'https://github.com/datenn-si/profile-site',
    mainLang: langMeta.astrojs,
  },
  {
    name: 'sd-webui-gpu-monitor',
    description: 'SD WebUI Forge Neo 向けの軽量な GPU 監視オーバーレイ',
    repoUrl: 'https://github.com/datenn-si/sd-webui-gpu-monitor',
    mainLang: langMeta.javascript,
  },
  {
    name: 'sd-webui-danbooru-importer',
    description: 'SD WebUI Forge Neo 向けの Danbooru タグインポーター',
    repoUrl: 'https://github.com/datenn-si/sd-webui-danbooru-importer',
    mainLang: langMeta.javascript,
  },
  {
    name: 'sd-webui-custom-colorpicker',
    description: 'SD WebUI Forge Neo 向けのカスタムカラーピッカー',
    repoUrl: 'https://github.com/datenn-si/sd-webui-custom-colorpicker',
    mainLang: langMeta.javascript,
  },
];
