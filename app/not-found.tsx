import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow dark">
        <span />
        Page not found
      </p>
      <h1>
        This page
        <br />
        <em>isn&apos;t here.</em>
      </h1>
      <p>The link may be old, or the page may have moved.</p>
      <Link className="button primary" href="/">
        Back to home <span>↗</span>
      </Link>
    </main>
  );
}
