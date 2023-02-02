import { NavLink } from 'react-router-dom'
const SubNavBar = ({ ClassName }) => {
  return (

    <ul className={'list-subnav p-0 gap-2 text-center ' + ClassName}>
      <NavLink to='/products' className='effect-link list-subnav-item text-nowrap'>All</NavLink>
      <NavLink to='/category/smartphones' className='effect-link list-subnav-item text-nowrap'>Smartphones</NavLink>
      <NavLink to='/category/laptops' className='effect-link list-subnav-item text-nowrap'>Laptops</NavLink>
      <NavLink to="/category/skincare" className='effect-link list-subnav-item text-nowrap'>Skincare</NavLink>
      <NavLink to="/category/fragrances" className='effect-link list-subnav-item text-nowrap'>Fragrances</NavLink>
      <NavLink to="/category/mens-watches" className='effect-link list-subnav-item text-nowrap'>Mens watches</NavLink>
      <NavLink to="/category/womens-watches" className='effect-link list-subnav-item text-nowrap'>Womens watches</NavLink>
      <NavLink to="/category/sunglasses" className='effect-link list-subnav-item text-nowrap'>Sunglasses</NavLink>
    </ul>
  )
}

export default SubNavBar
