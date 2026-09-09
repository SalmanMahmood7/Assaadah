export default function Statistics() {
  const stats = [
    {
      number: "25,000+",
      label: "Lives Transformed",
      description: "Beneficiaries reached through our comprehensive welfare programs"
    },
    {
      number: "150+",
      label: "Communities Served",
      description: "Villages and urban areas supported across multiple regions"
    },
    {
      number: "5,000+",
      label: "Students Educated",
      description: "Children and adults empowered through our educational initiatives"
    },
    {
      number: "15,000+",
      label: "Medical Services",
      description: "Patients treated through our healthcare programs"
    },
    {
      number: "75+",
      label: "Religious Institutions",
      description: "Mosques built and maintained for spiritual development"
    },
    {
      number: "50,000+",
      label: "Trees Planted",
      description: "Environmental conservation through plantation campaigns"
    },
    {
      number: "2,000+",
      label: "Families Housed",
      description: "Emergency shelter and permanent housing provided"
    },
    {
      number: "8,000+",
      label: "Families Supported",
      description: "Poverty alleviation through financial aid and skill training"
    }
  ];

  return (
    <section id="impact" className="statistics-section">
      <div className="container">
        <div className="statistics-header">
          <span className="section-label">OUR IMPACT</span>
          <h2 className="section-title">
            Transforming Lives <span className="highlight">Through Islamic Welfare</span>
          </h2>
          <p className="section-description">
            Witness the measurable impact of As-Sa'adah's comprehensive welfare programs
            across education, healthcare, poverty alleviation, and spiritual development
          </p>
        </div>

        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)} key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
