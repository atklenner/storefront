import { FaCompass } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="section is-large has-background-primary-light">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <p className="title">A Furniture Store</p>
              <p className="subtitle">You can buy nice furniture here.</p>
            </div>
            <div className="column is-half">some image</div>
          </div>
        </div>
      </section>
      <section className="section is-medium has-text-centered">
        <div className="container">
          <h1 className="title">Featured Products</h1>
          <Link to="/products" className="button">
            All Products
          </Link>
        </div>
      </section>
      <section className="section is-medium has-background-primary-light">
        <div className="container">
          <div className="columns">
            <h1 className="title column is-half">
              custom furniture built only for you
            </h1>
            <h2 className="subtitle column is-half">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </h2>
          </div>
          <div className="columns has-text-centered">
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <figure className="image is-128x128">
                      <FaCompass />
                    </figure>
                  </div>
                  <p className="title">Mission</p>
                  <div className="content">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum
                    at eros. Donec id elit non mi porta gravida at eget metus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras mattis consectetur
                    purus sit amet fermentum.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <figure className="image is-128x128">
                      <FaCompass />
                    </figure>
                  </div>
                  <p className="title">Vision</p>
                  <div className="content">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum
                    at eros. Donec id elit non mi porta gravida at eget metus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras mattis consectetur
                    purus sit amet fermentum.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <figure className="image is-128x128">
                      <FaCompass />
                    </figure>
                  </div>
                  <p className="title">History</p>
                  <div className="content">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum
                    at eros. Donec id elit non mi porta gravida at eget metus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras mattis consectetur
                    purus sit amet fermentum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="title">Join our newsletter and get 20% off</h1>
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sint unde quaerat ratione soluta veniam provident adipisci
                cumque eveniet tempore?
              </h2>
            </div>
            <div className="column is-half">
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="control">
                  <button className="button is-info">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
