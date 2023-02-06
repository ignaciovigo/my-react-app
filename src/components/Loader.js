function Loader () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ margin: 'auto', background: 'none' }}
      width='100'
      height='100'
      display='block'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 100 100'
    >
      <circle
        cx='50'
        cy='50'
        r='30'
        fill='none'
        stroke='#f34213'
        strokeDasharray='47.12388980384689 47.12388980384689'
        strokeLinecap='round'
        strokeWidth='6'
      >
        <animateTransform
          attributeName='transform'
          dur='1.1363636363636365s'
          keyTimes='0;1'
          repeatCount='indefinite'
          type='rotate'
          values='0 50 50;360 50 50'
        />
      </circle>
      <circle
        cx='50'
        cy='50'
        r='25'
        fill='none'
        stroke='#171718'
        strokeDasharray='39.269908169872416 39.269908169872416'
        strokeDashoffset='39.27'
        strokeLinecap='round'
        strokeWidth='6'
      >
        <animateTransform
          attributeName='transform'
          dur='1.1363636363636365s'
          keyTimes='0;1'
          repeatCount='indefinite'
          type='rotate'
          values='0 50 50;-360 50 50'
        />
      </circle>
    </svg>
  )
}

export default Loader
