/*  
    1. 컴포넌트 형식
    function 컴포넌트(){
        return (JSX 문장);
    }

    가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
    나. JSX의 태그 끝에는 ; 을 쓰지 않는다.
    다. JSX 문장이 '한 문장'일 경우 (); 생략 가능
*/

// 컴포넌트 함수 생성
function Hello() {
    return <h1>Hello World!</h1>
}

//3가지 라이브러리 이름 : React, "ReactDOM(가상돔)", Babel(jsx번역)

// 리액트 출력 문장 (=자바스크립트 alert document write console과 같은 역할)

    // 객체.메소드(요소,컨테이너);
    // ReactDOM.render(요소, 컨테이너); 
    //   1. ReactDOM은 가상 DOM을 생성하는 객체
    //   2. render()은 요소를 컨테이너에 넣는 메서드
    //   3. 요소는 컴포넌트의 리턴 값을 XML의 빈 요소로 쓴다.
    //     예) <Hello />
    //   4. 컨테이너는 HTML 페이지의 div#root를 말한다.

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
