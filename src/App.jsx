
import { Suspense } from 'react'
import './App.css'
import Scene from './components/Scene'
import Label from './components/Labels'
import ExpLabel from './components/ExpLabels'
import gitub_logo from '../public/images/github_logo.png'
import linkedin_logo from '../public/images/linkedin_logo.png'
import netlify_logo from '../public/images/netlify_logo.png'
//import web_logo from '../public/images/web_logo.png'



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
        <div id='title_projects1' className='title_projects1'>
        <a className='linkCafe' id='linkCafe'  href="https://cafeperdido.com/" target="_blank" rel='noreferrer' >
          <img src={gitub_logo} alt="link_cafe" className='github_logo_p'/>
        </a>
        </div>
        <div  id='title_projects2' className='title_projects2'>  
        <a className='link_project' id='linkF1'  href="https://github.com/lteyssier/F1TracksDeckGL" target="_blank" rel='noreferrer' >
          <img src={gitub_logo} alt="link_f1" className='github_logo_p'/>
        </a>
        </div>
        <div  id='title_projects3' className='title_projects3'>  
        <a className='link_project' id='linkAudio'  href="https://github.com/lteyssier/AudioVisualizerR3F" target="_blank" rel='noreferrer' >
          <img src={gitub_logo} alt="link_audio" className='github_logo_p'/>
        </a>
        </div>
        <div  id='title_projects4' className='title_projects4'>  
        <a className='link_project' id='linkMap'  href="https://github.com/lteyssier/MapDeckGLCoffeShops" target="_blank" rel='noreferrer' >
          <img src={gitub_logo} alt="link_map" className='github_logo_p'/>
        </a>
        </div>
        <div  id='title_projects5' className='title_projects5'>  
        <a className='link_project' id='linkGame'  href="https://github.com/lteyssier/VideoGameBall" target="_blank" rel='noreferrer' >
          <img src={gitub_logo} alt="link_game" className='github_logo_p'/>
        </a>
        </div>
        <div  id='title_projects6' className='title_projects6'>  
        <a className='link_project' id='linkFin'  href="https://github.com/lteyssier/FinanceDashboard" target="_blank" rel='noreferrer' > 
          <img src={gitub_logo} alt="link_finance" className='github_logo_p'/>
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
