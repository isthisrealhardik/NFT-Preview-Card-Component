const Card = () => {
  const imageURL = '/images/image-equilibrium.jpg';
  const iconEth = '/images/icon-ethereum.svg';
  const iconClock = '/images/icon-clock.svg';
  const imageAvatar = '/images/image-avatar.png';

  const containerStyle = `bg-veryDarkBlueCardBg w-64 h-[450px] drop-shadow-2xl rounded-xl flex flex-col items-center font-sans`;
  return(
    <div id="container" className={containerStyle}>
      <img src={imageURL} alt="Main Image" className=" w-56 rounded-xl mt-3"/>
      <div id="text-container" className="my-5 px-5">
        <h1 className=" text-lg font-normal mb-2">Equilibrium #3429</h1>
        <p className=" font-light text-sm text-softBlue">Our Equilibrium collection promotes balance and calm</p>
      </div>
      <div id="balance-container" className="flex justify-between w-full px-5 my-2">
        <div id="left-side" className="flex items-center">
          <img src={iconEth} alt="Icon Ethereum" className="w-2 mr-2"/>
          <p className="text-xs text-cyan">0.041 ETH</p>
        </div>
        <div id="right-side" className="flex">
          <img src={iconClock} alt="Icon Clock" className="w-4 h-4 mr-2"/>
          <p className="text-xs text-softBlue">3 days left</p>
        </div>
      </div>
      <div id="divider" className=" bg-softBlue h-[1px] w-[90%] my-3 opacity-30"></div>
      <div id="profile" className="flex justify-start items-center">
        <img src={imageAvatar} alt="Avatar" className=" w-6 border border-white rounded-full"/>
        <p className="text-xs text-softBlue pl-2">Creation of <span id="name-container" className="text-white">Jules Wyvern</span></p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="w-screen h-screen bg-veryDarkBlueMainBg flex justify-center items-center overflow-hidden">
      <Card />
    </div>
  )
}

export default App
