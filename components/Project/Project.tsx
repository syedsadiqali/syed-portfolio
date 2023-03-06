import Link from 'next/link';
import React from 'react';

export function Project({ project }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      className="border-2 border-sm p-2 rounded-lg cursor-pointer shadow-2xl shaodw-white hover:bg-white hover:text-black"
    >
      <h2 className="text-2xl no-underline hover:no-underline">{project.name}</h2>
      <p className="text-base font-light no-underline hover:no-underline">{project.description}</p>
    </Link>
  );
}
