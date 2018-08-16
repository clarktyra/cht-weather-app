import React from 'react';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id='thing' className="navbar navbar-expand-md bg-info navbar-dark justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">San Diego</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portland</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tucson</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Denver</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Asheville</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Baltimore</a>
                    </li>
                </ul>
            </nav>
        );
    }
}