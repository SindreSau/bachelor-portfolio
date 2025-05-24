type Socials = {
  name: string;
  portfolio?: string;
  github: string;
  linkedin: string;
};

export const socials: Record<string, Socials> = {
  sindre: {
    name: 'Sindre Sauarlia',
    portfolio: 'https://www.sindresau.me',
    github: 'https://github.com/sindresau',
    linkedin: 'https://www.linkedin.com/in/sindre-sauarlia/',
  },
  adne: {
    name: 'Ådne Nilsen Longva',
    github: 'https://github.com/adnenl',
    linkedin: 'https://www.linkedin.com/in/%C3%A5dne-longva-7275b8266/',
  },
  alex: {
    name: 'Alex McCorkle',
    portfolio: 'https://www.alexmccorkle.com',
    github: 'https://github.com/alexmccorkle',
    linkedin: 'https://www.linkedin.com/in/alex-mccorkle-7b6554150/',
  },
};
