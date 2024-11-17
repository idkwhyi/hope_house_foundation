'use client';

import React, { useEffect, useState } from 'react';

interface BodyWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const BodyWrapper = ({ children, className }: BodyWrapperProps): JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Clean up attributes when component unmounts
    return () => {
      const body = document.querySelector('body');
      body?.removeAttribute('data-new-gr-c-s-check-loaded');
      body?.removeAttribute('data-gr-ext-installed');
    };
  }, []);

  // Use a single source of truth for className
  const bodyClass = className?.trim() || '';

  return (
    <body 
      className={bodyClass}
      // Only add Grammarly attributes after mount
      {...(mounted ? {
        'data-new-gr-c-s-check-loaded': document?.querySelector('body')?.getAttribute('data-new-gr-c-s-check-loaded') ?? '',
        'data-gr-ext-installed': document?.querySelector('body')?.getAttribute('data-gr-ext-installed') ?? ''
      } : {})}
    >
      {children}
    </body>
  );
};

export default BodyWrapper;