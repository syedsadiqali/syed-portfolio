import React from 'react';
import { parseISO, format } from 'date-fns';

export default function Date({
  dateString
}: {
  dateString: string;
}): JSX.Element {
  const date = parseISO(dateString || '');

  return <p>{format(date, 'LLLL d, yyyy')}</p>;
}
