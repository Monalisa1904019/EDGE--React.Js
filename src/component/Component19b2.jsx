import React from 'react'

// const name ="Monalisa";

// function text1( ){
//     return "My name is ";
// } 


// function Component19b2() {
//   return (
//     <div>
//         {text1()} 
//         {name}       
//     </div>
//   )
// }

// function Component19b2(props){
//     const{name, email, device} =props;
//     return(
//         <div>
//             {props.name}
//             {props.email}
//         </div>
//     )
// }

// function Component19b2({ props}) {
//     const{name, email, devices} = props.allinfo
//     return (
//       <div>
//         {/* <p>{name}</p>
//         <p>{email}</p>
//         <ul>
//           {device.map((device, index) => (
//             <li key={index}>{device}</li> 
//           ))}
//         </ul> */}
//         {name}
//         {email}
//         {devices}
//       </div>      
//     );
//   }


// function Component19b2({ allinfo }) {
//     const { name, email, devices, emoji } = allinfo;
    
//     return (
//       <div>
//         <p>{name}</p>
//         <p>{email}</p>
//         <ul>
//           {devices.map((device, index) => (
//             <li key={index}>{device}</li> 
//           ))}
//         </ul>
//         {emoji}
//       </div>      
//     );
//   }

function Component19b2({ ProductList }) {
    return (
    
      <div>
        {ProductList.map((product) => (
          
          <div key={product.id} style={{ marginBottom: '20px' }}>
            <h2>{product.name}</h2>
            <p>{product.details}</p>
            <p><strong>Sizes:</strong> {product.size.join(", ")}</p>
            <p><strong>Colors:</strong> {product.color.join(", ")}</p>
          </div>
          
        ))}
      </div>
      
    );
  }
  


// function Component19b2(){
//     return(
//         <div>
//             <p>{message}</p>
//         </div>
//     )
// }



export default Component19b2



