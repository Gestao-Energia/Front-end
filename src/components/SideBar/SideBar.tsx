import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import  './SideBar.css'
import { Avatar, Typography } from '@mui/material'
export default function SideBar () {
    return (
      <div className='sideBar'>

        <img src={logo} alt="Logo" />

        <div className='user-info'>
            <Avatar variant='square'  src='' sx={{width:72, height:81}}/>

          <div className='information'>
            <Typography variant='h2'>Nome</Typography>
            <Typography variant='body1'>email@teste.com</Typography>
          </div>

        </div>

          <ul>
            <li>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
              <Link to={'/register'}>Cadastro de novos usuarios</Link>
            </li>
            <li>
              <Link to={'/accessControl'}>Controle de acesso</Link>
            </li>
            <li>
              <Link to={'/report'}>Relatorio de consumo</Link>
            </li>
            <li>
              <Link to={'/monitoring'}>Monitoramento de secretaria</Link>
            </li>
            <li>
              <Link to={'/profile'}>perfil</Link>
            </li>
          </ul>
      </div>
    )
}