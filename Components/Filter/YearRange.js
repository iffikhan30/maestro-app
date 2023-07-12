import * as React from 'react';
import { HStack, Text, Slider, Box } from "native-base";


const YearRange = (props) => {
    const years = props.years.map((item) => item.year_of_production);
    const lowest = Math.min(...years);
    const highest = Math.max(...years);
    const [onYearValue, setOnYearValue] = React.useState(lowest);
    const [onYearEndValue, setOnYearEndValue] = React.useState(lowest);
    
    return (
        !Array.isArray(props.years) ? '': <>
            <HStack flex={1} justifyContent="space-between" mb={'2'}>
                <Text>Year </Text><Text fontSize={'xs'}>{onYearEndValue}</Text><Text fontSize={'xs'}>[ {lowest} - {highest} ]</Text>
            </HStack>
            <Slider defaultValue={highest != lowest && highest>=lowest ? lowest+1 : ''} minValue={lowest} maxValue={highest}  size="sm" colorScheme="green" 
                onChange={props.handleYearChange} onChangeEnd={v => {
                    v && setOnYearEndValue(Math.floor(v));
                }}>
                <Slider.Track bg="green.100">
                    <Slider.FilledTrack bg="green.600" />
                </Slider.Track>
                <Slider.Thumb />
            </Slider>
        </>
    )
}
export default YearRange;