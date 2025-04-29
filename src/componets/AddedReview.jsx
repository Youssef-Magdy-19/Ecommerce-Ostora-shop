import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

function ProductReviews({ productId , comments , setComments}) {
    const {currentUser} = useAuth()
    const [comment, setComment] = useState("");
    const user = JSON.parse(localStorage.getItem("userInfo"))

    useEffect(()=>{
        const storedComments = localStorage.getItem("productComments")
        if(storedComments){
            setComments(()=> JSON.parse(storedComments))
        }
    } , [])
    const handleAddComment = () => {
        if (user) {
            if (!comment.trim() || !currentUser) return;
            const newCommetn = {
                userName : currentUser.name,
                text : comment
            }
            
            const updated = {
                ...comments,
                [productId]: [...(comments[productId] || []), newCommetn],
            };

            localStorage.setItem("productComments", JSON.stringify(updated));
            setComments(updated);
          

            setComment("");
        } else {
            setTimeout(() => navigate("/login"), 2000)
            window.location.href = "/Ecommerce-Ostora-shop/login"
        }
        const addedComments = localStorage.setItem("commentsProduct" , JSON.stringify(comments))
        return addedComments
    };
//     const [comment, setComment] = useState("");
//   const { currentUser } = useAuth();

//   const handleAddComment = () => {
//     if (!comment.trim() || !currentUser) return;

//     const newComment = {
//       username: currentUser.username,
//       text: comment,
//     };

//     const updated = {
//       ...comments,
//       [productId]: [...(comments[productId] || []), newComment],
//     };

//     localStorage.setItem("productComments", JSON.stringify(updated));
//     setComments(updated); // ده اللي هيخلّي العداد يتحدث تلقائي
//     setComment("");
//   };
    return (
        <div>
            <div>
                {(comments[productId] || []).map((c, index) => (
                    <div>
                        <p className="mb-1 mt-4"><strong>{c.userName}</strong></p>
                        <p key={index}>{c.text}</p>
                    </div>
                ))}
            </div>
            <div className="write-review d-flex mt-3 align-items-center">
                <input type="text" className="m-0 p-0" required
                    placeholder="Write Your Review"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} 
                />
                <button onClick={handleAddComment}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
}

export default ProductReviews;