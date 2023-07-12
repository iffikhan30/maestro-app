import * as React from 'react';
import { Box, Stack, Text, Icon, Pressable,Heading } from "native-base";
import { useRoute } from '@react-navigation/native';
import Title from './Title';
import Meta from './Meta';
import BuyNow from './Button/BuyNow';
import WhatsApp from './Button/WhatsApp';
import MakeAnOffer from './Button/MakeAnOffer';
import ProductAttributes from './ProductAttributes';
import ProductFields from './ProductFields';
import Content from './Content';
import Gallery from './Gallery';
import Wrapper from '../UI/Wrapper';
import Price from '../Helper/Price';
import WishButton from '../Wish/WishButton';
import ItemView from './ItemView';
import ProductAp from '../Apis/ProductApi';

const Product = (props) => {
    const route = useRoute();
    const { brandid, brandslug, modelid, modelslug, productid, productslug } = route.params;
    const [api404, setApi404] = React.useState(true);
    const [notFound, setNotFound] = React.useState(true);
    const [api404message, setApi404message] = React.useState();
    const [api, setApi] = React.useState([]);
    const ProductApi = {
        id: productid,
        title: api.name,
        slug: productslug,
        reference: api.serial_number,
        sku: api.sku,
        view: '118',
        attributes: [
            {
                termid: brandid,
                termkey: 'Brands',
                termname: brandslug,
            },
            {
                termid: modelid,
                termkey: 'Models',
                termname: modelslug,
            }
        ],
        currency: 'AED',
        regular_price: api.price,
        sale_price: '',
        gallery: api.gallery,
        featuredimage: api.listing_image ? api.listing_image.url : '',
        content: api.content,
        customfields: [                
            {   
                detail : [
                    {
                        title: 'Reference Number:',
                        value: api.reference_number,
                    },
                    {
                        title: 'Year Of Production:',
                        value: api.year_of_production,
                    },
                    {
                        title: 'Gender:',
                        value: api.gender,
                    },
                    {
                        title: 'Condition:',
                        value: api.condition,
                    },
                    {
                        title: 'Condition Details:',
                        value: api.condition_details,
                    },
                    {
                        title: 'Scope:',
                        value: api.scope_of_delivery ? api.scope_of_delivery.label : '',
                    }
                ]
            },
            {   
                detail : [
                    {
                        title: 'Case Material:',
                        value: api.case_material,
                    },
                    {
                        title: 'Case Diameter:',
                        value: api.case_diameter,
                    },
                    {
                        title: 'Dial Color:',
                        value: api.dial_color,
                    },
                    {
                        title: 'Dial Numerals:',
                        value: api.dial_numerals,
                    },
                    {
                        title: 'Bezel Material:',
                        value: api.bezel_material,
                    }
                ]
            }
        ],
    };
    return (
        <Wrapper>
            {api404 === false ? 
            <ApiError apiMessage={api404message} /> : ( notFound != true ?  <ApiNotFound apiMessage={api404message} notFound={setNotFound} /> : 
            <>
                <ProductAp
                    setApi404={setApi404}
                    setNotFound={setNotFound}
                    setApi404message={setApi404message}
                    setApi={setApi}
                    setProductId={productid}
                />
                <Stack>
                    <WishButton productid={ ProductApi.id } productImage={ ProductApi.featuredimage } productTitle={ProductApi.title} brandName={brandslug}/>
                    {!Array.isArray(ProductApi.gallery) ? '' : <Gallery gallery={ProductApi.gallery} />}
                </Stack>
                <Box alignItems="center"
                    rounded="lg" 
                    overflow="hidden" 
                    _dark={{
                        backgroundColor: "primary.200"
                    }} 
                    _light={{
                        backgroundColor: "secondary.200"
                    }}
                    m="3"
                >
                    <Stack px="3" py="4">
                        { ProductApi.title ? 
                        <Stack>
                            <Title title={ProductApi.title} />
                        </Stack>
                        : '' }

                        { ProductApi.regular_price ? 
                        <Stack mt="2">
                            <Heading>
                            <Price currency={ProductApi.currency} sale={ProductApi.sale_price} regular={ProductApi.regular_price} />
                            </Heading>
                        </Stack> : '' }
                        <Stack my="2" >
                            {ProductApi.reference ? <Meta name="Serial Number:" value={ProductApi.reference} /> : ''}
                            {ProductApi.sku ? <Meta name="SKU:" value={ProductApi.sku} /> : '' }
                        </Stack>
                        {ProductApi.view ? <ItemView itemview={ProductApi.view} /> : ''}
                        <Stack my="4" space={3}>
                            <MakeAnOffer productTitle={ProductApi.title} currency={ProductApi.currency} sale={ProductApi.sale_price} regular={ProductApi.regular_price} />
                            <WhatsApp productTitle={ProductApi.title} />
                            <BuyNow productTitle={ProductApi.title} productid={ProductApi.id} />
                        </Stack>
                        { !Array.isArray(ProductApi.attributes) ? '' : 
                        <Stack>
                            <ProductAttributes attributes={ProductApi.attributes}/>
                        </Stack>
                        }
                        { !Array.isArray(ProductApi.customfields) ? '' : 
                        <Stack my="2">
                            { !Array.isArray(ProductApi.customfields[0].detail) ? '' : 
                                <ProductFields title="Watch Detail" content={ProductApi.customfields[0].detail} />
                            }
                            { !Array.isArray(ProductApi.customfields[1].detail) ? '' : 
                                <ProductFields title="Case & Dial" content={ProductApi.customfields[1].detail} />
                            }
                        </Stack>
                        }
                        { ProductApi.content != null ? 
                        <Stack mb="2">
                            <Content content={ProductApi.content} />
                        </Stack> 
                        : ''}
                    </Stack>
                </Box>
            </> 
            )
        }
        </Wrapper>

    )
}

export default Product;