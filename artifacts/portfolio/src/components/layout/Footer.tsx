export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 mt-20 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 text-center text-muted-foreground text-sm flex flex-col items-center gap-4">
        <p className="font-serif italic text-base text-foreground/80">Bridging computation and human learning.</p>
        <p>© {currentYear} Maryam Babaee. All rights reserved.</p>
      </div>
    </footer>
  );
}
