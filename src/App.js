import React from "react";
import PropTypes from "prop-types";

// ./은 same directory 라는 뜻. 
function Food({name ,picture,rating}){
  return <h2>i like {name}
    <img src={picture} alt={name}></img>
    <h4>{rating}/5.0</h4>
   </h2>
}
//props 체크하는 함수
Food.propTypes={
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};
/* 2-1
  react 에서는 재사용 가능한 component 를 만들 수 있다
  component에서 component로 정보전송 가능.
  여기서 props는 food 컴포넌트에 들어가는 속성 말함.
  props는 argument로 가서 첫번쨰 인자로 받음
  props.fav 는 {fav}이렇게 쓰는것과 같음
  =object 내부를 여는 것.
*/ /* 
2-2 
가지고 있는 데이터로만 하는건 비효율적 -> 동적으로
*/
/*모든 react의 element는 유니크 해야함.
그래서 each list에 id값 추가. 
react는 똑똑하지않아서 key를 줘서 다르다는걸 알려줘야함
그치만 내부로 동작해서 굳이 props로 줘야 할 필욘 업슴.
*/
const foodILike= [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
    ,rating: 4.9
  },
 
  
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
    ,rating: 4.8
   },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
    ,rating: 4.5
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
    ,rating: 5.0
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
      ,rating: 4.3
  }
];
/*
  javascript map funtion 이용
  ex ) friends.map(function (friend){
        return friend +" @@";
  })  =>각 arr의 item들을 돌고 각 item들을 바꾸고 
      =>새로운arr로 저장.
*/ 


function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>  
     )}

    </div>

  );
}

export default App;
