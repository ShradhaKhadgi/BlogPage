import React from "react";
const PostList = (props) =>{
    console.log(props);
    return(
        <>
        <div className="row mx-auto mb-5">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
}
export default PostList;