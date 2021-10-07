import './Slider.css'
import Button from '../Button/Button'


const SliderComponent =() => {
return(
<div className='slider_image'>
<div className='slider_content'>
    <h6 className='slider_content_head_one'>INTRODUCING</h6>
    <h1 className='slider_content_head_two'>FOREVER</h1>
    <p className='slider_content_head_three'>Our contribution to the planet</p>
    <Button name='Learn More' list='slider_button' />
</div>
</div>
)
}


export default SliderComponent;