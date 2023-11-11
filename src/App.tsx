import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styled'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import themaLight from './themes/lights'
import themaDark from './themes/dark'

function App() {
  const [isDark, setIsDark] = useState(false)

  function trocaThema() {
    setIsDark(!isDark)
  }

  return (
    <ThemeProvider theme={isDark ? themaDark : themaLight}>
      <EstiloGlobal />
      <Container>
      <Sidebar trocaThema={trocaThema} />
      <main>
        <Sobre />
        <Projetos />
      </main>
      </Container>
    </ThemeProvider>
  )

}

export default App
