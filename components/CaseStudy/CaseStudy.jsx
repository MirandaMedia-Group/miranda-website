import ReferenceItem from '../ReferenceItem/ReferenceItem'
import styles from './CaseStudy.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'

const CaseStudy = (props) => {
	return (
		<>
			<div className='narrow text-center'>
				<div className='column'>
					<h2>Další case study</h2>
				</div>
				<div className='column'>
					<p>Omrkněte i další případovky neméně zajímavých projektů jako je tento.</p>
				</div>
			</div>
			<Swiper
				modules={[Pagination]}
				spaceBetween={20}
				slidesPerView={1}
				pagination
				//pagination

				breakpoints={{
					767: {
						slidesPerView: 2,
					},
				}}
			>
				{props.reference &&
					props.reference.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<ReferenceItem data={item}></ReferenceItem>
							</SwiperSlide>
						)
					})}
			</Swiper>
		</>
	)
}

export default CaseStudy
