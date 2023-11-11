import { Titulo as TittuloEstilo } from './styles'

export type Props = {
  children: string;
  fontSize?: number;
}

const Titulo = (props: Props) => <TittuloEstilo fontSize={props.fontSize}>{props.children}</TittuloEstilo>

export default Titulo
