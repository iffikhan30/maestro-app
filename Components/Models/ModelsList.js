import SkeletonModels from "../Skeleton/SkeletonModels";
import ModelItem from "./ModelItem";
import {  VStack, HStack, Heading } from "native-base";

const ModelsList = (props) => {
    return (
        <VStack space="3" justifyContent="center">
            <Heading textAlign="center" fontSize="xl" fontWeight="Regular" mt="10" mb="10"> { props.title } </Heading>
            <HStack space={0} flex={1} flexDirection="row" w="100%" flexWrap="wrap" >
                {props.items.map((item,i) => (
                    item.id != null && item.imageUrl ? 
                    <ModelItem 
                        key={item.id}
                        duration={i+1}
                        title={item.title}
                        imageuri={item.imageUrl}
                        modelid={item.id}
                        modelslug={item.slug}
                        modeltitle={item.title}
                        brandid={props.brandid}
                        brandslug={props.brandslug}
                        brandtitle={props.brandtitle}
                    /> : <SkeletonModels />
                ))}
            </HStack>
        </VStack>
    );
}

export default ModelsList;