import { useEffect } from 'react';

/**
 * Sets the document title and meta description for the current page.
 * Use once per page with a unique, descriptive title (<=60 chars) and
 * description (<=160 chars) for SEO.
 */
export default function useDocumentMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}