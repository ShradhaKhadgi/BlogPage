import React from "react";
import { useState } from "react/cjs/react.development";
import PostList from "./PostList";
const SingleCard = (props) =>{
    const [openCard, setCard] = useState(false);
    const [list, setlist] = useState([]);
    const [display, setDisplay] = useState('none');
    const filterData = () =>{
        const items =  props.data.filter((elem)=>{
              return elem.userId===props.userId;
          })
          setlist(items);
          setDisplay('block');
      }
    return (
        <>
          <div className="float-start card_body" key={props.id} onClick={()=>setCard(true)}>
            <div className="card mb-3" style={{maxWidth: '520px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                <img src={props.img} style={{maxWidth: '100%'}} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <p className="card-text"><img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" className="rounded-circle"></img> <small className="text-muted">Author Id : {props.userId}</small></p>
                </div>
                </div>
              </div>
            </div>
          </div>     

          { openCard &&
          <div id="details" className="container-fluid p-5">
            <div className="row">
            <button type="button" onClick={()=>{setCard(false); setlist([]); setDisplay('none');}} className="btn btn-outline-primary btn-sm mb-3" style={{maxWidth: '50px'}}>Back</button>
            </div>
            <div className="row">
            <img src={props.img} style={{maxWidth: '100%', maxHeight: '400px'}} className="img-fluid mb-2" alt="..."/>
            </div>
            <div className="row">
            <p className="h1">{props.title}</p>
            </div>
            <div className="row" onClick={filterData}>
            <p className="h5 text-info">Author Id : {props.userId}</p>
            </div>
            <div className="row">
            <p className="lead">{props.body}</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec. Purus viverra accumsan in nisl. Diam sollicitudin tempor id eu nisl nunc mi. Eget gravida cum sociis natoque. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Maecenas pharetra convallis posuere morbi leo urna molestie at. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Est sit amet facilisis magna etiam tempor orci. Semper risus in hendrerit gravida rutrum quisque non tellus. Id ornare arcu odio ut sem nulla pharetra diam sit. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Morbi tristique senectus et netus et malesuada fames. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nunc vel risus commodo viverra maecenas accumsan. Nibh tellus molestie nunc non blandit massa enim nec dui. In hendrerit gravida rutrum quisque non tellus orci ac. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
            Orci dapibus ultrices in iaculis nunc sed augue. Gravida neque convallis a cras semper auctor neque. Amet aliquam id diam maecenas ultricies mi. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim enim sit amet venenatis urna cursus eget. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Tempor orci dapibus ultrices in. Quis vel eros donec ac odio tempor orci dapibus. Penatibus et magnis dis parturient montes. Ultricies mi quis hendrerit dolor magna eget est lorem.        
            </p>
            <div className="row mb-4" style={{display: display}}>
            <p className="h3">Author Id : {props.userId} Post</p>
            </div>
            {
              list.map((elem,id)=>{
                  console.log(elem);
                  return(
                    <PostList 
                    key={id}
                    title={elem.title}
                    body={elem.body}
                    userId={elem.userId}
                    setList={setlist}
                    setCard={setCard}
                    />
                  )
                })
            }
            </div>
          </div>
          }
        </>
  );
}

export default SingleCard;