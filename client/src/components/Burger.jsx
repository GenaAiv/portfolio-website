import React, { Component, useState } from 'react';
import styled from 'styled-components';
import './Navi.scss';

const StyledBurger = styled.button`
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 5vw;
	height: 5vh;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 2px;
    z-index: 10;
    position: relative;
    
    &:hover {
		div {
			box-shadow: 2px -1px #888888;
		}
        div:nth-child(1) {
            position:relative;
            left:3px
        }
        div:nth-child(2) {
            position:relative;
            right:3px
        }
        div:nth-child(3) {
            position:relative;
            left:3px
        }
    }

	&:focus {
        outline: none;
	}
    
	div {
        border-radius: 2px;
		width: 2rem;
		height: 0.25rem;
		background: #EFFFFA};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
    }
    .open:nth-child(1) {
        transform:rotate(45deg) translateY(12.5px)
    }
    .open:nth-child(2) {
        opacity:0
    }
    .open:nth-child(3) {
        transform:rotate(-45deg) translateY(-12.5px) 
    }
    .closed:nth-child(1) {
        transform:rotate(0) translateY(0)
    }
    .closed:nth-child(2) {
        opacity:1
    }
    .closed:nth-child(3) {
        transform:rotate(0) translateY(0)
    }
    `;

class Burger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			burgerStatus: false,
		};
	}

	burgerToggle() {
		this.setState(prevState => ({ burgerStatus: !prevState.burgerStatus }));
	}
	toggle() {
		this.burgerToggle();
	}

	render() {
		const { burgerStatus } = this.state;
		return (
			<StyledBurger className={'burger'} onClick={() => this.toggle()}>
				<div className={`${burgerStatus ? 'open' : 'closed'}`} />
				<div className={`${burgerStatus ? 'open' : 'closed'}`} />
				<div className={`${burgerStatus ? 'open' : 'closed'}`} />
			</StyledBurger>
		);
	}
}

export default Burger;
