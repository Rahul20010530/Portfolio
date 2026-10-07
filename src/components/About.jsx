import TiltCard from './TiltCard'

export default function About() {
  const contactItems = [
    {
      label: 'Location',
      value: 'New Delhi, India',
      icon: '📍',
    },
    {
      label: 'Experience',
      value: '5 Years',
      icon: '⏱',
    },
    {
      label: 'Email',
      value: 'rahulsiwan2001@gmail.com',
      icon: '✉️',
      url: 'mailto:rahulsiwan2001@gmail.com',
    },
    {
      label: 'Phone',
      value: '+91 9135578125',
      icon: '📞',
      url: 'tel:+919135578125',
    },
    {
      label: 'LinkedIn',
      value: 'rahul2001kumar',
      icon: '🔗',
      url: 'https://linkedin.com/in/rahul2001kumar',
    },
    {
      label: 'GitHub',
      value: 'github.com/Rahul20010530',
      icon: '◉',
      url: 'https://github.com/Rahul20010530',
    },
    {
      label: 'Status',
      value: 'Open to Offers',
      icon: '🟢',
    },
  ]

  return (
    <section
      id="about"
      className="section"
      style={{ paddingTop: '80px' }}
    >
      <div className="container">

        <div
          className="resp-grid-2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'start',
          }}
        >

          {/* ==================== LEFT ==================== */}

          <div className="reveal-left">

            <div className="section-tag">
              About Me
            </div>

            <h2 className="section-title">
              Building Systems
              <br />
              <span>That Scale.</span>
            </h2>

            <div className="accent-line" />

            <p
              style={{
                fontSize: 'clamp(14px,1.6vw,16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '18px',
              }}
            >
              Backend Developer with{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                5 years of experience
              </strong>{' '}
              building scalable backend applications, REST APIs,
              data-processing systems, and Generative AI solutions
              using Python.

              <span style={{ color: 'var(--accent)' }}>
                {' '}My experience spans Staqu Technologies,
                Pioneer E Solutions, and HostBooks
              </span>
              , where I have worked on AI/LLM systems, Government
              of India platforms, law-enforcement applications,
              data pipelines, and backend services.
            </p>

            <p
              style={{
                fontSize: 'clamp(14px,1.6vw,16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '32px',
              }}
            >
              My core expertise includes Python, FastAPI, Django,
              Django REST Framework, MongoDB, SQL, AWS, RAG, NLP,
              semantic search, embeddings, vector search, Milvus,
              and OpenSearch.

              <span style={{ color: 'var(--accent)' }}>
                {' '}I focus on building secure, scalable, and
                high-performance systems
              </span>{' '}
              from REST APIs and data pipelines to AI-powered
              applications.
            </p>

            {/* ==================== CONTACT CARDS ==================== */}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }}
            >

              {contactItems.map((item, i) => (

                <TiltCard
                  key={i}
                  intensity={8}
                  glowColor="var(--accent)"
                  style={{
                    padding: '12px 14px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    transition:
                      'border-color 0.2s, background 0.2s',
                  }}
                  className="hoverable"

                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      'var(--border-hover)'

                    e.currentTarget.style.background =
                      'var(--surface-2)'
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      'var(--border)'

                    e.currentTarget.style.background =
                      'var(--surface)'
                  }}
                >

                  {/* Label */}

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      color: 'var(--accent)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {item.icon} {item.label}
                  </div>

                  {/* Clickable / Normal Value */}

                  {item.url ? (

                    <a
                      href={item.url}
                      target={
                        item.url.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        item.url.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        wordBreak: 'break-word',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'color 0.2s',
                      }}

                      onMouseEnter={(e) => {
                        e.currentTarget.style.color =
                          'var(--accent)'
                      }}

                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          'var(--text-primary)'
                      }}
                    >
                      {item.value}
                    </a>

                  ) : (

                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        wordBreak: 'break-word',
                      }}
                    >
                      {item.value}
                    </div>

                  )}

                </TiltCard>

              ))}

            </div>
          </div>


          {/* ==================== RIGHT TERMINAL ==================== */}

          <div
            className="reveal-right resp-hide-mobile"
            style={{
              paddingTop: '32px',
              position: 'relative',
            }}
          >

            <TiltCard
              intensity={6}
              glowColor="var(--accent-2)"
              style={{
                background: 'var(--bg-3)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow:
                  '0 24px 80px rgba(0,0,0,0.6)',
                animation:
                  'float-slow 8s ease-in-out infinite',
                border:
                  '1px solid rgba(0,229,255,0.12)',
              }}
            >

              {/* Terminal Header */}

              <div
                style={{
                  padding: '12px 16px',
                  background:
                    'rgba(255,255,255,0.02)',
                  borderBottom:
                    '1px solid rgba(0,229,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >

                {[
                  '#ff5f57',
                  '#febc2e',
                  '#28c840',
                ].map((c, i) => (

                  <div
                    key={i}
                    style={{
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      background: c,
                    }}
                  />

                ))}

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    marginLeft: '8px',
                  }}
                >
                  developer.json
                </span>

              </div>


              {/* Terminal Content */}

              <div
                style={{
                  padding: '20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12.5px',
                  lineHeight: 1.9,
                }}
              >

                {/* Command */}

                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                  }}
                >

                  <span
                    style={{
                      color: 'var(--accent)',
                    }}
                  >
                    $
                  </span>

                  <span
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    cat developer.json
                  </span>

                </div>


                {/* JSON */}

                <div
                  style={{
                    color: 'var(--text-secondary)',
                    marginTop: '2px',
                  }}
                >

                  {'{'}

                  <div
                    style={{
                      paddingLeft: '14px',
                    }}
                  >

                    <TerminalRow
                      keyName="name"
                      value="Rahul Kumar"
                      color="#fbbf24"
                    />

                    <TerminalRow
                      keyName="role"
                      value="Backend Developer"
                      color="#fbbf24"
                    />

                    <TerminalRow
                      keyName="experience"
                      value="5 years"
                      color="var(--accent)"
                    />

                    <TerminalRow
                      keyName="primary_stack"
                      value='["Python","FastAPI","Django","DRF"]'
                      color="#34d399"
                    />

                    <TerminalRow
                      keyName="databases"
                      value='["MongoDB","MySQL","PostgreSQL","Redis"]'
                      color="var(--accent-2)"
                    />

                    <TerminalRow
                      keyName="gen_ai"
                      value='["LLM","RAG","NLP","LangChain","LangGraph"]'
                      color="#a78bfa"
                    />

                    <TerminalRow
                      keyName="search"
                      value='["Milvus","OpenSearch","Vector Search"]'
                      color="#60a5fa"
                    />

                    <TerminalRow
                      keyName="cloud"
                      value='["AWS S3","EC2","Route 53","IAM"]'
                      color="#fb923c"
                    />

                    <TerminalRow
                      keyName="organizations"
                      value='["Staqu","Pioneer E Solutions","HostBooks"]'
                      color="#f472b6"
                    />

                  </div>

                  {'}'}

                </div>


                {/* Cursor */}

                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    marginTop: '4px',
                  }}
                >

                  <span
                    style={{
                      color: 'var(--accent)',
                    }}
                  >
                    $
                  </span>

                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '15px',
                      background: 'var(--accent)',
                      animation:
                        'blink 1s step-end infinite',
                    }}
                  />

                </div>

              </div>

            </TiltCard>

          </div>

        </div>
      </div>
    </section>
  )
}


/* =========================================================
   TERMINAL ROW COMPONENT
========================================================= */

function TerminalRow({
  keyName,
  value,
  color,
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
      }}
    >

      <span
        style={{
          color: 'var(--accent-2)',
        }}
      >
        "{keyName}"
      </span>

      <span
        style={{
          color: 'var(--text-muted)',
        }}
      >
        :
      </span>

      <span style={{ color }}>
        "{value}"
      </span>

    </div>
  )
}