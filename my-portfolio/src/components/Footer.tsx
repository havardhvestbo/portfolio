export function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-muted/70">
      <div className="editorial-container py-8 text-center text-[13px] text-muted">
        &copy; {new Date().getFullYear()} Håvard
      </div>
    </footer>
  );
}
