import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { TermsofService, Community, Privacy, Copyright } from './policiesData'
import { style } from "glamor"


class Policy extends React.Component {
    
    render(){
        return (
            <div className="policyWrapper">
                {(() => {
                    switch(this.props.match.params.id) {
                        case 'tos':
                            return <TermsofService />;
                        case 'community':
                            return <Community />;
                        case 'privacy':
                            return <Privacy />;
                        case 'copyright':
                        return <Copyright />;
                        default:
                            return null;
                    }
                })()}
        </div>
        )
    }
}
export default withRouter(Policy);