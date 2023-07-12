import { Skeleton, Stack } from "native-base";

const SkeletonModels = () => {
    return ( 
        <Stack space={2}>
            <Skeleton height="100" />
            <Skeleton.Text px="4" />
        </Stack> 
        )
}
export default SkeletonModels;