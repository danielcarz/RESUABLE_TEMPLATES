import React, { useEffect, useState } from "react";

export const useGetTime = () => {
    
    const initialTime = 5 * 3600 + 60 * 59 + 60; // 3 horas, 50 minutos, 31 segundos
    const [tiempoRestante, setTiempoRestante] = useState(initialTime);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (tiempoRestante > 0) {
          setTiempoRestante(tiempoRestante - 1);
        }
      }, 1000);
  
      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, [tiempoRestante]);
  
    const formatTiempoRestante = () => {
      const horas = Math.floor(tiempoRestante / 3600);
      const minutos = Math.floor((tiempoRestante % 3600) / 60);
      const segundos = tiempoRestante % 60;
  
      
      return{
        horas,
        minutos,
        segundos
      }
    };

    return {formatTiempoRestante};

}