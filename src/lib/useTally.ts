'use client';

import { useCallback, useEffect } from 'react';

interface TallyWindow extends Window {
  Tally?: {
    openPopup: (formId: string, options?: any) => void;
    closePopup: (formId: string) => void;
  };
}

declare const window: TallyWindow;

const TALLY_SCRIPT_URL = 'https://tally.so/widgets/embed.js';
const FORM_ID = 'w79DO6';

function loadTallyScript() {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${TALLY_SCRIPT_URL}"]`)) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = TALLY_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve(true);
    document.head.appendChild(script);
  });
}

export default function useTally() {
  useEffect(() => {
    loadTallyScript();
  }, []);

  const openTallyForm = useCallback(() => {
    if (window.Tally) {
      window.Tally.openPopup(FORM_ID, {
        layout: 'modal',
        width: 700,
        autoClose: 5000,
      });
    } else {
      loadTallyScript().then(() => {
        window.Tally?.openPopup(FORM_ID, {
          layout: 'modal',
          width: 700,
          autoClose: 5000,
        });
      });
    }
  }, []);

  return openTallyForm;
}