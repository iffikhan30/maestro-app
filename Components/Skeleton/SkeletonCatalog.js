import { Skeleton, Stack } from "native-base";

const SkeletonCatalog = () => {
    return ( 
        <Stack space={2}>
            <Skeleton height="100" />
            <Skeleton.Text px="4" />
            <Skeleton px="4" my="4" rounded="md"/>
        </Stack> 
        )
}
export default SkeletonCatalog;