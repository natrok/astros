import { header, defaultLang } from './indexui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in header) return lang as keyof typeof header;
  return defaultLang;
}