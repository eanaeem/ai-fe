import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import Routes from '../routes/index'

import { Page, FooterHelp, Card, Collapsible, Button, Layout, Banner, Icon, Tabs, Badge, TextStyle, FormLayout, RadioButton, TextField, Caption, DisplayText, Heading, Stack, List, Select } from '@shopify/polaris';
import { DashboardActionGroups, PrimaryAction } from '../../lib/pageData';


const App = (props) => {
	return (
		<Page
			title="Homepage"
			primaryAction={PrimaryAction}
			actionGroups={DashboardActionGroups}
		>
			<Routes />
			<Footer />
		</Page>

	)
}

export default App