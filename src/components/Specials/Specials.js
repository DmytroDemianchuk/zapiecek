import React from 'react';
import './Specials.css';
import specials1 from '../img/specials-1.png';
import specials2 from '../img/specials-2.png';
import specials3 from '../img/specials-3.png';
import specials4 from '../img/specials-4.png';
import specials5 from '../img/specials-5.png';

const Specials = () => {
  return (
    <section id="specials" className="specials">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>

        <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Architecto ut aperiam autem id</h3>
                    <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={specials1} alt="Special 1" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Et blanditiis nemo veritatis excepturi</h3>
                    <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={specials2} alt="Special 2" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                    <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                    <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={specials3} alt="Special 3" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                    <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                    <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={specials4} alt="Special 4" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                    <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                    <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={specials5} alt="Special 5" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
