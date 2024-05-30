import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({name, img}) => {
    return (
        <Card            
            title={name}
            cover={<img src={img} alt={name}/>}
            extra={<StarOutlined/>}
        >
            <Meta description="fire, magic"/>
        </Card>
    );
};
export {PokemonCard};