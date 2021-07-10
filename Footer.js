import React from 'react'
import styled from 'styled-components'   
import './Footer.css';

function Footer() {
    return (
        <div className="main-footer" fixed="bottom">
                 <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 span12">
                            <h4>catogries</h4>
                            <ul className="list-unstyled">
                                <li>product #1</li>
                                <li>product #2</li>
                                <li>product #3</li>
                                <li>product #4</li>

                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>catogries</h4>
                            <ul className="list-unstyled">
                                <li> <a href="//">product #1</a></li>
                                <li> <a href="//">product #2</a></li>
                                <li> <a href="//">product #3</a></li>
                                <li> <a href="//">product #4</a></li>

                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>catogries</h4>
                            <ul className="list-unstyled">
                                <li> <a href="//">product #1</a></li>
                                <li> <a href="//">product #2</a></li>
                                <li> <a href="//">product #3</a></li>
                                <li> <a href="//">product #4</a></li>

                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>catogries</h4>
                            <ul className="list-unstyled">
                                <li> <a href="//">product #1 </a></li>
                                <li> <a href="//">product #2 </a></li>
                                <li> <a href="//">product #3 </a></li>
                                <li> <a href="//">product #4 </a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City Lahore-All Rights Reserved
                        </p>

                    </div>
                </div>
            </div>  
         
        </div>
    )
}
export default Footer

//
