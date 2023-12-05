import React from 'react';

class Clock extends React.Component{
    state = {date: new Date() ,  locale: 'bn-BD'};
    

    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
    handleClick = () => {
      
        this.setState((prevState)=>({
          locale: prevState.locale === 'bn-BD'?'en-BD': 'bn-BD',
        }));
      
    }
    

    tick(){
        this.setState ({
            date: new Date(),
        })
    }

  render(){
    const {date , locale} = this.state;
    return(
      <div>
        <h1 className="heading">
          <span className='text'> 
          {date.toLocaleTimeString(locale)}
          </span>
       </h1>
       <button type='button' onClick={this.handleClick}>
        Click here
       </button>
      </div>
    )
  }
}

export default Clock;