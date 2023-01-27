const Logo = (props) => {
  return (
    <div className={'logo d-flex ' + props.className}>
      <svg width='50px' height='50px' viewBox='-3.6 -3.6 43.20 43.20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' className='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet' fill='#000000' stroke='#000000' strokeWidth='0.00036' transform='matrix(1, 0, 0, 1, 0, 0)'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0' />

        <g id='SVGRepo_iconCarrier'>
          <path fill='#f34213' d='M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z' />

          <path fill='#212529' d='M24.281 24.907c1.301 0 2.232.713 2.232 2.046c0 1.179-1.117 2.047-2.232 2.047H12.095c-1.643 0-2.604-.93-2.604-2.232c0-.62.217-1.24.62-1.799l9.984-13.952H11.94c-1.24 0-2.17-.713-2.17-1.984c0-1.178.992-2.108 2.17-2.108h11.349c1.797 0 2.603 1.147 2.603 2.232c0 .682-.279 1.457-.682 1.984l-9.922 13.767h8.993z' />
        </g>
      </svg>
      {props.img && <p className='m-0 align-self-center'>iTRO</p>}
    </div>
  )
}

export default Logo
