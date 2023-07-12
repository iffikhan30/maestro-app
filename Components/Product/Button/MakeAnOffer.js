import * as React from 'react';
import { Linking } from 'react-native';
import { Button, Modal, FormControl, Input, Text, Heading, Divider } from "native-base";
import Price from '../../Helper/Price';
import Options from '../../Helper/Options';
const MakeAnOffer = (props) =>{
    const whatsappNumber = Options.number;
    const WhatsappMakeAnOffer = Options.WhatsappMakeAnOffer;
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>
                    <Heading fontSize="lg" mb="2">Make An Offer</Heading>
                    <Text>List Price</Text>
                    <Price currency={props.currency} sale={props.sale} regular={props.regular} />
                </Modal.Header>
                <Modal.Body>
                    <Heading fontSize="lg" mb="2">What's your offer?</Heading>
                    <Text fontSize="xs">We welcome you to offer a price to negotiate. If the price is within our acceptable range, one of our experts will reach out to you to with more information.</Text>
                    <FormControl>
                    <FormControl.Label>Offer Price*</FormControl.Label>
                        <Input type="number" variant="outline" placeholder='Offer Price' />
                    </FormControl>
                    <Divider my="3"/>
                    <Heading fontSize="lg" mb="2">Personal Info</Heading>
                    <FormControl mt="3">
                        <FormControl.Label>Name *</FormControl.Label>
                        <Input type="text" variant="outline" placeholder='Full Name' />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Email *</FormControl.Label>
                        <Input type="email" variant="outline" placeholder='Email Address' />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Phone *</FormControl.Label>
                        <Input type="number" variant="outline" placeholder='Phone Number' />
                    </FormControl>
                    <Text fontSize="xs" textAlign="center" my="3">One of our Maestro's will reach out to you in within one business day</Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        width="100%"
                        py="4"
                        variant="solid" 
                        rounded="lg"
                        _dark={{
                            backgroundColor: "primary.1300",
                            color: "secondary.100"
                        }} 
                        _light={{
                            backgroundColor: "primary.1300",
                            color: "secondary.100"
                        }}
                        onPress={() => setShowModal(true)}
                    >Make an Offer</Button>
                </Modal.Footer>
                </Modal.Content>
            </Modal>
            <Button
                py="4"
                variant="solid" 
                rounded="lg"
                _dark={{
                    backgroundColor: "primary.50",
                    color: "primary.100"
                }} 
                _light={{
                    backgroundColor: "primary.50", 
                    color: "secondary.100"
                }}
                onPress={()=>{
                    Linking.openURL(`whatsapp://send?text=${WhatsappMakeAnOffer}+${props.productTitle}%3F&phone=${whatsappNumber}`)
                }}
            >Make An Offer</Button>
            
        </>
    )
}
export default MakeAnOffer;