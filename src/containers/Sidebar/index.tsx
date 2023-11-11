import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaThema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Patrick</Titulo>
      <Paragrafo tipo="segundario" fontSize={16}>lKysztyl</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Estudante</Descricao>
      <BotaoTema onClick={props.trocaThema}>Troca tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
