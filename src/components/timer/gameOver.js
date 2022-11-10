const GameOver = () => {
const img ='https://gifimage.net/wp-content/uploads/2017/07/game-over-gif-26.gif'
const style ={ 'width':'100vw'}    
return ( 
        <div className="gameOver">
            <img src={img} alt="gameOver" style={style} />
        </div>
     );
}
 
export default GameOver;