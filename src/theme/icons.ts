import {
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoGmail,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { FaNodeJs, FaRegUser } from 'react-icons/fa';
import { FaMobileScreen } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp, IoIosPlay } from 'react-icons/io';
import { MdDownload, MdMusicNote, MdMusicOff, MdPause } from 'react-icons/md';
import { PiFilePdf } from 'react-icons/pi';
import {
  RiContractLeftLine,
  RiContractRightLine,
  RiDriveFill,
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
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import { VscFilePdf } from 'react-icons/vsc';
import { WiDirectionUpRight } from 'react-icons/wi';

const Icons = {
  sun: RiSunFoggyLine,
  moon: RiMoonFoggyLine,
  translate: RiTranslate,
  english: RiEnglishInput,
  upRight: WiDirectionUpRight,
  pause: MdPause,
  play: IoIosPlay,
  rightArrow: RiContractRightLine,
  leftArrow: RiContractLeftLine,
  arrowUp: IoIosArrowUp,
  arrowDown: IoIosArrowDown,
  download: MdDownload,
  filePDF: VscFilePdf,
  filePDF2: PiFilePdf,
  email: BiLogoGmail,
  music: MdMusicNote,
  musicOff: MdMusicOff,
  next: TbPlayerTrackNextFilled,
  info: BsInfoCircle,
  user: FaRegUser,
  mobile: FaMobileScreen,

  // social logos
  linkedin: BiLogoLinkedinSquare,
  github: BiLogoGithub,
  gitlab: BiLogoGitlab,

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

  // Google app icons
  googleDrive: RiDriveFill,
} as const;

export type ThemeIcons = typeof Icons;

export default Icons;
