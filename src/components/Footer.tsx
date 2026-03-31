const Footer = () => (
  <footer
    className="py-10 px-6 text-center"
    style={{ backgroundColor: "hsl(280, 65%, 28%)" }}
  >
    <p className="font-body text-xs text-foreground/60 mb-2 tracking-widest uppercase">
      Martín Almada · Mago Ilusionista
    </p>
    <a
      href="https://www.instagram.com/martinalmadamago/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-foreground/80 font-body text-sm hover:text-foreground transition-colors"
    >
      @martinalmadamago
    </a>
    <p className="text-foreground/30 font-body text-[10px] mt-4">
      Diseño digital ✦ Invitación interactiva
    </p>
  </footer>
);

export default Footer;
