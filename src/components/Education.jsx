const internships = [
  {
    role: 'Full Stack Development Intern',
    org: 'Ducat India',
    period: 'Jan 2022 – Jul 2022',
    desc: 'Hands-on experience with Python, Django, DRF, HTML, and CSS. Built REST APIs and optimized backend logic for better performance.',
    tags: ['Python', 'Django', 'DRF', 'REST APIs', 'HTML/CSS'],
  },
  {
    role: 'UX-ProdX Intern',
    org: 'UX-ProdX',
    period: 'Jan 2022 – Mar 2022',
    desc: 'Designed scalable, maintainable UI components from Figma designs. Enhanced UX across navigation, account creation, sign-in, and registration pages.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Figma', 'UI Design'],
  },
]

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div style={{ marginBottom: '64px' }} className="reveal">
          <div className="section-tag">Education & Training</div>
          <h2 className="section-title">
            Academic<br /><span>Background</span>
          </h2>
          <div className="accent-line" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          {/* Degree card */}
          <div className="reveal-left">
            <div style={{
              position: 'relative',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,255,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Corner decoration */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle at top right, rgba(200,255,0,0.06), transparent)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, var(--accent), transparent)',
              }} />

              {/* Degree label */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--accent)',
                background: 'var(--accent-dim)',
                border: '1px solid var(--border)',
                padding: '5px 12px',
                borderRadius: '4px',
                marginBottom: '24px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                <span>🎓</span> Bachelor's Degree
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                color: 'var(--text-primary)',
                letterSpacing: '0.03em',
                lineHeight: 1.1,
                marginBottom: '12px',
              }}>
                BCA
              </h3>
              <div style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                marginBottom: '4px',
                fontWeight: 500,
              }}>Bachelor of Computer Applications</div>
              <div style={{
                fontSize: '15px',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: '8px',
              }}>
                Maulana Mazharul Haque Arabic<br />and Persian University
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                marginBottom: '24px',
              }}>Patna, Bihar · Jun 2018 – Aug 2021</div>

              <div style={{
                display: 'flex',
                gap: '16px',
              }}>
                {[
                  { label: 'Duration', value: '3 Years' },
                  { label: 'Field', value: 'Computer Science' },
                  { label: 'Status', value: 'Completed' },
                ].map((item, i) => (
                  <div key={i} style={{
                    flex: 1,
                    padding: '12px',
                    background: 'var(--bg-3)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}>{item.label}</div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Internships */}
          <div className="reveal-right">
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--text-muted)', display: 'block' }} />
              Internships
            </div>

            {internships.map((intern, i) => (
              <div
                key={i}
                className="hoverable"
                style={{
                  padding: '28px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '16px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-2)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: 'var(--accent-2)',
                  borderRadius: '0 2px 2px 0',
                }} />
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--accent-2)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}>{intern.period}</div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}>{intern.role}</div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--accent-2)',
                  fontWeight: 500,
                  marginBottom: '12px',
                }}>{intern.org}</div>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}>{intern.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {intern.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
