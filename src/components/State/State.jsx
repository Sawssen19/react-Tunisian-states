import React, { Component } from 'react';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import './State.scss';

export default class State extends Component{
    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };
    
    render() {
        const{city,img,name,info} = this.props.tour;
        return (
            <article className='state'>
                <div className='img-container'>
                    <img src={img} alt='' />
                
                </div>
                <div className='state-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
        
                    <h5>
                        info{''}
                        <span onClick={ this.handleInfo }>
                            <ArrowDropDownCircleIcon />
                         </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>

  );
}
}


