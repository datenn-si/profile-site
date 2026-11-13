import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';

import { defaultLocale, locales, siteConfig, type Locale } from '@/constants';

type Copy = {
  share: string;
  changeLanguage: string;
  language: string;
  privacy: string;
  backHome: string;
  copied: string;
  name: string;
  iconAlt: string;
  tagline: string;
  blogAlt: string;
  blogLabel: string;
  aboutHeading: string;
  aboutBody: string;
  contactHeading: string;
  contactBefore: string;
  contactMid: string;
  contactAfter: string;
  emailLabel: string;
  viewEmail: string;
  projectsHeading: string;
  repository: string;
  emailTitle: string;
  emailDescription: string;
  emailMissing: string;
  encryptionHeading: string;
  encryptionHosted: string;
  encryptionDetail: string;
  notFound: string;
};

export const copy: Record<Locale, Copy> = {
  ja: {
    share: 'このページを共有',
    changeLanguage: '言語を変更',
    language: '言語',
    privacy: 'プライバシーポリシー',
    backHome: 'ホームに戻る',
    copied: 'コピーしました',
    name: 'だてんし',
    iconAlt: 'だてんしのアイコン',
    tagline: 'Web フロントエンドやローカル画像生成など',
    blogAlt: 'blog.datenn.si の favicon',
    blogLabel: 'ブログ',
    aboutHeading: '自己紹介',
    aboutBody:
      'フロントエンドは Astro.js や Tailwind CSS が得意です。ローカル画像生成には SD WebUI Forge Neo を使っています。',
    contactHeading: '連絡先',
    contactBefore: '',
    contactMid: ' や ',
    contactAfter: ' の DM も開放しています。',
    emailLabel: 'メールアドレス: ',
    viewEmail: '確認する',
    projectsHeading: '作ったもの',
    repository: 'リポジトリ',
    emailTitle: 'メールアドレス',
    emailDescription: 'だてんしの連絡用メールアドレスを記載しています。',
    emailMissing: '未設定',
    encryptionHeading: 'エンドツーエンド暗号化',
    encryptionHosted:
      'datenn.si ドメインのメールアドレスは Tuta によってホスティングされています。',
    encryptionDetail: 'Tuta を利用することでエンドツーエンド暗号化されたやり取りができます。',
    notFound: 'お探しのページは見つかりませんでした。',
  },
  en: {
    share: 'Share this page',
    changeLanguage: 'Change language',
    language: 'Language',
    privacy: 'Privacy Policy',
    backHome: 'Back to home',
    copied: 'Copied',
    name: 'Datenshi',
    iconAlt: "Datenshi's profile icon",
    tagline: 'Web frontend development and local image generation',
    blogAlt: 'blog.datenn.si favicon',
    blogLabel: 'Blog',
    aboutHeading: 'About',
    aboutBody:
      'I specialize in frontend development with Astro.js and Tailwind CSS. For local image generation, I use SD WebUI Forge Neo.',
    contactHeading: 'Contact',
    contactBefore: 'You can also contact me via DM on ',
    contactMid: ' or ',
    contactAfter: '.',
    emailLabel: 'Email: ',
    viewEmail: 'view address',
    projectsHeading: 'Projects',
    repository: 'Repository',
    emailTitle: 'Email Address',
    emailDescription: 'The contact email address for Datenshi.',
    emailMissing: 'Not configured',
    encryptionHeading: 'End-to-end encryption',
    encryptionHosted: 'Email addresses on the datenn.si domain are hosted by Tuta.',
    encryptionDetail: 'Tuta enables end-to-end encrypted communication.',
    notFound: 'The page you requested could not be found.',
  },
};

export function localeFrom(value: string | undefined): Locale {
  return locales.find((locale) => locale === value) ?? defaultLocale;
}

/** Path without a non-default locale prefix and without a trailing slash. */
export function unlocalizedPath(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    const prefix = `/${locale}`;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      pathname = pathname.slice(prefix.length) || '/';
      break;
    }
  }
  if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function barePath(pathname: string): string {
  return unlocalizedPath(pathname).replace(/^\//, '');
}

export function localeUrl(locale: Locale, pathname: string): string {
  const bare = barePath(pathname);
  return bare ? getRelativeLocaleUrl(locale, bare) : getRelativeLocaleUrl(locale);
}

export function localeAbsoluteUrl(locale: Locale, pathname: string): string {
  const bare = barePath(pathname);
  return bare ? getAbsoluteLocaleUrl(locale, bare) : getAbsoluteLocaleUrl(locale);
}

/** Keep external links as written. Rewrite this site's own URLs into the active locale. */
export function localizeSiteHref(locale: Locale, href: string): string {
  const site = new URL(siteConfig.siteUrl);
  const url = new URL(href, site);
  if (url.origin !== site.origin) return href;
  return localeUrl(locale, url.pathname);
}
