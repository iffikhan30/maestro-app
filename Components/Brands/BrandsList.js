import SkeletonBrands from "../Skeleton/SkeletonBrands";
import BrandItem from "./BrandItem";
import {  VStack, HStack, Heading} from "native-base";

const BrandsList = (props) => {
    return (
        <VStack space="3" justifyContent="center">
            <Heading textAlign="center" fontSize="xl" fontWeight="Regular" mt="10" mb="10"> {props.title} </Heading>
            <HStack space={0} flex={1} flexDirection="row" w="100%" flexWrap="wrap" justifyContent="space-around">
                {props.items.map((item,i) => (
                    item.id != null && item.imageUrl ? 
                    <BrandItem 
                        key={item.id}
                        termid={item.id}
                        duration={i+1}
                        title={item.title}
                        slug={item.slug}
                        imageuri={item.imageUrl}
                    /> : <SkeletonBrands />
                ))}
            </HStack>
        </VStack>
    );
}

export default BrandsList;