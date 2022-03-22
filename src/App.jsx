import blackPawn from './solidpawn.svg';
import whitePawn from './pawn-regular.svg';
import rookwhite from './rookwhite.svg';
import rookblack from './rookblack.svg';
import knightwhite from './knightwhite.svg'
import knightblack from './knightblack.svg'
import bishopwhite from './bishopwhite.svg'
import bishopblack from './bishopblack.svg'
import kingwhite   from './kingwhite.svg'
import kingblack   from './kingblack.svg'
import queenwhite  from './queenwhite.svg'
import queenblack from './queenblack.svg'

import './App.css';


const initialState = [
[
  {
    icon : rookblack
  },
  {
    icon : knightblack
  },
  {
    icon : bishopblack
  },
  {
    icon : queenblack
  },
  {
    icon : kingblack
  },
  {
    icon : bishopblack
  },
  {
    icon : knightblack
  },
  {
    icon : rookblack
  },
],
[...Array(8)].map(()=>({
  icon:blackPawn
}))
,
...[...Array(4)].map(()=>[...Array(8)].map(()=>({
  icon:null
}))),
[...Array(8)].map(()=>({
  icon: whitePawn
})),
[
  {
    icon : rookwhite
  },
  {
    icon : knightwhite
  },
  {
    icon : bishopwhite
  },
  {
    icon : queenwhite
  },
  {
    icon : kingwhite
  },
  {
    icon : bishopwhite
  },
  {
    icon : knightwhite
  },
  {
    icon : rookwhite
  },
]
]



const App = () => {
  return ( 
  <div className="App">
    <div className="chess-board-container">
    <div className="chess-board">
      {initialState.map((row, i) => row.map(({icon},j) => <div 
    className='chess-pawn'
     key={'${i}${j}'}
     style={
         {

         backgroundColor:  (i+j)%2? "white" : "brown",
         color: (i+j)%2 ? "white":"black",
         backgroundImage: `url(${icon})`,
         display: "grid",
         placeItems: "center",
         }


     }
     
     
     
     ></div>))}
    </div>
    </div>
      </div>
  );
}
export default App;
  
