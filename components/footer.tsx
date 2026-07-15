export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Parth Arsid</p>
        <p className="font-mono text-xs opacity-60">Next.js &middot; Vercel</p>
      </div>
    </footer>
  );
}
