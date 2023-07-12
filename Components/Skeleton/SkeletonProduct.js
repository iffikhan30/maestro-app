import { Skeleton, Stack } from "native-base";

const SkeletonProduct = () => {
    return ( 
        <Stack space={2}>
            <Skeleton height="350" />
            <Skeleton.Text px="4" />
            <Skeleton px="4" my="2" rounded="md" startColor="secondary.100" />
            <Skeleton px="4" my="2" rounded="md" startColor="primary.900" />
            <Skeleton px="4" my="2" rounded="md" startColor="primary.1300" />
            <Skeleton.Text px="4" />
            <Skeleton.Text px="4" />
            <Skeleton.Text px="4" />
        </Stack> 
        )
}
export default SkeletonProduct;