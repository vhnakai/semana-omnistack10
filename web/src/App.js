import React , {useState,useEffect } from 'react'
import api from './services/api'

import './global.css'
import './App.css'
import './sidebar.css'
import './main.css'
//Componentes: um bloco de ligação de HML, CS e JS que nao interfere no restnte da app
//estado:Informações manyidas pelo componente
//propriedade:Informações que um componente pai passa pra o componente filho


function App() {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  async function handleAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      longitude,
      latitude,
    })

    console.log(response.data)

  }
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input 
            name="github_username" 
            id="github_username" 
            required 
            value={github_username}
            onChange= { e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange= { e => setTechs(e.target.value)}
            />
          </div>

          <div className='input-group'>
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number"
              name="latitude" 
              id="latitude" 
              required 
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/36956647?s=400&u=744c6acd1e256f4120369a73323a74a09e161469&v=4" alt="Vitor Hugo"/>
              <div className="user-info">
                <strong>Vitor Nakai</strong>
                <span>PHP, Node.js, React</span>
              </div>
            </header>
            <p>Programador Junior - Estudando Stack Node c/ React e Vue Aprimorando em PHP</p>
            <a href="https://github.com/vhnakai">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/36956647?s=400&u=744c6acd1e256f4120369a73323a74a09e161469&v=4" alt="Vitor Hugo"/>
              <div className="user-info">
                <strong>Vitor Nakai</strong>
                <span>PHP, Node.js, React</span>
              </div>
            </header>
            <p>Programador Junior - Estudando Stack Node c/ React e Vue Aprimorando em PHP</p>
            <a href="https://github.com/vhnakai">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/36956647?s=400&u=744c6acd1e256f4120369a73323a74a09e161469&v=4" alt="Vitor Hugo"/>
              <div className="user-info">
                <strong>Vitor Nakai</strong>
                <span>PHP, Node.js, React</span>
              </div>
            </header>
            <p>Programador Junior - Estudando Stack Node c/ React e Vue Aprimorando em PHP</p>
            <a href="https://github.com/vhnakai">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App
