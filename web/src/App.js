import React from 'react'
import './global.css'
import './App.css'
import './sidebar.css'
import './main.css'
//Componentes: um bloco de ligação de HML, CS e JS que nao interfere no restnte da app
//estado:Informações manyidas pelo componente
//propriedade:Informações que um componente pai passa pra o componente filho


function App() {

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className='input-group'>
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://lh3.googleusercontent.com/-ms9OMYS-IjA/WRhjwHv6J6I/AAAAAAAAIsY/b7qJkYzxnjgLm9g_SMDhJEbcka2x2kmVACEwYBhgL/w92-h140-p/IMG_5554.JPG" alt="Vitor Hugo"/>
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
              <img src="https://lh3.googleusercontent.com/-ms9OMYS-IjA/WRhjwHv6J6I/AAAAAAAAIsY/b7qJkYzxnjgLm9g_SMDhJEbcka2x2kmVACEwYBhgL/w92-h140-p/IMG_5554.JPG" alt="Vitor Hugo"/>
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
              <img src="https://lh3.googleusercontent.com/-ms9OMYS-IjA/WRhjwHv6J6I/AAAAAAAAIsY/b7qJkYzxnjgLm9g_SMDhJEbcka2x2kmVACEwYBhgL/w92-h140-p/IMG_5554.JPG" alt="Vitor Hugo"/>
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
