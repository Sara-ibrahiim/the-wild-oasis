"use client"
import { useState } from 'react';
import { TextExpanderProps } from '../_lib/type';

function TextExpander({ children }:TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = children as string;
  const displayText = isExpanded
    ? text
    : text.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;
