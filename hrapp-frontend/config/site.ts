export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Alexander Executive Search",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Campaigns",
      href: "/",
    },
    {
      label: "Candidates",
      href: "/about",
    },
    {
      label: "Reports",
      href: "/profile",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
