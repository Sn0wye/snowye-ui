export const SITE = {
  title: 'Snowye UI',
  description: 'Snowye-ui kit docs.',
  defaultLanguage: 'en_US'
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'GabTrzimajewski'
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: 'ltr' | 'rtl';
  ogLocale?: string;
  lang?: string;
  next?: string;
  prev?: string;
};

export const KNOWN_LANGUAGES = {
  English: 'en'
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Sn0wye/snowye-ui/tree/main/docs`;
export const VIEW_SOURCE_URL = `https://github.com/Sn0wye/snowye-ui/tree/main/packages/snowye-ui/src/components/`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`; // TODO: add community integration

// See "Algolia" section of the README for more information. // TODO: add Algolia
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Overview: [
      { text: 'Introduction', link: 'en/overview/introduction' },
      { text: 'Getting Started', link: 'en/overview/getting-started' },
      { text: 'Additional Styling', link: 'en/overview/additional-styling' }
    ],
    Components: [
      { text: 'Avatar', link: 'en/components/Avatar' },
      { text: 'Button', link: 'en/components/Button' },
      { text: 'Checkbox', link: 'en/components/Checkbox' },
      { text: 'TextInput', link: 'en/components/TextInput' }
    ]
  }
};
