import logo from '../../assets/logo.png'
import styles from './SideBar.css'
export default function SideBar () {
    return (
      <>
        <img src={logo} alt="Logo" />

        <div>
          <img src="" alt="ProfilePicture" />
          <h2>Nome</h2>
          <p>email@testes.com</p>
        </div>
        
        {/* Trocar pelo Link do react router */}
        <div>
          <a href="">Dashboard</a>
          <a href="">Cadastro de novos usuarios</a>
          <a href="">Controle de acesso</a>
          <a href="">Relatorio de consumo</a>
          <a href="">Monitoramento de secretaria</a>
        </div>
        <div>
          <a href="">Perfil</a>
        </div>
      </>
    )
}