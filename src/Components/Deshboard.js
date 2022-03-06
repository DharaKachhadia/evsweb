import React from "react";
import {
  MdAccountCircle,
  MdSupervisorAccount,
  MdSpeed,
  MdOutlinePayment,
} from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { IoMdAddCircle, IoMdHelpCircle } from "react-icons/io";
import { HiLocationMarker, HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

const Deshboard = () => {
  return (
    <>
      <div class="row grid-com">
        <div class="col-xs-6 col-sm-4 col-lg-2 grid-left-com pt-5">
          <MdAccountCircle size={120} className="icon-color" />
          <h2>Owner Name</h2>
          <h6>owner@gmail.com</h6>
          <hr />
          <p>
            <MdSpeed className="icon-color" />
            <Link to="/deshboard" className="links">
              Deshboard
            </Link>
          </p>
          <p>
            <MdSupervisorAccount className="icon-color" />
            <Link to="/Profile" className="links">
              My profile
            </Link>
          </p>

          <p>
            <AiOutlineHistory className="icon-color" />
            <Link to="/history" className="links">
              History
            </Link>
          </p>
          <p>
            <IoMdAddCircle className="icon-color" />
            <Link to="/station" className="links">
              Add Station
            </Link>
          </p>
          <p>
            <MdOutlinePayment className="icon-color" />
            <Link to="/payment" className="links">
              Payment
            </Link>
          </p>
          <p>
            <HiLocationMarker className="icon-color" />
            <Link to="/location" className="links">
              My Location
            </Link>
          </p>
          <p>
            <IoMdHelpCircle className="icon-color" />
            <Link to="/help" className="links">
              Help
            </Link>
          </p>
          <hr />
          <button className="btn btn-success">
            <HiOutlineLogout />
            Log Out
          </button>
        </div>
        <div className="col-xs-6 col-sm-8 col-lg-10 grid-right-com">
          <h2 className="history">
            <MdSpeed className="icon-color" />
            Deshboard
          </h2>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success position-absolute top-30 end-0"
        >
          <IoMdAddCircle />
          <Link to="/station">Add Station</Link>
        </button>
      </div>
    </>
  );
};

export default Deshboard;
