import { header, defaultLang } from './indexui';
import es from './es.json';
import en from './en.json';
import fr from './fr.json';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in header) return lang as keyof typeof header;
  return defaultLang;
}

export function useNavigationTranslations(lang: keyof typeof header) {
  return function t(key: keyof typeof header[typeof defaultLang]) {
    return header[lang][key] || header[defaultLang][key];
  }
}

export const geti18n = ({ currentLocale }: { currentLocale: string}) =>
{
  if (currentLocale === 'en') return en;  
  if (currentLocale === 'fr') return fr;
  return es; // Default to Spanish if no match found
}
