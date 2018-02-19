import React from 'react'
import logo from '../../resources/img/logo.svg';
import { Page, FooterHelp, Card, Collapsible, Button, Layout, Banner, Icon, Tabs, Badge, TextStyle, FormLayout, RadioButton, TextField, Caption, DisplayText, Heading, Stack, List, Select } from '@shopify/polaris';
import {DashboardActionGroups, PrimaryAction} from '../../lib/pageData';

export const Header = (props) => {
	return (
			<Page
					title="Home"
					primaryAction={PrimaryAction}
					actionGroups={DashboardActionGroups}
			>
				header
			</Page>
	)
}

export default Header