//App 컴포넌트 형식
function App(){
    return( 
        <div className="container">
            {cards.map((item)=>{
                <Card 
                key={index}
                mimg={item.cimg} 
                mtit={item.ctit}
                mage={item.ctit}
                mrate={item.ctit}
                mdate={item.ctit}
                />;
            })};
        </div>
    );
}