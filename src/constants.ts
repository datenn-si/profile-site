export const siteConfig: {
  readonly siteName: string;
  readonly siteUrl: string;
  readonly siteDefaultDescription: string;
  readonly siteDefaultOGImagePath: string;
  readonly twitterCardType: 'summary' | 'summary_large_image';
  readonly twitterUserName: string;
} = {
  siteName: 'だてんしのプロフィール',
  siteUrl: 'https://datenn.si/',
  siteDefaultDescription:
    'Web フロントエンド開発やローカル画像生成を趣味でしている「だてんし」（@datenn-si）のプロフィールサイトです。',
  siteDefaultOGImagePath: '/og-image.png',
  twitterCardType: 'summary_large_image',
  twitterUserName: 'datenn_si',
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
    hexClass: 'text-[#181717]',
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
    hexClass: 'text-[#1185FE]',
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co/datenn-si',
    iconClass: 'icon-[thesvg-color--hugging-face]',
  },
  {
    name: 'Civitai',
    url: 'https://civitai.red/user/datenn_si',
    iconClass: 'icon-[thesvg-color--civitai]',
  },
  {
    name: 'note',
    url: 'https://note.com/datenn_si',
    iconClass: 'icon-[simple-icons--note]',
    hexClass: 'text-black',
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/datenn-si',
    iconClass: 'icon-[simple-icons--qiita]',
    hexClass: 'text-[#55C500]',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/datenn_si',
    iconClass: 'icon-[simple-icons--zenn]',
    hexClass: 'text-[#3EA8FF]',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@datenn-si',
    iconClass: 'icon-[simple-icons--youtube]',
    hexClass: 'text-[#FF0000]',
  },
  {
    name: 'pixiv',
    url: 'https://pixiv.me/datenn-si',
    iconClass: 'icon-[simple-icons--pixiv]',
    hexClass: 'text-[#0096FA]',
  },
];

export const techStack: {
  readonly name: string;
  readonly iconClass: string;
  readonly hexClass: string;
}[] = [
  { name: 'HTML', iconClass: 'icon-[simple-icons--html5]', hexClass: 'text-[#E34F26]' },
  { name: 'CSS', iconClass: 'icon-[simple-icons--css3]', hexClass: 'text-[#1572B6]' },
  { name: 'JavaScript', iconClass: 'icon-[simple-icons--javascript]', hexClass: 'text-[#F7DF1E]' },
  { name: 'TypeScript', iconClass: 'icon-[simple-icons--typescript]', hexClass: 'text-[#3178C6]' },
  { name: 'Astro.js', iconClass: 'icon-[simple-icons--astro]', hexClass: 'text-[#BC52EE]' },
  {
    name: 'TailwindCSS',
    iconClass: 'icon-[simple-icons--tailwindcss]',
    hexClass: 'text-[#06B6D4]',
  },
  { name: 'Python', iconClass: 'icon-[simple-icons--python]', hexClass: 'text-[#3776AB]' },
  {
    name: 'Cloudflare Workers',
    iconClass: 'icon-[simple-icons--cloudflareworkers]',
    hexClass: 'text-[#F38020]',
  },
  { name: 'pnpm', iconClass: 'icon-[simple-icons--pnpm]', hexClass: 'text-[#F69220]' },
  { name: 'Git', iconClass: 'icon-[simple-icons--git]', hexClass: 'text-[#F05032]' },
  { name: 'GitHub', iconClass: 'icon-[simple-icons--github]', hexClass: 'text-[#181717]' },
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
    name: 'blog',
    description: 'だてんしの個人ブログ',
    hpUrl: 'https://blog.datenn.si/',
    repoUrl: 'https://github.com/datenn-si/blog',
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
