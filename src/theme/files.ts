// import resume from './files/resume.pdf';

const Files = {
  // resume: resume,
} as const;

export type ThemeFiles = typeof Files;

export default Files;
