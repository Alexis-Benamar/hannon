import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const handleGoBack = () => navigate(-1)

  return (
    <div>
      <h2>
        <button className="normal" onClick={handleGoBack} style={{ margin: 0, marginRight: 20 }}>
          ⬅️
        </button>
        about
      </h2>
      <section>
        {/* TODO: change titles */}
        <h3>why</h3>
        <p>todo</p>
        <h3>how</h3>
        <p>todo</p>
        <h3>what</h3>
        <p>todo</p>
      </section>
    </div>
  )
}

export default About
