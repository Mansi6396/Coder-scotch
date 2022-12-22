import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Page2.css";
import bg from "../../Imges/2564207.jpg";
export default function Page2() {
  const [details, setDetails] = useState();

  const { id } = useParams();

  const getDataById = async () => {
    console.log("IDD", id);
    await axios
      .get(`https://swapi.dev/api/films/${id}`)

      .then((res) => {
        console.log("details::", res?.data);
        setDetails(res?.data);
      })
      .catch((err) => {
        return err;
      });
  };
  useEffect(() => {
    getDataById();
  }, []);
  return (
    <>
      <div className="backdrop">
        {details ? (
          <>
            <div>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={6} md={6}>
                  <div className="card">
                    <img className="image" src={bg} />
                  </div>
                </Grid>
                <Grid item xs={2} sm={6} md={6}>
                  <div className="Details">
                    <h1>{details.title}</h1>

                    <p className="Description">{details.opening_crawl}</p>
                    <h4>Producer:</h4>
                    <p className="pera">{details.producer}</p>
                    <h4>created on:</h4>
                    <p className="pera">{details.created}</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </>
        ) : (
          <div>Loading......</div>
        )}
      </div>
    </>
  );
}
