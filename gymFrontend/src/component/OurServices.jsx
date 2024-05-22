import React from 'react';

const cardClasses = 'flex flex-col';
const imageClasses = 'rounded-lg shadow-lg mb-4';
const titleClasses = 'text-2xl font-bold mb-2';

const FeatureCard = ({ imageUrl, altText, title, description }) => {
  return (
    <div className={cardClasses}>
      <img src={imageUrl} alt={altText} className={imageClasses} />
      <h2 className={titleClasses}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
    let equipment = "https://png.pngtree.com/thumb_back/fw800/background/20230720/pngtree-3d-rendered-gym-equipment-against-dark-background-image_3763736.jpg";
    let community = "https://www.planetfitness.com/sites/default/files/feature-image/personaltraine_513961.jpg";
    let personal = "https://images.squarespace-cdn.com/content/v1/5fdfeb249d00c472c28c8e82/1702926795699-H0NCF8P0VV8N77A4IVBA/exercise-gym-trainer-weights.jpg";
    let amenities = "https://images.squarespace-cdn.com/content/v1/5ada11772714e5eb213ab1df/1658252236203-LSJ57V3BHJ8WDAWQ41XA/Yard-8-Fitness-Amenity.jpg";
  return (
    <div className="container mx-auto p-4"> 
    <center><h2 id='features' className="text-3xl text-red-500 font-bold mb-8">Our Features</h2></center>
      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          imageUrl={equipment}
          altText="Equipment"
          title="Equipment"
          description="At Structure Health & Fitness, we are dedicated to transforming your fitness aspirations into reality. Our range of fitness equipment is meticulously designed to cater to all your exercise needs, whether you're a beginner or a seasoned athlete. From treadmills that propel you towards your cardio goals to weightlifting apparatus that build strength, our high-end products ensure a holistic workout experience. Join us on the path to a healthier lifestyle, backed by the reliability of Structure Health & Fitness."
        />
        <FeatureCard
          imageUrl={community}
          altText="Community Cares"
          title="Community Cares"
          description="Welcome to our vibrant gym community, where support is the foundation of our fitness journey. Join us to experience a welcoming atmosphere filled with like-minded individuals. Our monthly challenges keep you motivated and striving for your goals, while our online platforms proudly showcase your transformation to inspire others."
        />
        <FeatureCard
          imageUrl={personal}
          altText="Personal Training At Its Best"
          title="Personal Training At Its Best"
          description="Our personalized training program is designed to help you achieve your fitness goals efficiently. Our expert trainers not only guide you through effective workouts but also provide tailored diet charts to optimize your progress. Attain your fitness potential with our transformative program. Start your journey today."
        />
        <FeatureCard
          imageUrl={amenities}
          altText="Our Amenities"
          title="Our Amenities"
          description="Experience a gym like no other with our top-notch amenities. Store your belongings in secure lockers, then unwind in our pool, jacuzzi, and sauna. Treat yourself to a rejuvenating massage at our spa or grab a healthy refreshment at our health bar. Our well-maintained shower facilities ensure you leave feeling refreshed and ready to conquer the day. Discover the perfect balance of fitness and relaxation at Structure Health & Fitness."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
