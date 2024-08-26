// function 컴포넌트명(){ return jsx 명령문; }
// 1 컴포넌트 이름의 첫글자는 대문자로 쓴다
// 2 jsx의 태그 끝에는 ;를 쓰지 않는다
// 3 리액트 요소는 XML로 컴포넌트의 리턴 값을 xml빈 태그 형식으로 쓴다
// 4 컨테이너는 html 페이지의 div#root를 말한다
import "./src/01_시작하기.css";
// 컴포넌트 생성
function Hello() {
    // 리턴 뒤에 한 줄 문장
    // 리턴 뒤에 두 줄 이상의 문장은 ();괄호 세미콜론 처리
    return (
        //jsx의 태그 끝에는 ;를 쓰지 않는다
        //return 안의 부모 태그는 1개여야한다
    <div>
        {/* xml이기 때문에 /> 표시 해줌 */}
        <img src="https://img.megabox.co.kr/SharedImg/2024/07/23/qnnE1kuTVRLvY1rFEu6LVOOtmOEmXAbl_420.jpg" alt="" />
        <div>
            {/* 속성=바깥괄호{표현식} 안쪽괄호{{객체}} */}
            {/* 객체로 스타일을 지정한다 */}
            {/* 속성이 두 단어 이상일때는 카멜표기법으로 작성 */}
            <span>All</span>
            <h3>소년 시절의 너</h3>
        </div>
        <div>
            <span>예매율 1%</span>
            <span>개봉일 2024.08.07 </span>
        </div>
        <div>
            <button>♥344</button>
            <button>예매하기</button>
        </div>
    </div>
);
}

// 자바스크립트=바닐라 스크립트 선택자
// const container = document.getElementById("root");


// 화면에 헬로월드 띄우려 하는것
// ReactDOM.render("자식요소" jsx XML 함수호출문 (들여넣을 요소), "부모요소" 자바스크립트 (들어갈 장소))
// 자식요소를 부모요소에 넣어서 화면에 표시함
// XML은 무조건 태그를 닫아준다 하나의 열린 태그여도 닫아준다
function App(){
    return (
        <div style={{display:"flex"}}>
            <Hello />
            <Hello />
            <Hello />
            <Hello />
        </div>
    );
}
ReactDOM.render(<App />, document.querySelector("#root"));
