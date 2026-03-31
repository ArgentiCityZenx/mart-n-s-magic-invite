const Footer = () => (
  <footer
    className="py-10 px-6 text-center"
    style={{ backgroundColor: "hsl(280, 65%, 28%)" }}
  >
    <p className="font-body text-xs tracking-widest uppercase" style={{ color: "hsla(0,0%,100%,0.6)" }}>
      Martín Almada · Mago Ilusionista
    </p>
    <a
      href="https://www.instagram.com/martinalmadamago/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-body text-sm mt-2 transition-colors"
      style={{ color: "hsla(0,0%,100%,0.85)" }}
    >
      @martinalmadamago
    </a>
    <p className="font-body text-[10px] mt-4" style={{ color: "hsla(0,0%,100%,0.3)" }}>
      Diseño digital ✦ Invitación interactiva
    </p>
  </footer>
);

export default Footer;
