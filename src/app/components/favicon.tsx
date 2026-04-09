import { useEffect } from 'react';

export function Favicon() {
  useEffect(() => {
    // Create and append favicon links
    const links = [
      { rel: 'icon', type: 'image/x-icon', href: './src/assets/leaf-32.ico' },
      { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: './src/assets/leaf-32.ico' },
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: './src/assets/leaf-32.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: './src/assets/leaf-32.ico' },
      { rel: 'mask-icon', type: 'image/x-icon', href: './src/assets/leaf-32.ico', color: '#10b981' },
    ];

    const existingLinks: HTMLLinkElement[] = [];

    links.forEach(linkAttrs => {
      const link = document.createElement('link');
      Object.entries(linkAttrs).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      document.head.appendChild(link);
      existingLinks.push(link);
    });

    // Cleanup function to remove links when component unmounts
    return () => {
      existingLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return null;
}
