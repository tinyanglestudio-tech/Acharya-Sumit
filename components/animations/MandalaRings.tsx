export default function MandalaRings() {
  return (
    <>
      {/* Inner ring — clockwise 60s */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2] anim-spin-cw"
        style={{ width: 'min(90vw, 90vh)', height: 'min(90vw, 90vh)', opacity: 0.07 }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="190" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="170" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="150" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="130" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="110" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="90"  stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="3 5" />
        {[0,30,60,90,120,150].map(a => (
          <line key={a} x1="200" y1="10" x2="200" y2="390"
            stroke="#C9A84C" strokeWidth="0.3" transform={`rotate(${a} 200 200)`} />
        ))}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
          <circle key={a} cx="200" cy="12" r="3" fill="#C9A84C"
            transform={`rotate(${a} 200 200)`} />
        ))}
        {[0,45,90,135,180,225,270,315].map(a => (
          <ellipse key={a} cx="200" cy="115" rx="8" ry="20"
            fill="none" stroke="#C9A84C" strokeWidth="0.4"
            transform={`rotate(${a} 200 200)`} />
        ))}
      </svg>

      {/* Outer ring — counter-clockwise 90s */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2] anim-spin-ccw"
        style={{ width: 'min(110vw, 110vh)', height: 'min(110vw, 110vh)', opacity: 0.04 }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="195" stroke="#FF6B1A" strokeWidth="0.3" strokeDasharray="1 12" />
        <circle cx="200" cy="200" r="175" stroke="#FF6B1A" strokeWidth="0.2" strokeDasharray="3 9" />
        <circle cx="200" cy="200" r="155" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="5 7" />
        <polygon points="200,60 360,310 40,310"  fill="none" stroke="#C9A84C" strokeWidth="0.4" />
        <polygon points="200,340 40,90 360,90"   fill="none" stroke="#C9A84C" strokeWidth="0.4" />
      </svg>
    </>
  )
}
