/* eslint-disable */

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";


const baseURL = "";

axios({

});

const Mangas = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${baseURL}`,).then((response) => {
      setData((response.data));
    });
  }, []);
  return (
      <View>
        {data.map((d) => {
        return (
        <View>
         <Text>{JSON.stringify(d)}</Text>
        </View>
        );
      })}
    </View>
  );
};

export default Mangas;
