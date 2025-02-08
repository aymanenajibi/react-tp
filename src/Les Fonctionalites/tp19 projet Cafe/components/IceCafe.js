import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIceCafe,
  setLoading,
  setError,
  clearLoading,
} from "../redux/cafeSlice";
import axios from "axios";

const IceCafe = () => {
  const dispatch = useDispatch();
  const { iceCafe, loading, error } = useSelector((state) => state.cafe);

  useEffect(() => {
    const fetchIceCafe = async () => {
      dispatch(setLoading());
      try {
        const response = await axios.get("https://api.sampleapis.com/coffee/iced");
        dispatch(setIceCafe(response.data));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(clearLoading());
      }
    };
    fetchIceCafe();
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-4">Ice Cafe</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="row">
          {iceCafe.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IceCafe;
