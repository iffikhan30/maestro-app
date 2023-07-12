import * as React from 'react';
import { Button, Icon, Text, Modal, Slider, Divider, HStack } from "native-base";
import Feather from '@expo/vector-icons/Feather';
import PriceRange from './PriceRange';
import YearRange from './YearRange';
const Filter = (props) => {
    const [showFilter, setShowFilter] = React.useState(false);
    return (<><Button 
        onPress={() => setShowFilter(true)}
        w={'100%'}
        justifyContent="space-between" 
        flexBasis="46%" 
        rounded="lg"
        h={'12'}
        ml="1.5"
        mb="1.5"
        _dark={{
            backgroundColor: "primary.100",
            color: "primary.50"
        }} 
        _light={{
            backgroundColor: "secondary.100",
            color: "secondary.50"
        }}
        leftIcon={<Icon _dark={{
            color: "primary.50"
        }} 
        _light={{
            color: "secondary.50"
        }} size="md" as={<Feather name={'sliders'} />} />}

        rightIcon={<Icon 
            ml={'12'}
        _dark={{
            color: "primary.50"
        }} 
        _light={{
            color: "secondary.50"
        }} size="2xl" as={<Feather name={'chevron-down'} />} />}
        ><Text _dark={{
            color: "primary.50"
        }} 
        _light={{
            color: "secondary.50"
        }} fontWeight={600}>FILTER</Text></Button>
        <Modal isOpen={showFilter} onClose={() => setShowFilter(false)} _backdrop={{
            _dark: {
                bg: "coolGray.800"
            },
            bg: "warmGray.50"
            }} justifyContent="flex-end" bottom="4" size="lg">
                <Modal.Content>
                <Modal.Body>
                    <YearRange years={props.items} handleYearChange={props.handleYearChange} />
                    <Divider my={'3'}/>
                    <PriceRange prices={props.items} />
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="light" onPress={() => {
                    setShowFilter(false);
                    }} _dark={{
                        backgroundColor: "primary.50",
                        color: "primary.100"
                    }} 
                    _light={{
                        backgroundColor: "primary.50", 
                        color: "secondary.100"
                    }}>
                        Cancel
                    </Button>
                    <Button 
                    _dark={{
                        backgroundColor: "primary.1300",
                        color: "primary.50"
                    }} 
                    _light={{
                        backgroundColor: "primary.1300",
                        color: "secondary.50"
                    }}
                    onPress={() => {
                        setShowFilter(false);
                    }}>
                        Apply
                    </Button>
                    </Button.Group>
                </Modal.Footer>
                </Modal.Content>
            </Modal></>);
}
export default Filter;