//리액트 리스트
//루프를 사용하여 목록을 렌더링
// const arr = ['Benz', 'BMW', 'Audi'];

// 배열.map(함수);
// 배열.map(()=>{});
// 배열.map((item)=><li>item</li>);

function Car(props) {
    return <li>I am a {props.brand}</li>;
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </>
    );
}

const container = document.getElementsById()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
root.render(<Car />);