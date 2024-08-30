//cra 방식
//import Car from "./Car";

/*  
    컴포넌트(구성요소)?
        HTML 요소를 반환하는 함수와 같다.
        독립적이고 재사용 가능한 코드 조각
        -> 반환(return), 독립적, 재사용
        -> 독립적 -> 컴포넌트 별 파일을 생성한다

        종류
            1. 클래스형 컴포넌트 -> Hooks 지원x
            2. 함수형 컴포넌트 -> Hooks 지원o

        -> 이전 React 코드 기반에서는 Class 컴포넌트가 주로 사용되는 것을 볼 수 있습니다. 이제 React 16.8에 추가된 Hooks와 함께 Function 컴포넌트를 사용하는 것이 좋습니다.

        컴포넌트 규칙
            1. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
            2. return 키워드 필수!
            3. 하나의 컴포넌트를 파일로 저장 시 '파일명'은 '컴포넌트명'과 같아야한다.
*/
/*
    클래스 컴포넌트
        1. extends React.Component 명령문을 포함해야 한다.
            -> React.Component에 대한 상속을 만들고 컴포넌트가 React.Component의 함수에 액세스할 수 있도록 한다.
        2. render()메서드도 필요하다.
            -> HTML을 반환한다.

        class 컴포넌트명 extends React.Component {
            render() {
                return ( ... );
            }
        }
*/
/*
    함수형 컴포넌트

        function 컴포넌트명() {
            return ( ... );
        }
*/

// 함수형 컴포넌트
// 상속 없다. render() 없다.

//컴포넌트 생성
// function 컴포넌트명 (){
//     return (...);
// }

//컴포넌트 호출
//<컴포넌트명 />

//jsx 한 줄
// function Car() {
//     return <h2>저요!</h2>;
// }

//jsx가 두줄 이상이면 return();으로 묶는다
function Garage() {
    return (
        <>
            <h1>차고에 누가있니?</h1>
            {/* 컴포넌트 안에 컴포넌트 사용 */}
            {/* 컴포넌트 호출과 여러번의 재사용 */}
            <Car />
            <Car />
            <Car />
            <Car />
        </>
    );
}



const container0 = document.querySelectorAll(".item").item(0);
const root0 = ReactDOM.createRoot(container0);
root0.render(<Car />);

const container1 = document.querySelectorAll(".item").item(1);
const root1 = ReactDOM.createRoot(container1);
root1.render(<Garage />);

