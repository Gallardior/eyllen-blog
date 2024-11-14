import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className='mx-auto max-w-5xl px-5 py-6'>
      <ul className='flex items-center justify-center gap-4'>
        <li>
          <a href='https://www.linkedin.com/' target='_blank' className='relative group/tooltip p-4 py-3 rounded-xl grid place-items-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white  shadow-md' rel='noreferrer'>
            <i className='fa-brands fa-linkedin text-base sm:text-lg' />
            <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Linkedin</small>
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com/' target='_blank' className='relative group/tooltip p-4 py-3 rounded-xl grid place-items-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white  shadow-md' rel='noreferrer'>
            <i className='fa-brands fa-twitter text-base sm:text-lg' />
            <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Twitter</small>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/' target='_blank' className='relative group/tooltip p-4 py-3 rounded-xl grid place-items-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white  shadow-md' rel='noreferrer'>
            <i className='fa-brands fa-facebook text-base sm:text-lg' />
            <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Facebook</small>
          </a>
        </li>
        <li>
          <a href='https://www.github.com/' target='_blank' className='relative group/tooltip p-4 py-3 rounded-xl grid place-items-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white  shadow-md' rel='noreferrer'>
            <i className='fa-brands fa-github text-base sm:text-lg' />
            <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Github</small>
          </a>
        </li>
        <li>
          <a href='#' target='_blank' className='relative group/tooltip p-4 py-3 rounded-xl grid place-items-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white  shadow-md' rel='noreferrer'>
            <i className='fa-brands fa-whatsapp text-base sm:text-lg' />
            <small className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">WhatsApp</small>
          </a>
        </li>
      </ul>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <p className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2024 <a href='#' target='_blank' className='hover:underline hover:text-sky-500 mr-1' rel='noreferrer'>LleenParedes™.</a> All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
