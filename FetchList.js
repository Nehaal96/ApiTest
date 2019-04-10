import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpExample extends Component {
   
  constructor(props){
    super(props);
    this.state = {
     data: []
   }
  }
  
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'GET'
         
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
  
   render() {
      return (
         <View>
            {/* <Text>
              UserId :{this.state.data.userId}
            </Text>
            <Text>
               Title: {this.state.data.title}
            </Text>
            <Text>
               Id: {this.state.data.id}
            </Text>
            <Text>
               Body: {this.state.data.body}
            </Text> */}
            {/* <Text>

              data :- {this.state.data}
            </Text> */}
            {
          this.state.data.map((users, index)=> {
            return( 
            <Text>
            <Text>
              UserId :{users.userId}
            </Text>
            <Text>
               Title: {users.title}
            </Text>
            <Text>
               Id: {users.id}
            </Text>
            <Text>
               Body: {users.body}
            </Text>
            </Text> 
            );
          })
        }  

           
            

         </View>

      )
   }
}
export default HttpExample

// import React, { Component } from 'react'
// import { View, Text } from 'react-native'

// class HttpExample extends Component {
   
//   constructor(props){
//     super(props);
//     this.state = {
//      data: [
//        {'loginName': "ARJUNYADAV@DRREDDYS.COM" },
//        {'userId': "115830"},
//        {'status': "4"}
//      ]
//    }
//   }
//    componentDidMount = () => {
//     const baseURl="http://52.76.24.217/";
//       fetch(baseURl+'/rest/mobile_v1/getTrips', {
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) => { 
//          console.log(responseJson);
         
//          this.setState({
//             data: responseJson
//          })
//       })
//       .catch((error) => {
//          console.error(error);
//       });
//    }
  
//    render() {
//     const {data} = this.state;
//       return (
//          <View>
//             <Text>
//              Tripno :{this.state.data.tr_no}
//             </Text>
//          </View>
//       )
//    }
// }
// export default HttpExample