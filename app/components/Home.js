import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

   handleClick() {
      HomeActions.getLoansOfAllBank();
      console.log("Click Here");

  }

  render() {
    var loanNodes = this.state.loans.map((loanItem, index) => {
        return <div key = {loanItem.loanId} className = 'index_03_00'>
                  <div>{loanItem.loanName}</div>
                  <div>{loanItem.loanAmount}</div>
                  <div>{loanItem.loanTimeUnit}</div>
                  <div>{loanItem.loanSysId}</div>
                </div>
    });

    return (
      <div className="index_01">
          <img onClick={this.handleClick.bind(this)} src={'../images/OEML_xiadan_n.png'}/>
          {loanNodes}
      </div>
    );
  }
}

export default Home;