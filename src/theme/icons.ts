import { AiOutlineDownload, AiOutlinePause } from 'react-icons/ai';
import { FaGithub, FaGitlab, FaLinkedinIn, FaNodeJs } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosPlay } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import {
  RiEnglishInput,
  RiMoonFoggyLine,
  RiSunFoggyLine,
  RiTranslate,
} from 'react-icons/ri';
import {
  SiAmazonaws,
  SiApollographql,
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRstudio,
  SiSemanticuireact,
  SiSequelize,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si';
import { WiDirectionUpRight } from 'react-icons/wi';

const Icons = {
  sun: RiSunFoggyLine,
  moon: RiMoonFoggyLine,
  translate: RiTranslate,
  english: RiEnglishInput,
  upRight: WiDirectionUpRight,
  pause: AiOutlinePause,
  play: IoIosPlay,
  rightArrow: MdChevronRight,
  download: AiOutlineDownload,
  email: HiOutlineMail,

  // social logos
  linkedin: FaLinkedinIn,
  github: FaGithub,
  gitlab: FaGitlab,

  // frontend logos
  reactJs: SiReact,
  nextJs: SiNextdotjs,
  redux: SiRedux,
  styledComponents: SiStyledcomponents,
  jest: SiJest,
  reactTestingLibrary: SiTestinglibrary,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  semanticui: SiSemanticuireact,

  // backend logos
  nodeJs: FaNodeJs,
  express: SiExpress,
  aws: SiAmazonaws,
  googleCloud: SiGooglecloud,
  googleFirebase: SiFirebase,
  apollo: SiApollographql,
  graphQL: SiGraphql,
  postgreSQL: SiPostgresql,
  mongoDB: SiMongodb,
  sequelize: SiSequelize,

  // general logos
  javascript: SiJavascript,
  typescript: SiTypescript,
  css: SiCss3,
  html: SiHtml5,
  python: SiPython,
  c: SiCplusplus,
  r: SiRstudio,
} as const;

export type ThemeIcons = typeof Icons;

export default Icons;
