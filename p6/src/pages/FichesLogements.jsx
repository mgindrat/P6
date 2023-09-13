import React from "react";
import logements from "../components/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer.jsx";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import redStar from './../assets/redStar.png'
import greyStar from './../assets/greyStar.png'


const FichesLogements = () => {

  const [Slider, setSlider] = useState([]);
	const {id} = useParams();
  const ActualAccommodation = logements.filter(logements => logements.id === id);

	
	useEffect(() => {
		const ActualAccommodation = logements.filter(logements => logements.id === id);
		if (ActualAccommodation.length > 0) {
    setSlider(ActualAccommodation[0].pictures);
	}
}, [id]);


const accommodationData = ActualAccommodation.length > 0 ? ActualAccommodation[0] : null;
const hostname = accommodationData ? accommodationData.host.name.split(' ') : [];
const rating = accommodationData ? accommodationData.rating : 0;
const equipments = accommodationData ? accommodationData.equipments : [];
const description = accommodationData ? accommodationData.description : '';



  return (
    <div>
      <Navigation />
      
      <Slideshow Slider={Slider}/>

      <main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{ActualAccommodation[0].title}</h1>
						<p>{ActualAccommodation[0].location}</p>
						<div>
							{ActualAccommodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='host_name'>
								<span>{hostname[0]}</span>
								<span>{hostname[1]}</span>
							</div>
							<img src={ActualAccommodation[0].host.picture} alt="hostname" />
						</div>
							
						<div className="stars-rating">
            {[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>

        <div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
				
			</main>
     
      <Footer />
    </div>
  );
};

export default FichesLogements;
