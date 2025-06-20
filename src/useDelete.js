import {useState} from 'react';
const useDelete = (endpoint, setData) => {
    const [error, setError] = useState(null);

    const handleRemove = async (id) => {
        try{
           const res = await fetch(`http://localhost:8000/${endpoint}/${id}`, {
                method: "DELETE",
            });
        
        if (!res.ok) {
            throw new Error('Impossible remove that recipe')
        };

        setData(prev => prev.filter(item => item.id !== id));
        console.log("recipe deleted!");
        } catch (err) {
            console.error("We can't remove that", err);
            setError(err.message);
        }
    };
    return { handleRemove, error};
};
 
export default useDelete;