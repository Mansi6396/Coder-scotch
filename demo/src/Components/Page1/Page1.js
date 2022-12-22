import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Page1.css";

import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function Page1() {
  const [subData, setSubData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    await axios
      .get(`https://swapi.dev/api/films`)

      .then((res) => {
        console.log("REeeeeeS::", res?.data?.results);
        setSubData(res?.data?.results);

      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    // if (EffectData.current) {
    // EffectData.current = false;
    getData();
    // }
  }, []);

  const MoreDetails = () => {
    navigate("/details");
  };

  return (
    <>
      <div className="bgcolor">
        <h1>Star War Movies</h1>
        <div className="marquee">
          <marquee behavior="scroll" direction="left" Scrollamount="10">
            In a dark place we find ourselves and a little more knowledge lights
            our way.!
          </marquee>
        </div>
        <div className="main">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {subData.map((val, index) => {
              console.log("value", val);
              console.log("index", index);
              return (
                <>
                  <Grid item xs={2} sm={4} md={4}>
                    <div className="card">
                      <div>Name:{val.title}</div>
                      <div>Episode Number:{val.episode_id}</div>
                      <div>Director:{val.director}</div>
                      <div>Relesed-date:{val.release_date}</div>
                      <button
                        className="button"
                        onClick={() => navigate(`/details/${index + 1}`)}
                      >
                        See More Details
                      </button>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}
