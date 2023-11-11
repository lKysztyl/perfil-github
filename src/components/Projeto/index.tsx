import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Projetos Lista de tarefas</Titulo>
    <Paragrafo tipo="segundario">Lista de tarefas feitas com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
