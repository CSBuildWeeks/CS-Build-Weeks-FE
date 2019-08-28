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
const worldLabel = createLabel("world", "World")
const moveLabel = createLabel("move", "Move")



const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='register' as={Nav} to={`/register`} content={signUpLabel} /> },
  { menuItem: <Menu.Item key='login' as={Nav} to={`/login`} content={loginLabel} /> },
  { menuItem: <Menu.Item key='world' as={Nav} to={`/world`} content={worldLabel} /> },
  { menuItem: <Menu.Item key='move' as={Nav} to={`/move`} content={moveLabel} /> },


]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav