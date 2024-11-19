import { Link, NavLink } from 'react-router-dom'
import { Avatar, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import logo from '../../assets/logo.png'
import './SideBar.css'
import ProFileImage from '../../assets/DefaultProfileImage.png'

export default function SideBar() {
  const navOptions = [
    { route: '/dashboard', label: 'Dashboard' },
    { route: '/register', label: 'Cadastro de novos usuarios' },
    { route: '/accessControl', label: 'Controle de acesso' },
    { route: '/report', label: 'Relatorio de consumo' },
    { route: '/monitoring', label: 'Monitoramento de secretaria' },
    { route: '/profile', label: 'Perfil' }
  ];

  return (
    <aside className='sideBar'>

      <img src={logo} alt="Logo" />

      <section className='user-info'>
        <Avatar variant='rounded' src={ProFileImage} sx={{ width: 72, height: 81 }} />

        <div className='information'>
          <Typography variant='h2'>Samantha</Typography>
          <Typography variant='body1' sx={{color: '#c5c5c5'}}>samantha@email.com</Typography>
        </div>

      </section>

      <Stack direction={'column'} gap={2}>
        {navOptions.map(option => (
          <NavLink
            to={option.route}
            style={({ isActive }) => {
              return isActive ? { color: "#FFF" } : {color: '#c5c5c5'};
            }}
          >
            <Typography variant='h6'>
              {option.label}
            </Typography>
          </NavLink>
        ))}
      </Stack>
    </aside>
  )
}