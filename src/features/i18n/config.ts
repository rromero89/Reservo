import { I18NConfig, LangCode, SupportedLang } from './types';

const langENUS: SupportedLang = {
  code: LangCode.EN_US,
  label: 'English (US)',
};

const langTRTR: SupportedLang = {
  code: LangCode.TR_TR,
  label: 'Türkçe',
};

const langESVE: SupportedLang = {
  code: LangCode.ES_VE,
  label: 'Español (VE)',
};
export const i18nConfig: I18NConfig = {
  // supportedLanguages: [langENUS, langTRTR, langESVE],
  supportedLanguages: [langENUS, langESVE],
  fallbackLang: langENUS,
  urlParam: 'lang',
  debug: false,
};
