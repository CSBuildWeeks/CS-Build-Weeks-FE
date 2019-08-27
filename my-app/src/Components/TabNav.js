import React from './node_modules/reacte_modules/react'
import { Tab, Menu, Icon } from './node_modules/semantic-ui-reactmantic-ui-react'
import { NavLink } from "./node_modules/react-router-domeact-router-dom";



const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Home")
const signUpLabel = createLabel("signup", "Sign-Up")
const loginLabel = createLabel("login", "Login")


const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/home`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='sign-up' as={Nav} to={`/sign-up`} content={signUpLabel} /> },

  { menuItem: <Menu.Item key='login' as={Nav} to={`/`} content={loginLabel} /> },
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav