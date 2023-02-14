import { useNavigate } from "react-router";

const useFunction =()=>{
    const navigate = useNavigate();
    const navigation =(location)=>{
        navigate(location);
    }

    return {navigation}
}

export default useFunction;