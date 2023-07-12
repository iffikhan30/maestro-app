import CatalogItem from "./CatalogItem";
import {  VStack, HStack } from "native-base";

const CatalogList = (props) => {
    return (
        <VStack space="3" justifyContent="center">
            <HStack space={0} flex={1} flexDirection="row" w="100%" flexWrap="wrap" >
                {props.items.map((item,i) => (
                    <CatalogItem 
                        key={item.id}
                        duration={i+1}
                        productid={item.id}
                        brand={item.brand}
                        model={item.model}
                        stock={item.stock}
                        regular_price={item.regular_price}
                        sale_price={item.sale_price}
                        scope_of_delivery={item.scope_of_delivery}
                        case_diameter={item.case_diameter}
                        year_of_production={item.year_of_production}
                        condition={item.condition}
                        thumbnail={item.thumbnail}
                        modeltitle={props.modeltitle}
                        modelslug={props.modelslug}
                        modelid={props.modelid}
                        brandtitle={props.brandtitle}
                        brandslug={props.brandslug}
                        brandid={props.brandid}
                    />
                ))}
            </HStack>
        </VStack>
    );
}

export default CatalogList;