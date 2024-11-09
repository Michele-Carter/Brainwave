import Section from './Section';
import { socials } from '../constants';

const Footer = () => {
  return (
    <Section crosses classname="!px-0 !py-10">
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        {/* Display copyright text with the current year */}
        <p className='caption text-n-4 lg:block'>©{new Date().getFullYear()}. All rights reserved.</p>
        
        {/* Social icons list */}
        <ul className='flex gap-5 flex-wrap'>
          {socials.map((item) => (
            <a 
              key={item.id} // Unique key for each social link
              href="/#" // Set href to "#" to avoid actual links
              onClick={(e) => e.preventDefault()} // Prevents any action on click
              className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6'
            >
              <img 
                src={item.iconUrl} // Icon for the social link
                width={16}
                height={16}
                alt={item.title} // Accessible alt text based on the social media title
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer;

