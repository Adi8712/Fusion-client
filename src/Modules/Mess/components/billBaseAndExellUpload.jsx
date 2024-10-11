// /* eslint-disable jsx-a11y/label-has-associated-control */
// import "../styles/messActivity.css";

// function Billbase() {
//   return (
//     <div className="tab-pane">
//       <h3>Monthly Bill</h3>
//       <form
//         method="post"
//         action="/mess/updatemonthlybill"
//         encType="multipart/form-data"
//       >
//         <div className="form">
//           <label htmlFor="amount">Update Monthly Base Amount</label>
//           <input
//             name="amount"
//             id="amount"
//             type="number"
//             placeholder="Current base amount"
//           />

//           <label htmlFor="excel_file_bill">
//             Upload Excel File for Bill Update
//           </label>
//           <input
//             type="file"
//             name="excel_file_bill"
//             id="excel_file_bill"
//             accept=".xlsx,.xls"
//             required
//           />

//           <button type="submit" className="submit-button">
//             Upload Excel
//           </button>
//         </div>
//       </form>
//       <ul className="info">
//         <li>Excel should contain Roll no, Month, Year, etc.</li>
//         <li>Accepted formats: .xlsx or .xls</li>
//       </ul>
//     </div>
//   );
// }

// export default Billbase;
