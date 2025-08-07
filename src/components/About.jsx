
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">Our Story</h2>
          <p>
            Founded in 2010, Flavour Fleet began as a small family-owned restaurant with a passion for bringing 
            authentic flavors from around the world to our community. Today, we've grown into a beloved dining 
            destination known for our innovative dishes and warm hospitality.
          </p>
          <p>
            Our chefs combine traditional techniques with modern creativity to deliver unforgettable dining 
            experiences. We source the freshest ingredients locally whenever possible to support our community 
            and ensure quality.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
        <div className="about-image">
          <img src="'//images/restaurantinterior.jpg.jpg'" alt="Restaurant interior" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
