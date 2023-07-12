import * as React from 'react';
import NetInfo from "@react-native-community/netinfo";

const Network = () => {
    const [isInternet, setIsInternet] = React.useState(false);

    React.useEffect( () => {
        const fetchData = async () => {
          const state = await NetInfo.fetch();
          setIsInternet(state.isConnected);
        };
    
        fetchData();
    
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsInternet(state.isConnected);
        });
    
        return () => {
          unsubscribe();
        };
    }, [] ); // Empty dependency array to run the effect only once

    return isInternet 
}

export default Network;