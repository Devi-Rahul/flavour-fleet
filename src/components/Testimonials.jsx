const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "The truffle pasta is absolutely divine! I come here every week just for that dish.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      comment: "Excellent service and even better food. The ambiance is perfect for date nights.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      comment: "As a food blogger, I've tried many restaurants. Flavour Fleet stands out with its creativity.",
      rating: 4
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="stars">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="comment">"{testimonial.comment}"</p>
              <p className="name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;