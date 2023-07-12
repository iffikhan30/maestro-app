import * as React from 'react';
import { Box, Image, Stack } from "native-base";
import BrandsList from './BrandsList';
import Wrapper from '../UI/Wrapper';
import Options from '../Helper/Options';
import BrandsApi from '../Apis/BrandsApi';
import ApiError from '../Errors/ApiError';
import ApiNotFound from '../Errors/ApiNotFound';

const Brands = (props) => {
    const BrandTitle = Options.brandTitle;
    const [api404, setApi404] = React.useState(true);
    const [notFound, setNotFound] = React.useState(true);
    const [api404message, setApi404message] = React.useState();
    const [api, setApi] = React.useState([]);

    return (
        <Wrapper>
            <Box mt="10" 
            _dark={{
                backgroundColor: "primary.50"
            }} 
            _light={{
                backgroundColor: "secondary.50"
            }} >
                <BrandsApi 
                    setApi404={setApi404}
                    setNotFound={setNotFound}
                    setApi404message={setApi404message}
                    setApi={setApi}
                />
                { api404 === false ? <ApiError apiMessage={api404message} />  : ( notFound === false ?  <ApiNotFound apiMessage={api404message} /> : <BrandsList items={api} title={BrandTitle} /> )}
                <Stack mt="1/6" alignItems="center">
                    <Image 
                        testID="maestro"
                        alt="Shop Luxury Watches in Dubai | New &amp; Used Luxury Watches"
                        title="Shop Luxury Watches in Dubai | New &amp; Used Luxury Watches"
                        fadeDuration={500}
                        source={{ uri: `https://watchmaestro.com/wp-content/uploads/2023/06/logo-gray.png` }}
                        resizeMode={'contain'}
                        style={{ width: 177, height: 39 }}
                    />
                </Stack>
            </Box>
        </Wrapper>
    )
}

export default Brands;