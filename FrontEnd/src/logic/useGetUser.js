import { useState, useEffect } from "react";

export function useGetUser({ buscar }) {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (buscar) {
            setLoading(true);
            const timer = setTimeout(() => {
                fetch('http://localhost:8000/users/', { method: 'GET' })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return res.json();
                    })
                    .then(response => {
                        setUserData(response);
                        setLoading(false);
                    })
                    .catch(err => {
                        setError(err);
                        setLoading(false);
                    }).finally(() => {
                        clearTimeout(timer);
                        setLoading(false);
                    });
            }, 5000);
            return () => clearTimeout(timer); // Limpia el temporizador al desmontar
        }else{
            setLoading(false);
        }
    }, [buscar]);

    return { userData, loading, error };
}
