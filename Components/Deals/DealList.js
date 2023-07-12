import {  VStack, HStack } from "native-base";
import DealItem from "./DealItem";

const DealList = (props) => {
    return (
        <VStack space="3" justifyContent="center">
            <HStack space={0} flex={1} flexDirection="row" w="100%" flexWrap="wrap" >
                {props.items.map((item,i) => (
                    <DealItem
                        key={item.id}
                        duration={i+1}
                        title={item.title}
                        productid={item.id}
                        productslug={item.slug}
                        excerpt={item.excerpt}
                        currency={item.currency}
                        regular_price={item.regular_price}
                        sale_price={item.sale_price}
                        imageuri={item.imageUrl}
                        stock={item.stock}
                        extra={item.extra}
                        modelslug={item.modelslug}
                        modelid={item.modelid}
                        brandslug={item.brandslug}
                        brandid={item.brandid}
                        gallery={item.gallery}
                    />
                ))}
            </HStack>
        </VStack>
    );
}

export default DealList;