import React from 'react';
import '../estilos/logo.css';

const Logo = ({ pathLogo} ) => {
    return (
        <div className='freecodecamp-logo-contenedor'>
					<img 
						src={ pathLogo }
						className='freecodecamp-logo'
						alt='Logo de FreeCodeCamp'
					/>            
        </div>
    );
}

export default Logo;
