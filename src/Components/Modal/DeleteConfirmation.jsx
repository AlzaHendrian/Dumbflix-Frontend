// import { useContext, useState } from "react";
// import { useLocation, useNavigate } from "react-router"
// import { ModalContext } from "../../Context/ModalContext";
// import { useMutation } from "react-query";
// import { API } from "../../Config/Api";

// const DeleteConfirm = (props) => {
//     const location = useLocation();
//     const id = location.pathname.split('/')[2];
//     const navigate = useNavigate();
//     // const [preview, setPreview] = useState(null)
//     const [message, setMessage] = useState(null)
//     const [idDelete, setIdDelete] = useState(null)
//     const [confirmDelete, setConfirmDelete] = useState(null)

//     const [_, modalDispatch] = useContext(ModalContext)

//     const handleOnDelete = useMutation(async (movieId) => {
//         try {
//             await API.delete(`/film/${movieId}`);
//             modalDispatch({type : 'CLOSE_AUTH_MODAL'});
//             navigate('/')
//             console.log("movieId :", movieId)
//         }catch(err) {
//             console.log(err)
//         }
//     })
//     return (
//         <div className={`${props.className}`}>
//             <h2>Delete Movie ?</h2>
//             <div>
//                 <button onClick={() => handleOnDelete.mutate(id)}>Delete</button>
//                 <button onClick={() => modalDispatch({type: 'CLOSE_AUTH_MODAL'})}>Cancel</button>
//             </div>
//         </div>
//     )
// }

// export default DeleteConfirm