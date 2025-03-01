import { useState, useCallback, useEffect } from "react";
import axios from "axios"; //to run this you must have axois dependence 

//hook for delete
export const useDelete = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null);//error check

  const deleteItem  = useCallback(async (id: string | number) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${url}/${id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { deleteItem, loading, error };// deleteitem:delete that item  that have that id ,
};

//hook for fetch data
export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<T>(url);
      setData(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };  //data : user data from api , loading :loading screen,error:show error if counter 
};
