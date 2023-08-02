import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 
            '0b0752c7e3msha5bab50045a6132p12661ajsn826b36b53881',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query}
      };

      const fetchData = async() => {
        setIsLoading(true);

        try {
          const response = await axios.request(options);
          setData(response.data.data);
          setIsLoading(false);
        } catch(err) {
          setError(err);
          alert('There is an error');
        } finally {
          setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch };

}

export default useFetch;