// @flow
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Header.css';

export type Props = {
  firstName: string,
  lastName: string,
  subtitle: string,
  address: string,
  phone?: string,
  email?: string,
  linkedIn?: string,
  github?: string
};

export default class Header extends Component<Props> {
  render() {
    const {
      firstName,
      lastName,
      subtitle,
      address,
      phone,
      email,
      linkedIn
    } = this.props;

    return (
      <header className="header-container">
        <h1 className="title">
          <span className="first-name">{firstName} </span>
          <span className="last-name">{lastName}</span>
        </h1>
        <h4 className="subtitle">{subtitle}</h4>
        <div className="address">
          <span>{address}</span>
        </div>
        <ul className="links">
          <li className="phone" hidden={!phone}>
            <FontAwesomeIcon icon={faPhone} />
            {phone}
          </li>
          <li className="email" hidden={!email}>
            <FontAwesomeIcon icon={faEnvelope} />
            {email}
          </li>
          <li className="linkedIn" hidden={!linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
            www.linkedin.com/in/{linkedIn}
          </li>
        </ul>
      </header>
    );
  }
}