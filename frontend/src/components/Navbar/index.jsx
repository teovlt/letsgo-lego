import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../Icon';
import SearchBar from '../SearchBar';
import { IconsBox, Link, Logo, MainNav, Navbar as Nav, NavBarToggle, NavLi, NavigationLink, IconLink } from './NavbarElements';
import { UserIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
  const location = useLocation();

  const [displayNav, setDisplayNav] = useState(false);
  const toggleNavBar = () => {
    setDisplayNav(!displayNav);
  };

  useEffect(() => {
    displayNav ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  });

  const [search, setSearch] = useState('');
  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <Nav>
      <NavBarToggle onClick={() => toggleNavBar()}>
        <Icon name={displayNav ? 'XMark' : 'Bars-3'} width='20' height='20' fill='var(--text-base-quaternary)' />
      </NavBarToggle>
      <Logo to='/'>
        Letsgo<span>Lego</span>
      </Logo>
      <Link to='/vendre' display={displayNav ? 'flex' : 'none'}>
        <Icon name='Banknotes' width='20' height='20' fill='var(--text-base-primary)' />
        Vendre
      </Link>
      <SearchBar />
      <IconsBox>
        <IconLink to='/dashboard/profil'>
          <UserIcon />
        </IconLink>
        <IconLink to='/favoris/ventes'>
          <Icon
            name={location.pathname.startsWith('/favoris/') ? 'HeartFill' : 'Heart'}
            width='24'
            height='24'
            color='var(--text-base-quaternary)'
          />
        </IconLink>
      </IconsBox>
      <MainNav display={displayNav ? 'flex' : 'none'}>
        <NavLi>
          <NavigationLink to='/explorer/ensembles'>
            Ensembles de pièces
            <Icon name='ChevronRight' width='20' height='20' fill='var(--text-base-primary)' />
          </NavigationLink>
        </NavLi>
        <NavLi>
          <NavigationLink to='/explorer/sets-classiques'>
            Sets classiques
            <Icon name='ChevronRight' width='20' height='20' fill='var(--text-base-primary)' />
          </NavigationLink>
        </NavLi>
        <NavLi>
          <NavigationLink to='/explorer/sets-rares'>
            Sets rares <Icon name='ChevronRight' width='20' height='20' fill='var(--text-base-primary)' />
          </NavigationLink>
        </NavLi>
        <NavLi>
          <NavigationLink to='/explorer/collection'>
            Pièces de collection
            <Icon name='ChevronRight' width='20' height='20' fill='var(--text-base-primary)' />
          </NavigationLink>
        </NavLi>
        <NavLi>
          <NavigationLink to='/explorer/creations'>
            Créations originales
            <Icon name='ChevronRight' width='20' height='20' fill='var(--text-base-primary)' />
          </NavigationLink>
        </NavLi>
      </MainNav>
    </Nav>
  );
};

export default Navbar;
