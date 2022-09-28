import React from 'react'
import { useNavigate } from 'react-router'

export function ProjectLink() {
  const projectsArray = new Array(10).fill({ id: 1, name: 'project' })
  const navigate = useNavigate()

  const handleLinkClick = (e) => {
    return navigate(`/projects/${e.target.id}`)
  }
  return (
    <main id="projects">
      <section className="section">
        <div className="container">
          <div className="projects_container">
            {projectsArray.map((proj, i) => (
              <div
                onClick={handleLinkClick}
                id={proj.id}
                key={i}
                className="projects_item"
              >
                {proj.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
