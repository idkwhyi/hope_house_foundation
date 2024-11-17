'use client';

import { useEffect } from 'react';

interface GrammarlyHandlerProps {
  className?: string;
}

const GrammarlyHandler = ({ className }: GrammarlyHandlerProps): null => {
  useEffect(() => {
    // Wait for next tick to ensure body element exists
    setTimeout(() => {
      const body = document.body;
      if (body) {
        // Set the className if provided
        if (className) {
          body.className = className;
        }
        
        // Get the current Grammarly attributes
        const grChecked = body.getAttribute('data-new-gr-c-s-check-loaded');
        const grInstalled = body.getAttribute('data-gr-ext-installed');
        
        // Only set if they exist (Grammarly is actually installed)
        if (grChecked) body.setAttribute('data-new-gr-c-s-check-loaded', grChecked);
        if (grInstalled) body.setAttribute('data-gr-ext-installed', grInstalled);
      }
    }, 0);

    return () => {
      const body = document.body;
      body?.removeAttribute('data-new-gr-c-s-check-loaded');
      body?.removeAttribute('data-gr-ext-installed');
    };
  }, [className]);

  return null;
};

export default GrammarlyHandler;