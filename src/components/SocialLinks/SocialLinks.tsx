import { GoodreadsIcon } from '@/components/icons/GoodreadsIcon';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { InstagramIcon } from '@/components/icons/Instagram';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TraktTvIcon } from '@/components/icons/TraktTvIcon';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/danielmnv',
    icon: <GithubIcon className="social-icon" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/danielmnv',
    icon: <LinkedInIcon className="social-icon" />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/danielmnvz',
    icon: <InstagramIcon className="social-icon" />,
  },
  {
    name: 'Trakt',
    url: 'https://trakt.tv/users/danielmnv',
    icon: <TraktTvIcon className="social-icon" />,
  },
  {
    name: 'Goodreads',
    url: 'https://goodreads.com/user/show/178085456-daniel-molina',
    icon: <GoodreadsIcon className="social-icon" />,
  },
];

export function SocialLinks() {
  return (
    <ul
      className="ml-0 mt-8 flex items-center justify-center lg:ml-1 lg:justify-start"
      aria-label="Social media"
    >
      {socialLinks.map((social) => (
        <li key={social.name} className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{social.name}</span>
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
