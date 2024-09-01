//props(프로프스)
// React 컴포넌트에 전달되는 인수
//인수 개수에 제한이 없다
//

//function 컴포넌트(props){
//           ...
// }

// function 컴포넌트명({인수1,인수2,...}){
//     ...
// }

//props가 brand="싼타페"를 인수로 받는다
//객체.속성 >> 값
//ex) props.brand

function Car1(props) {
    return <h2>I am a {props.brand}!</h2>;
}
function Car2({ brand }) {
    const carInfo = {brand:"SM5", color:"빨강"}
    return (

    <div>
        <h2>I am a {brand}!</h2>
        <Car2 brand={carInfo} />
    </div>

    );
}

const container0 = document.querySelectorAll(".item").item(0);
const root0 = ReactDOM.createRoot(container0);

// 컴포넌트 호출 시 props로 전달할 값은 태그의 속성(brand)이 전달된다
root0.render(
<div>
    <Car1 brand="싼타페" color="blue" />
    <Car2 brand="쏘나타" color="pink" />
</div>
);pm
