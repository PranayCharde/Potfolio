import SkillItem from '../../components/ui/SkillItem';
import SkillBar from '../../components/ui/SkillBar';

function SkillsPage() {
  const skills = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'React', icon: 'R' },
    { name: 'HTML/CSS', icon: 'C' },
    { name: 'Node.js', icon: 'N' },
    { name: 'Python', icon: 'P' },
    { name: 'UI/UX', icon: 'U' }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-description text-center fade-in-up" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          <p>I've developed expertise in various technologies and tools throughout my career. Here are some of the key skills I bring to projects:</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} name={skill.name} className="fade-in-up" style={{ transitionDelay: `${index * 0.1}s` }} />
          ))}
        </div>
        
        {/* Detailed Skills Bars */}
        <div className="skills-details fade-in-up" style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0' }}>
          <SkillBar name="Frontend Development" percentage={90} />
          <SkillBar name="Backend Development" percentage={85} />
          <SkillBar name="UI/UX Design" percentage={80} />
          <SkillBar name="Database Management" percentage={75} />
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;