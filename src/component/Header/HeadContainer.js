import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import firebaseObject from '../../firebase';
import {setRestaurant} from '../../actions/action'

const firebaseApp = firebaseObject.firebaseApp;
const goodeatsRef = firebaseObject.goodeatsRef;

class HeadContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            query: ''
        };
        this.signOut = this.signOut.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
    }
    signOut(){
        firebaseApp.auth().signOut();
    }
    searchQuery(event){
    let query = event.target.value;
      function capitalize(s){
      query = s[0].toUpperCase() + s.slice(1);
      }
      capitalize(query);
      this.setState({query: query});
    }
    onSearchSubmit(event){
      event.preventDefault();
        let typeRestaurants = [];
        const {query} = this.state;
        goodeatsRef.orderByChild('type').startAt(query).endAt(query).on('child_added', (snapshot)=>{
           const restaurants = snapshot.val();
          typeRestaurants.push(restaurants);
          this.props.setRestaurant(typeRestaurants);
        })

    }
    render(){
        return(
            <div>
                <Header onClick={this.signOut} onSubmit={this.onSearchSubmit} onChange={this.searchQuery}/>
            </div>
        )
    }
}

function mapStateToprops(state){
  const {restaurants} = state;

  return {
    restaurants
  }
}
export default connect(mapStateToprops, {setRestaurant})(HeadContainer);
