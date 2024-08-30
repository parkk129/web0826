// 컴포넌트 생성

/* 
    JSX?
      JSX는 JavaScript XML을 의미합니다.
        -> XML은 태그를 정의하여 사용할 수 있다. 예) <Hello />
      JSX를 사용하면 React에서 HTML을 작성할 수 있습니다.

      1. {표현식}
        - 표현식이란? 변수, 속성, JS표현식(연산 등)

      2. 최상위 요소는 반드시 하나!!!
        - HTML 태그 -> 실제 DOM에 추가 된다.
        - <React.Fragment></React.Fragment> 또는 <></> -> 실제 DOM에는 보이지 않는다.

        function 함수(){
          return <h1>한 줄 문장이다</h1>
        }

        function 함수(){
          return
            <> 
              <h1>첫 번째 문장이다</h1>
              <h2>두 번째 문장</h2>
            </>
        }

        function 함수(){
          return
            <React.Fragment> 
              <h1>첫 번째 문장이다</h1>
              <h2>두 번째 문장</h2>
            </React.Fragment>
        }

        function 함수(){
          return
            <div> 
              <h1>첫 번째 문장이다</h1>
              <h2>두 번째 문장</h2>
            </div>
        }

      3. 빈 요소는 />로 닫는다.
        예) <Hello />, <img />, <input />
      
      4. class 대신 className으로 기록한다.
        <div className="card_list">

      5. JSX 내부에는 제어문을 사용할 수 없다.
        따라서 if 조건문 대신 삼항 연산자 사용한다.
*/

// JSX는 한 줄 문장의 경우 () 생략 가능!
// const myElement1 = (<h2>나는 JSX이다.</h2>);
const myElement1 = <h2>나는 JSX이다.</h2>;

// 최상위 요소는 반드시 하나!!!
// JS의 선언적 함수
function myFunction() {
    <>
        <h2>나는 함수 안의 JSX이다.</h2>
        <p>JSX는 반드시 최상위 부모는 하나!</p>
    </>;
}

// 리액트의 함수형 컴포넌트
function MyFunction() {
    return (
        <React.Fragment>
            <h2>나는 함수 안의 JSX이다.</h2>
            <p>JSX는 반드시 최상위 부모는 하나!</p>
        </React.Fragment>
    );
}

function Hello() {
    // 리턴 뒤에 두 줄 이상의 문장은 ( JSX ); 로 묶고 문장 끝 ; 쓴다.
    return (
        // JSX의 태그 끝에는 ; 쓰지 않는다.
        // return 안의 root 태그는 1개 이어야 한다.
        <div className="card_list">
            {/* XML에서 빈 요소는 끝에 <img /> */}
            <div className="card_img">
                <img
                    src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg"
                    alt="사랑의 하츄핑"
                />
            </div>
            <div>
                {/* {{}} -> 바깥쪽 괄호는 표현식 */}
                {/* {{}} -> 안쪽 객체 괄호 */}
                {/* 객체로 스타일을 지정한다. */}
                {/* 속성명은 카멜표기법으로 쓴다. 예) borderRadius 또는 "border-radius" */}
                <span className="card_age">All</span>
                {/* class -> className 으로 기록한다.*/}
                <h3 className="card_tit">사랑의 하츄핑</h3>
            </div>
            <div>
                <span className="card_rate">예매율 1%</span>
                <span className="card_date">개봉일 2024.08.07</span>
            </div>
            <div className="card_btn">
                <button>487</button>
                <a href="#">예매</a>
            </div>
        </div>
    );
}

// function App(){
//   return (
//     <div style={{display: "flex"}}>
//       <Hello />
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   );
// }

/* 
  ReactDOM.render(요소, 컨테이너); 
    1. ReactDOM은 가상 DOM을 생성하는 객체
    2. render()은 요소를 컨테이너에 넣는 메서드
    3. 요소는 컴포넌트의 리턴 값을 XML의 빈 요소로 쓴다.
      예) <Hello />
    4. 컨테이너는 HTML 페이지의 div#root를 말한다.
*/

// 출력 -> 렌더링
// ReactDOM.render(<App />, document.querySelector("#root"));

ReactDOM.render(
    <div style={{ display: "flex" }}>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
    </div>,
    document.querySelector("#root")
);

// 출력 -> 렌더링
ReactDOM.render(hi, document.querySelectorAll(".item")[0]);

// HTML DOM 요소 가져오기
const container = document.querySelectorAll(".item").item(1);
// 리액트 가상돔 요소 생성
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);
