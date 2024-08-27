import React from 'react';
import './BookATable.css';

const BookATable = () => {
  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Rezerwacja</h2>
          <p>Zarezerwuj Stół</p>
        </div>

        <form
          action="forms/book-a-table.php"
          method="post"
          role="form"
          className="php-email-form aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-lg-6 col-md-12 form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-lg-6 col-md-12 form-group">
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                required
              />
            </div>
            <div className="col-lg-6 col-md-12 form-group">
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                required
              />
            </div>
            <div className="col-lg-6 col-md-12 form-group">
              <input
                type="time"
                className="form-control"
                name="time"
                id="time"
                required
              />
            </div>
            <div className="col-lg-6 col-md-12 form-group">
              <input
                type="number"
                className="form-control"
                name="people"
                id="people"
                placeholder="# of People"
                min="1"
                required
              />
            </div>
            <div className="col-lg-12 form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="form-group mt-3">
            <div className="loading">Loading...</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your booking request was sent. We will call back or send an email to confirm your reservation. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATable;
