import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

export default function Social() {
  return (
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>Social</h2>
      <div className={'flex flex-row'}>
        <Link
          href="https://twitter.com/alisyedsadiq1"
          target={'_blank'}
          className="mr-4"
        >
          <Image
            priority
            src="/images/twitter.png"
            className={'inline mr-0'}
            height={40}
            width={40}
            alt="twitter icon"
          />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UC0w4anyPMuVYVaQUAJrH9Pg"
          target={'_blank'}
          className="mr-4"
        >
          <Image
            priority
            src="/images/youtube.png"
            className={'inline mr-0'}
            height={40}
            width={40}
            alt="youtube icon"
          />
        </Link>
        <Link
          href="https://github.com/syedsadiqali"
          target={'_blank'}
          className="mr-4"
        >
          <Image
            priority
            src="/images/github.png"
            className={'inline mr-0'}
            height={40}
            width={40}
            alt="github icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/syed-sadiq-ali/"
          target={'_blank'}
          className="mr-4"
        >
          <Image
            priority
            src="/images/linkedin.png"
            className={'inline mr-0'}
            height={40}
            width={40}
            alt="linkedin icon"
          />
        </Link>
      </div>
    </section>
  );
}
