import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getNumbers} from '../../actions/addAction'
import {Link} from 'react-router-dom'
function Navbar(props) {
    // console.log(props)

    useEffect(() => {
      getNumbers() // function from actions
    }, [])

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </ul>
              <br/>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart <span>{props.basketProps.basketNumbers}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers})(Navbar)