import * as es0 from '../content/es/about/about.md';
import * as es1 from '../content/es/about/about-p1.md';
import * as es2 from '../content/es/about/about-p2.md';
import * as es3 from '../content/es/about/about-p3.md';
import * as es4 from '../content/es/about/about-p4.md';

import * as fr0 from '../content/fr/about/about.md';
import * as fr1 from '../content/fr/about/about-p1.md';
import * as fr2 from '../content/fr/about/about-p2.md';
import * as fr3 from '../content/fr/about/about-p3.md';
import * as fr4 from '../content/fr/about/about-p4.md';

import * as en0 from '../content/en/about/about.md';
import * as en1 from '../content/en/about/about-p1.md';
import * as en2 from '../content/en/about/about-p2.md';
import * as en3 from '../content/en/about/about-p3.md';
import * as en4 from '../content/en/about/about-p4.md';


// Tipo para los idiomas soportados
export type Lang = 'es' | 'fr' | 'en';

// Función que devuelve los contenidos por idioma
export function getAboutSections({ currentLocale }: { currentLocale: string})  {
  const sections: Record<Lang, any[]> = {
    es: [es0, es1, es2, es3, es4],
    fr: [fr0, fr1, fr2, fr3, fr4],
    en: [en0, en1, en2, en3, en4],
  };

  if (currentLocale === 'en') return sections.en;  
  if (currentLocale === 'fr') return sections.fr;
  return sections.es; // Default to Spanish if no match found
}