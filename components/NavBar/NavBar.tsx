import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';

const NavBar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { resolvedTheme, setTheme } = useTheme();

  const isLightTheme = resolvedTheme === 'light';

  return (
    <nav>
      <div
        className={'h-2 '}
        style={{
          backgroundImage:
            'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
        }}
      >
        {' '}
      </div>
      <div className={'flex my-0 mx-auto max-w-xl	 justify-center py-5'}>
        <div className="ml-auto">
          <Link
            href="/"
            className={`${
              router.pathname.startsWith('/') ? 'red' : null
            } mr-4`}
          >
            Home
          </Link>
          <Link href="https://blog.syedsadiqali.com" className={'mr-4'}>
            Blog
          </Link>
          <Link href="/projects" className={'mr-4'}>
            Projects
          </Link>
        </div>
        {mounted && (
          <div
            onClick={() => setTheme(isLightTheme ? 'dark' : 'light')}
            className="cursor-pointer ml-auto"
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill={isLightTheme ? 'black' : 'white'}
                d="m20.22966,12c0,-4.41754 -3.6862,-8.00158 -8.22967,-8.00158l0,16.00315c4.54346,0 8.22967,-3.58404 8.22967,-8.00158zm2.74322,0c0,5.89283 -4.91208,10.66877 -10.97289,10.66877s-10.97289,-4.77594 -10.97289,-10.66877s4.91208,-10.66877 10.97289,-10.66877s10.97289,4.77594 10.97289,10.66877z"
              />
            </svg>
          </div>
        )}
      </div>{' '}
    </nav>
  );
};

export default NavBar;
