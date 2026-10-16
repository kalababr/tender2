// Renders an icon from the SVG sprite defined in <IconSprite />.
export default function Icon({ name, ...props }) {
  return (
    <svg {...props}>
      <use href={`#${name}`} />
    </svg>
  )
}

export function IconSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
      <defs>
        <symbol id="arrow" viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6" /></symbol>
        <symbol id="mark" viewBox="0 5 46 30">
          <g fill="currentColor" stroke="none">
            <rect x="2" y="8" width="4" height="24" />
            <rect x="2" y="8" width="13.5" height="4" />
            <rect x="2" y="18" width="11" height="4" />
            <rect x="2" y="28" width="13.5" height="4" />
            <rect x="17.5" y="8" width="12" height="4" />
            <rect x="21.5" y="8" width="4" height="24" />
            <rect x="31.5" y="8" width="4" height="24" />
            <rect x="39.5" y="8" width="4" height="24" />
            <rect x="31.5" y="18" width="12" height="4" />
          </g>
        </symbol>
        <symbol id="search" viewBox="0 0 24 24"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></symbol>
        <symbol id="shield" viewBox="0 0 24 24"><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></symbol>
        <symbol id="globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></symbol>
        <symbol id="bell" viewBox="0 0 24 24"><path d="M6 9a6 6 0 0 1 12 0c0 6 3 6 3 8H3c0-2 3-2 3-8m4 11h4" /></symbol>
        <symbol id="pin" viewBox="0 0 24 24"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2" /></symbol>
        <symbol id="download" viewBox="0 0 24 24"><path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4" /></symbol>
        <symbol id="menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></symbol>
        <symbol id="mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></symbol>
        <symbol id="phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1Z" /></symbol>
        <symbol id="close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6" /></symbol>
        <symbol id="construction" viewBox="0 0 24 24"><path d="M3 20h18v-3H3z" /><path d="M5 17c0-5.5 3-10 7-10s7 4.5 7 10" /><path d="M12 7v10M9.5 8.5 9 17m5.5-8.5.5 8.5" /></symbol>
        <symbol id="technology" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M9 3v4m6-4v4M9 17v4m6-4v4M3 9h4m-4 6h4m10-6h4m-4 6h4" /></symbol>
        <symbol id="supply" viewBox="0 0 24 24"><path d="M2 6h11v10H2zM13 9h4l4 3v4h-8" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></symbol>
        <symbol id="megaphone" viewBox="0 0 24 24"><path d="M3 10v4h4l9 5V5L7 10H3Z" /><path d="M19 9a4 4 0 0 1 0 6" /></symbol>
        <symbol id="star" viewBox="0 0 24 24"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" /></symbol>
        <symbol id="building" viewBox="0 0 24 24"><path d="M4 21V5l8-2v18M12 9l8 2v10M3 21h18M8 8h1m-1 4h1m-1 4h1m6-3h1m-1 4h1" /></symbol>
      </defs>
    </svg>
  )
}
