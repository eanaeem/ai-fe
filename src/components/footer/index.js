import React from 'react'
import {FooterHelp} from'@shopify/polaris';
import {Link} from'react-router-dom';


const Footer = () => {
	return(
		<FooterHelp>Need help or got feedback? Visit our <Link to='/'>Help Centre</Link>, <Link to='/'>Contact us</Link> or just chat to us right here.</FooterHelp>
	)
};

export default Footer;