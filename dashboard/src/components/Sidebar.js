import React from "react";
import {Link, NavLink} from "react-router-dom";


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="sidebar">
               <NavLink activeClassName="active" to="/" exact>
                    <div className="links">Home</div>
               </NavLink>
               <NavLink activeClassName="active" to="/articles">
                    <div className="links">Articles</div>
               </NavLink>
               <NavLink activeClassName="active" to="/help">
                    <div className="links">Helo & Support</div>
               </NavLink>
            </section>
        )
    }
}

export default Sidebar;