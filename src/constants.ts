export const defaultLocale = 'ja' as const;
export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];

export const siteConfig: {
  readonly siteUrl: string;
  readonly siteDefaultOGImagePath: string;
  readonly twitterCardType: 'summary' | 'summary_large_image';
  readonly twitterUserName: string;
  readonly locales: {
    readonly ja: {
      readonly lang: 'ja';
      readonly siteName: string;
      readonly siteDefaultDescription: string;
      readonly appTitle: string;
    };
    readonly en: {
      readonly lang: 'en';
      readonly siteName: string;
      readonly siteDefaultDescription: string;
      readonly appTitle: string;
    };
  };
} = {
  siteUrl: 'https://datenn.si/',
  siteDefaultOGImagePath: '/og-image.png',
  twitterCardType: 'summary_large_image',
  twitterUserName: 'datenn_si',
  locales: {
    ja: {
      lang: 'ja',
      siteName: 'だてんしのプロフィール',
      siteDefaultDescription:
        'Web フロントエンド開発やローカル画像生成を趣味でしている「だてんし」（@datenn-si）のプロフィールサイトです。',
      appTitle: 'だてんし',
    },
    en: {
      lang: 'en',
      siteName: "Datenshi's Profile",
      siteDefaultDescription:
        'The profile website of Datenshi (@datenn-si), a hobbyist in web frontend development and local image generation.',
      appTitle: 'Datenshi',
    },
  },
} as const;

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
    url: 'https://civitai.com/user/datenn_si',
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
  typescript: {
    name: 'TypeScript',
    color: '#3178c6',
  },
  astrojs: {
    name: 'Astro.js',
    color: '#ff5a03',
  },
  python: {
    name: 'Python',
    color: '#3572a5',
  },
};

export const projects: {
  readonly name: string;
  readonly description: Readonly<Record<Locale, string>>;
  readonly hpUrl?: string;
  readonly repoUrl?: string;
  readonly mainLang?: LangMeta[keyof LangMeta];
}[] = [
  {
    name: 'profile-site',
    description: { ja: 'このサイトです。', en: 'This website.' },
    hpUrl: 'https://datenn.si/',
    repoUrl: 'https://github.com/datenn-si/profile-site',
    mainLang: langMeta.astrojs,
  },
  {
    name: 'blog',
    description: { ja: 'だてんしの個人ブログ', en: "Datenshi's personal blog." },
    hpUrl: 'https://blog.datenn.si/',
    repoUrl: 'https://github.com/datenn-si/blog',
    mainLang: langMeta.typescript,
  },
  {
    name: 'sd-webui-agent-relay',
    description: {
      ja: 'Forge Neo API の前段に置くリレーです。',
      en: 'A relay that sits in front of the Forge Neo API.',
    },
    repoUrl: 'https://github.com/datenn-si/sd-webui-agent-relay',
    mainLang: langMeta.python,
  },
  {
    name: 'sd-webui-gpu-monitor',
    description: {
      ja: 'SD WebUI Forge Neo 向けの軽量な GPU 監視オーバーレイ',
      en: 'A lightweight GPU monitoring overlay for SD WebUI Forge Neo.',
    },
    repoUrl: 'https://github.com/datenn-si/sd-webui-gpu-monitor',
    mainLang: langMeta.javascript,
  },
  {
    name: 'sd-webui-danbooru-importer',
    description: {
      ja: 'SD WebUI Forge Neo 向けの Danbooru タグインポーター',
      en: 'A Danbooru tag importer for SD WebUI Forge Neo.',
    },
    repoUrl: 'https://github.com/datenn-si/sd-webui-danbooru-importer',
    mainLang: langMeta.javascript,
  },
  {
    name: 'sd-webui-custom-colorpicker',
    description: {
      ja: 'SD WebUI Forge Neo 向けのカスタムカラーピッカー',
      en: 'A custom color picker for SD WebUI Forge Neo.',
    },
    repoUrl: 'https://github.com/datenn-si/sd-webui-custom-colorpicker',
    mainLang: langMeta.javascript,
  },
  {
    name: 'youtube-hidden-tags-viewer',
    description: {
      ja: 'YouTube動画に設定された「隠しタグ」を概要欄の下に表示するユーザースクリプトです。',
      en: 'A userscript that displays the hidden tags set on a YouTube video below the description.',
    },
    repoUrl: 'https://github.com/datenn-si/youtube-hidden-tags-viewer',
    mainLang: langMeta.typescript,
  },
];
