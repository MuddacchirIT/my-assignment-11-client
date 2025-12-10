import { Link, Outlet } from "react-router";
const AboutUs = () => {
  return (
    <div className="max-w-[1650px] mx-auto space-y-2.5">
      <h2 className="text-2xl">About Us</h2>
      <p>
        From 1986 to present day, we have a long history as part of the Royal
        Mail Group and have been handling your parcels with speed and precision
        for decades. Read about our history, sustainability aims and partners
        below.
      </p>
      <nav>
        <ul className="flex justify-start space-x-15">
          <li>
            <Link to="story">Story</Link>
          </li>
          <li>
            <Link to="mission">Mission</Link>
          </li>
          <li>
            <Link to="success">Success</Link>
          </li>
          <li>
            <Link to="team&others">Team & Others</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AboutUs;
