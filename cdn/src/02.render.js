/*  
    1. 컴포넌트 형식
    function 컴포넌트(){
        return (
        JSX 문장
        );
    }

    가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
    나. JSX의 태그 끝에는 ; 을 쓰지 않는다.
    다. JSX 문장이 '한 문장'일 경우 (); 생략 가능
*/

// 리액트에서 변수 생성
// 자바스크립트 바닐라 스크립트 
// const hello = "<h1>Hello World!</h1>";

// jsx : 리액트에서 ""묶지 않고 태그 그대로 쓰는것
const hello = <h1>Hello World!</h1>;

const hi = (
    // 반드시 최상의 부모는 하나여야한다
    //한 문장이 아닌 여러개의 문장을 쓰려면 부모태그가 있어야한다
    <div>
        <h1>Hi World!</h1>
        <h1>나는 두 문장이 있다</h1>
    </div>
);

// 3가지 라이브러리 이름(cdn방식에서 필요한 것) : React, "ReactDOM(가상돔)", Babel(jsx번역)

// 리액트 출력 문장 (=자바스크립트 alert document write console과 같은 역할)

    // 객체.메소드(요소,컨테이너);

    // ReactDOM.render(element 요소, container 컨테이너); 

    //   1. ReactDOM은 가상 DOM을 생성하는 객체
    //   2. render()은 요소를 컨테이너에 넣는 메서드
    //   3. 요소는 컴포넌트명의 리턴 값을 "XML의 빈 요소"로 쓴다.
    //   4. 변수명은 빈 요소 형태가 아닌 변수명 그대로 쓴다

    //   jsx = js + xml(html no!!!) 이다
    //  xml은 html 파일에서 쓸 수 없다 js 파일에서만 쓰기 가능
    //   빈 요소인 경우 : <hello /> <img /> ...
    //   빈 요소가 아닌 경우 : <hello>내용</hello>
    //   예시) <Hello />, <br />, <hr /> <img /> <input />

    //   5. 컨테이너는 HTML 페이지의 div#root를 말한다.
    
    // 리액트에서의 출력 렌더링 2가지 형식 (console,document.write,alert와 유사한 역할)

    // 1. html에 수동적 : html에게 전달해줌
    // ReactDOM.render(<App /> (xml), document.querySelector("#root") (javascript));
    ReactDOM.render(hi, document.querySelector(".item")[0]);

    // 2. html에 능동적 : html태그를 자기가 가져옴
    const container = document.querySelectorAll(".item").item(1);
    
        // ReactDOM.createRoot()란 ?
        // html 요소를 가져와서 새롭게 루트(Root)를 생성한다

    const root = ReactDOM.createRoot(container);
    root.render(<p>Hello</p>);


