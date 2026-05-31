import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Sidan har bytt namn till /forslag. Denna stub omdirigerar dit och
// bevarar ev. ?tab=. Server-side 301 hanteras dessutom i netlify.toml.
export default function LosningarRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const tab = typeof router.query.tab === 'string' ? `?tab=${router.query.tab}` : '';
    router.replace(`/forslag${tab}`);
  }, [router.isReady, router.query]);
  return null;
}
