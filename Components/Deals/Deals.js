import * as React from 'react';
import { Box } from "native-base";
import DealList from './DealList';
import Wrapper from '../UI/Wrapper';

const Deals = (props) => {
    const DealTitle = "Deals";
    const DealApi = [
        {
            id: '67853',
            brandid: '539',
            brandslug: 'audemars-piguet',
            modelid: '935',
            modelslug: 'royal',
            title: 'Audemars Piguet Royal Oak Chronograph 41mm',
            slug: 'audemars-piguet-royal-0ak-chronograph-41mm',
            excerpt: 'Royal Oak 41mm 2023 - Unworn',
            extra: 'Watch with original box and papers',
            currency: 'AED',
            regular_price: '199900',
            sale_price: '189900',
            stock: 1,
            imageUrl: 'https://watchmaestro.com/wp-content/uploads/2023/04/AP-Royal-Oak-50th-White-Dial-Product.webp',
            gallery:[
                {
                    id: '1',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chronograph-Silver-dial.webp'
                },
                {
                    id: '2',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chrono.webp'
                },
                {
                    id: '3',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chronograh.webp'
                },
                {
                    id: '4',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chrono-white-dial.webp'
                },
                {
                    id: '5',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chrono-steel.webp'
                },
                {
                    id: '6',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chronograph-white.webp'
                },
                {
                    id: '7',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chrono-stainless-steel.webp'
                },
                {
                    id: '8',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chronograph-steel.webp'
                },
                {
                    id: '9',
                    image: 'https://watchmaestro.com/wp-content/uploads/2023/05/AP-Royal-Oak-Chrono-Box.webp'
                }
            ],
        }
    ];
    return (
        <Box>
            <DealList items={DealApi} title={DealTitle} brandid="539" brandslug="audemars-piguet" modelid="935"  modelslug="royal" />
        </Box>
    )
}

export default Deals;