// import React from 'react'
// import "./Formstyle.css"
// import { Link } from "react-router-dom";

// class Form extends React.Component() {
//    state={
//     list: ""
//    }
// render(){

//         return (
//             <>
//     <div>
//         <Link to="/">Home</Link>
//     </div>
//     <div className='ddiv'>
//         <table className='value'>
//             <thead>
//                 <tr>
//                     <th className='Id_name'>Id</th>
//                     <th className='horizont_sticky'>Name</th>
//                     <th className='horizont_sticky'>Surname</th>
//                     <th className='horizont_sticky'>Region</th>
//                     <th className='horizont_sticky'>Age</th>
//                     <th className='horizont_sticky'>Job</th>
//                     <th className='Edit_name'>Edit</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td className='id_sticky'>1</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>2</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//             </tbody>
//         </table>
//         <table className='value'>
//             <thead>
//                 <tr>
//                     <th className='Id_name'>Id</th>
//                     <th className='horizont_sticky'>Name</th>
//                     <th className='horizont_sticky'>Surname</th>
//                     <th className='horizont_sticky'>Region</th>
//                     <th className='horizont_sticky'>Age</th>
//                     <th className='horizont_sticky'>Job</th>
//                     <th className='Edit_name'>Edit</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td className='id_sticky'>1</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>2</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//                 <tr>
//                     <td className='id_sticky'>3</td>
//                     <td className='inner_txt qwer'>Ibrohim</td>
//                     <td className='inner_txt qwer'>Uraimov</td>
//                     <td className='inner_txt qwer'>Tashkent</td>
//                     <td className='inner_txt qwer'>19</td>
//                     <td className='inner_txt qwer'>Freelancer</td>
//                     <td className='edit_sticky'>Edit</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//     </>
//   )
// }
// }

// export default Form