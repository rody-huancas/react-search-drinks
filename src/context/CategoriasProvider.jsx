import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const url = "https://thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const { data } = await axios(url);
        setCategorias(data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
