
import { Suspense } from 'react'
import './App.css'
import Scene from './components/Scene'
import Label from './components/Labels'
import ExpLabel from './components/ExpLabels'
import gitub_logo from '../public/images/github_logo.png'
import linkedin_logo from '../public/images/linkedin_logo.png'
import netlify_logo from '../public/images/netlify_logo.png'
import web_logo from '../public/images/web_logo.png'



function App() {

  return (

    <>
      <div id={"bg_container"} className={"container"}>
        <div className={"wrapper"}>
        <div id='titles' className='titles'>
        <div id='title_name'>Luis Teyssier</div>
        <a   href="https://github.com/lteyssier" target="_blank" rel='noreferrer' >
          <img src={gitub_logo} alt="link_github" className='github_logo'/>
        </a>
        <a   href="https://www.linkedin.com/in/lteyssierdev" target="_blank" rel='noreferrer' >
          <img src={linkedin_logo} alt="link_linkdin" className='github_logo'/>
        </a>
        <a   href="https://app.netlify.com/teams/eluis78t/sites" target="_blank" rel='noreferrer' >
          <img src={netlify_logo} alt="link_netlify" className='github_logo'/>
        </a>
        </div>
        <div id='title_projects' className='title_projects'>
        <a className='link_project'  href="https://cafeperdido.com/" target="_blank" rel='noreferrer' > <span className='link_text'>Café Perdido</span> 
          <img src={web_logo} alt="link_web" className='github_logo_p'/>
        </a>
        <a className='link_project'  href="https://github.com/lteyssier/MueblesNavarro" target="_blank" rel='noreferrer' > <span className='link_text'>Mueblerías Navarro</span>
          <img src={gitub_logo} alt="link_linkdin" className='github_logo_p'/>
        </a>
        </div>
          <Label/>
          <ExpLabel/>
          <Suspense fallback={null}>
             <Scene />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
